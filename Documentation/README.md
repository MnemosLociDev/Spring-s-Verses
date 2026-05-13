# Verses Architecture: Vanilla Component Pattern

This project implements a **Vanilla Component Architecture**. It is designed to be highly modular, performant, and standards-aligned without the overhead of a heavy frontend framework.

## The Approach

We use **JavaScript Template Literals** to define UI components. Each component is a pure function that takes the current application state and returns a string of HTML.

### 1. Functional Components
Instead of `.jsx` or `.vue` files, components are simple `.js` files:
```javascript
export const MyComponent = (props) => `
  <div class="card">
    <h1>${props.title}</h1>
  </div>
`;
```

### 2. Uni-directional Data Flow
We use a centralized **Store** (`src/store.js`) to manage data. 
- **State**: The single source of truth (`src/state.js`).
- **Dispatch**: The only way to trigger changes (`window.dispatch(action, payload)`).
- **Subscribe**: Components or the main renderer listen for state changes to refresh the UI.

### 3. Reactive Rendering
When an action is dispatched, the state is updated, and the `render()` function (in `src/main.js`) is called. This function clears the main container and reconstructs the UI based on the new state. This mimics the "render cycle" of modern frameworks like React but uses direct DOM manipulation.

### 4. Styles-in-CSS (Tailwind v4)
By using **Tailwind CSS** integrated via Vite, we keep our styling logic centralized in `src/index.css` but utilized via utility classes in our HTML templates. This prevents the "CSS Bloat" common in large vanilla projects and ensures that our components are visually self-contained.

## Benefits
- **Performance**: No Virtual DOM diffing overhead; the browser simply parses the HTML string.
- **Portability**: Code can be easily moved to a framework later (like React or Lit) because the logic is already modularized.
- **Sustainability**: Relies on Web Standards (ES Modules, Template Literals, DOM API) which do not go out of style.

## Comparison
| Feature | This Project | React/Vue |
| :--- | :--- | :--- |
| **Logic** | Vanilla JS Functions | Framework hooks/methods |
| **Templates** | Template Literals (ES6) | JSX / SFC Templates |
| **State** | Custom Observable Store | Redux / Vuex / Signals |
| **Build Tool** | Vite (for bundling/dev) | Vite / Webpack |
| **Bundle Size** | ~10kb (total) | ~40kb+ (framework only) |
