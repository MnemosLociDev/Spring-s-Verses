# Recreation Guide: Building Verses from Scratch

This guide outlines the step-by-step process used to create the modular Verses application.

## Step 1: Design System & Root Setup
Start with an `index.html` that defines your basic layout. Global CSS, Tailwind directives, and variables are handled in `src/index.css` via Vite's `@tailwindcss/vite` plugin.

## Step 2: Global State Management
Create `src/state.js`. This is critical for modularity. By keeping state in one place, every component can read the same data without passing complex props around.

## Step 3: Modular Layout Functions
Instead of writing static HTML, we write "Render Functions". For example:
```javascript
export const renderApp = (container, state) => {
  container.innerHTML = `<div>...</div>`;
};
```
This allows us to clear and redraw the interface whenever the state changes.

## Step 4: Routing & Navigation
In `src/main.js`, create a `navigate()` function. This function updates `state.currentPage` and then calls the global `render()`. The `render()` function is a switch-case that decides which page-level module to load.

## Step 5: Interaction & Interop
Expose necessary functions to the `window` object in `src/main.js` (like `window.vote = ...`). This allows your inline HTML `onclick` handlers to communicate back with the modular JavaScript logic.

## Step 6: Real-time Search Logic
The search bar uses an `oninput` handler that calls `handleSearch()`. This updates the `state.searchQuery` and triggers a re-render. Inside the `renderGrid` component, we filter the array of "verses" based on both the active category and the search string.
