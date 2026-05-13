# Spring Boot Implementation

## Recommended Stack
- **Spring Boot 3.x**
- **Spring Data JPA**
- **Spring Web**
- **PostgreSQL Driver**
- **Lombok** (to reduce boilerplate)

## Key Components

### 1. The Entity (The "Model")
```java
@Entity
@Table(name = "verses")
public class Verse {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String title;
    private String description;
    
    @Enumerated(EnumType.STRING)
    private VerseType type;
    
    @OneToMany(mappedBy = "verse", cascade = CascadeType.ALL)
    private List<VerseOption> options;
    
    // ... getters/setters
}
```

### 2. The Repository (The "Data Access" using JPQL)
We use **JPQL (Java Persistence Query Language)** to define custom queries. JPQL operates on entities and their properties rather than database tables and columns, ensuring our queries are database-agnostic.

```java
public interface VerseRepository extends JpaRepository<Verse, UUID> {
    
    // Simple JPQL query
    @Query("SELECT v FROM Verse v WHERE v.isTakenDown = false ORDER BY v.createdAt DESC")
    List<Verse> findActiveVerses();

    // JPQL with parameters (Named Parameters)
    @Query("SELECT v FROM Verse v JOIN v.options o WHERE o.voteCount > :minVotes")
    List<Verse> findHighlyEngagedVerses(@Param("minVotes") Integer minVotes);

    // Aggregate JPQL query
    @Query("SELECT v.type, COUNT(v) FROM Verse v GROUP BY v.type")
    List<Object[]> countVersesByType();

    // Derived Query Method (Spring Data translates this to JPQL automatically)
    List<Verse> findByTitleContainingIgnoreCase(String keyword);
}
```

### 3. Why JPQL?
- **Database Portability**: Since JPQL is parsed into the specific SQL dialect of your database (PostgreSQL, H2, Oracle), you can switch databases without rewriting queries.
- **Object-Oriented**: You work with Java classes and fields, making the code more readable and maintainable for Java developers.
- **Type Safety**: JPQL queries are validated against your Entity models during startup.

### 3. The Controller (The "API")
```java
@RestController
@RequestMapping("/api/verses")
public class VerseController {
    @Autowired
    private VerseService verseService;

    @GetMapping
    public List<Verse> getDiscovery() {
        return verseService.getActiveVerses();
    }

    @PostMapping("/{verseId}/vote/{optionId}")
    public ResponseEntity<?> vote(@PathVariable UUID verseId, @PathVariable UUID optionId) {
        verseService.recordVote(verseId, optionId);
        return ResponseEntity.ok().build();
    }
}
```

## Application.properties Configuration
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/verses_db
spring.datasource.username=postgres
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```
