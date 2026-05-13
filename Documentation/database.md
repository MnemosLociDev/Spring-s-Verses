# Database Schema Design (PostgreSQL)

To support the current features of Verses, we need a relational schema that handles nested relationships (Verses -> Options -> Votes).

## Relational Schema

### 1. `users` Table
Stores account information and roles.
- `id`: UUID (Primary Key)
- `username`: VARCHAR(50) (Unique)
- `email`: VARCHAR(100) (Unique)
- `role`: VARCHAR(20) (e.g., 'USER', 'ADMIN')
- `password_hash`: TEXT

### 2. `verses` Table
The core content.
- `id`: UUID (Primary Key)
- `title`: VARCHAR(255)
- `description`: TEXT
- `type`: VARCHAR(20) (poll, debate, etc.)
- `creator_id`: UUID (FK to users)
- `likes_count`: INTEGER (Default 0)
- `is_taken_down`: BOOLEAN (Default false)
- `created_at`: TIMESTAMP

### 3. `verse_options` Table
The choices within a verse.
- `id`: UUID (Primary Key)
- `verse_id`: UUID (FK to verses)
- `option_text`: VARCHAR(255)
- `vote_count`: INTEGER (Default 0 - This can also be calculated dynamically from a `votes` table)

### 4. `votes` Table (Audit Log)
Prevents double-voting and tracks user activity.
- `id`: BIGINT (Primary Key)
- `user_id`: UUID (FK to users)
- `verse_id`: UUID (FK to verses)
- `option_id`: UUID (FK to options)
- `voted_at`: TIMESTAMP

### 5. `comments` Table
- `id`: UUID (Primary Key)
- `verse_id`: UUID (FK to verses)
- `user_id`: UUID (FK to users)
- `text`: TEXT
- `likes`: INTEGER
- `created_at`: TIMESTAMP

## Optimization Strategy
- **Indexing**: Add indices on `verses.created_at` for feed performance and `votes(user_id, verse_id)` to quickly check if a user has already participated.
- **Aggregates**: While we store `vote_count` for performance, the `votes` table serves as the source of truth for auditing.
