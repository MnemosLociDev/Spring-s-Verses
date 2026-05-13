<div align="center">
<img width="1200" height="475" alt="Verses Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

<br />

# VERSES

### The Ultimate Full-Stack Polling & Debate Platform

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.5-6DB33F?style=for-the-badge\&logo=spring-boot\&logoColor=white)](https://spring.io/projects/spring-boot)
[![Vite](https://img.shields.io/badge/Vite-5.2.11-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge\&logo=openjdk\&logoColor=white)](https://openjdk.org/)

</div>

***

## Overview

**Verses** is a modern, full-stack application designed for interactive community engagement. Whether it's a heated debate, a community petition, or a simple poll, Verses provides a sleek, high-performance interface backed by a robust Spring Boot architecture.

Originally conceived as a Vanilla JS project, it has been fully migrated to a production-ready stack with persistent data storage and a RESTful API.

##  Key Features

- **Interactive Polling**: Real-time voting with instant UI updates.
- **Community Debates**: Engage in discussions with a threaded comment system.
- **Global Search**: High-performance backend search powered by JPQL.
- **Aesthetic UI**: A "Liquid Sidebar" and glassmorphism design powered by Tailwind CSS.
- **Full-Stack Persistence**: Data is safely stored in an H2/PostgreSQL database via Spring Data JPA.

## Architecture

### Backend ([verses-backend](file:///home/decibel/Downloads/Spring%20II/verses-backend))

- **Framework**: Spring Boot 3.2.5
- **Language**: Java 17
- **Database**: H2 (In-Memory for Dev) / PostgreSQL (Production Ready)
- **ORM**: Spring Data JPA with Hibernate
- **Logic**: Service-oriented architecture with RESTful Controllers

### Frontend ([verses-frontend](file:///home/decibel/Downloads/Spring%20II/verses-frontend))

- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.x
- **State Management**: Custom Reactive Store (Vanilla JS)
- **Icons**: Lucide

## Getting Started

### Prerequisites

- **Java 17+**
- **Node.js 18+**
- **Maven** (or use the provided wrapper)

### 1. Start the Backend

```bash
cd verses-backend
mvn spring-boot:run
```

*The API will be live at* *`http://localhost:8080`*

### 2. Start the Frontend

```bash
cd verses-frontend
npm install
npm run dev
```

*The app will be live at* *`http://localhost:5173`*

##  Project Structure

```text
.
├── verses-backend/     # Spring Boot Java Application
├── verses-frontend/    # Vite + Tailwind Frontend
├── Documentation/      # Technicality Deep-Dives & Design Sheets
└── Verses_Archive.zip  # Legacy Vanilla JS Reference
```

***

<div align="center">
Built with ❤️ for the community.
</div>
