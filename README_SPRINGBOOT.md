#  Verses Backend - Spring Boot Implementation

This directory contains the core business logic and data persistence layer for the Verses platform.

##  Tech Stack

- **Spring Boot 3.2.5**: Core framework for RESTful services.
- **Spring Data JPA**: Abstraction layer for database operations.
- **H2 Database**: In-memory database for rapid development and testing.
- **Lombok**: Annotation-based boilerplate reduction (Getters, Setters, etc.).
- **Maven**: Dependency management and build automation.

## API Endpoints

| Method | Endpoint                   | Description                                      |
| :----- | :------------------------- | :----------------------------------------------- |
| `GET`  | `/api/verses`              | Fetch all verses (supports `?query=` for search) |
| `GET`  | `/api/verses/{id}`         | Fetch a specific verse by ID                     |
| `POST` | `/api/verses`              | Create a new verse                               |
| `POST` | `/api/verses/{id}/vote`    | Cast a vote (requires `optionId` param)          |
| `POST` | `/api/verses/{id}/like`    | Increment like count for a verse                 |
| `POST` | `/api/verses/{id}/comment` | Add a comment to a verse                         |

## Database Schema

The application uses a relational schema with the following entities:

- **Verse**: The main entity containing title, description, type, and metadata.
- **VoteOption**: Associated with a Verse, tracks text and vote counts.
- **Comment**: Associated with a Verse, tracks user comments and likes.

## Search Implementation

Search is handled at the database level using **JPQL** in the [VerseRepository](file:///home/decibel/Downloads/Spring%20II/verses-backend/src/main/java/com/verses/repository/VerseRepository.java):

```java
@Query("SELECT v FROM Verse v WHERE LOWER(v.title) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(v.description) LIKE LOWER(CONCAT('%', :query, '%'))")
List<Verse> searchVerses(@Param("query") String query);
```

## Configuration

The application is configured via [application.properties](file:///home/decibel/Downloads/Spring%20II/verses-backend/src/main/resources/application.properties).

- **H2 Console**: Accessible at `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:versesdb`
- **Credentials**: `sa` / `password`

## Build & Run

```bash
mvn clean install
mvn spring-boot:run
```

