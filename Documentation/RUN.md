# Running Verses Locally

This project is built using **Vite** and a modular vanilla JavaScript architecture.

## Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Usually comes bundled with Node.js.

## Getting Started

1. **Install Dependencies**
   Run this command in the project root to install Vite and other development tools:
   ```bash
   npm install
   ```

2. **Start Development Server**
   Launch the local development server with Hot Module Replacement (HMR):
   ```bash
   npm run dev
   ```
   The app will typically be available at `http://localhost:3000` (or the port specified in the terminal).

3. **Build for Production**
   To create an optimized production build in the `dist/` folder:
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   To test the production build locally:
   ```bash
   npm run preview
   ```

## Project Structure

- `index.html`: The entry point and global CSS definitions (Tailwind configuration).
- `src/main.js`: Boots the application and initializes the store.
- `src/store.js`: Handles state updates via a `dispatch` system.
- `src/components/`: Modular UI components (card.js, Sidebar, etc.).
- `src/pages/`: Main page layouts (Landing, App, Auth).
- `src/utils/`: Shared utility functions.
