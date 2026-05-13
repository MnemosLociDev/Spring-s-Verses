# Security and Authentication

A real-world application requires securing user data and administrative actions.

## 1. Spring Security Configuration
Add the `spring-boot-starter-security` dependency.

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests()
            .requestMatchers(HttpMethod.GET, "/api/verses/**").permitAll()
            .requestMatchers("/api/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
            .and()
            .httpBasic(); // Or JWT / OAuth2
        return http.build();
    }
}
```

## 2. Stateless Auth (JWT)
For a modern SPA approach, it is highly recommended to use **JSON Web Tokens (JWT)**:
1. User logs in at `POST /api/auth/login`.
2. Backend returns a `Signed JWT`.
3. Frontend stores JWT in `localStorage` or `HTTP-Only cookies`.
4. Frontend includes JWT in the `Authorization` header for every subsequent request.

## 3. Row-Level Security
When a user attempts to edit a verse or a comment, the backend must verify ownership:
```java
public void updateComment(UUID commentId, String text, User currentUser) {
    Comment comment = repository.findById(commentId).orElseThrow();
    if (!comment.getUser().getId().equals(currentUser.getId())) {
        throw new AccessDeniedException("Not your comment");
    }
    comment.setText(text);
    repository.save(comment);
}
```
