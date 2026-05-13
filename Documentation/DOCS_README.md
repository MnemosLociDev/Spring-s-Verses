# Verses: Decentralized Consensus Engine

Verses is a modular, state-driven web application built with vanilla JavaScript and Tailwind CSS. It focuses on high-performance UI and clear architectural separation.

## Project Structure

- **index.html**: The application skeleton. It loads the compiled CSS and JS bundles.
- **src/index.css**: Global styles, Tailwind directives, and theme-specific variables.
- **src/main.js**: The core engine. It manages navigation, global events, and the main initialization loop.
- **src/state.js**: Single source of truth. Contains the application's data, user status, and UI state.
- **src/pages/**: Contains page-level modules (Landing, Auth, App Discovery Page).
- **src/components/**: Reusable UI blocks like the Liquid Sidebar, Modals, and the Verse Discovery Cards.

## How to Recreate

1. **Environment**: Ensure you have a Node.js environment with Vite for building.
2. **Icons**: This project uses the `lucide` npm package. Icons are initialized in `main.js`.
3. **Typography**: Space Grotesk and DM Sans are provided via Google Fonts.
4. **Theming**: The app uses CSS variables (defined in `src/index.css`) which are toggled by the `.light-mode` class on the root element.

## Modular Approach
Instead of a single giant file, the logic is split into ES Modules. This allows for easier debugging and scaling. Each page is a function that takes a container and the current state, ensuring data consistency across the app.
