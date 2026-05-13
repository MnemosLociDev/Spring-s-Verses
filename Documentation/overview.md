# Full-Stack Architecture Overview

The **Verses** application has successfully transitioned from a client-side Vanilla JS prototype to a robust, full-stack application. This document describes the current architecture and data flow.

## 🏗️ System Architecture

| Feature | Implementation |
| :--- | :--- |
| **Frontend** | Vanilla JS + Vite + Tailwind CSS |
| **Backend** | Spring Boot 3.2.5 (Java 17) |
| **Database** | H2 In-Memory (Dev) / PostgreSQL (Prod) |
| **API Style** | RESTful JSON API |
| **State Management** | Reactive Store (Frontend) + JPA Persistence (Backend) |

## 🔄 Data Flow

1.  **Request**: The frontend ([api.js](file:///home/decibel/Downloads/Spring%20II/verses-frontend/src/api.js)) sends an HTTP request to the backend.
2.  **Processing**: The [VerseController](file:///home/decibel/Downloads/Spring%20II/verses-backend/src/main/java/com/verses/controller/VerseController.java) receives the request and delegates to [VerseService](file:///home/decibel/Downloads/Spring%20II/verses-backend/src/main/java/com/verses/service/VerseService.java).
3.  **Persistence**: The service uses [VerseRepository](file:///home/decibel/Downloads/Spring%20II/verses-backend/src/main/java/com/verses/repository/VerseRepository.java) to perform CRUD operations via Spring Data JPA.
4.  **Response**: The backend returns a JSON representation of the updated entity.
5.  **UI Update**: The frontend [store.js](file:///home/decibel/Downloads/Spring%20II/verses-frontend/src/store.js) updates the local state and triggers a re-render.

## 🛠️ Key Technical Decisions

- **JPQL for Search**: We use custom JPQL queries to handle case-insensitive global search across titles and descriptions.
- **Lombok for Boilerplate**: Used to keep Java entities clean and readable.
- **CORS Configuration**: Enabled in the Controller to allow the Vite dev server (`port 5173`) to communicate with the Spring Boot server (`port 8080`).
- **Modular Frontend**: The UI is broken down into reusable components and pages, making it easy to maintain without a heavy framework.
