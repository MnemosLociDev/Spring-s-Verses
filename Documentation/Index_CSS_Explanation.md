# Index.css Explanation

The `src/styles/index.css` file serves as the core styling engine for the application, bridging Tailwind CSS with custom thematic elements and complex UI behaviors.

## Core Structure

### 1. Tailwind Integration
```css
@import "tailwindcss";
```
This imports the Tailwind v4 engine, enabling utility classes globally.

### 2. Design Tokens (CSS Variables)
We define a set of semantic variables in `:root` to ensure consistency:
- `--brand`: The primary call-to-action color (#f43f5e).
- `--surface-900/800/700`: Dark mode depth layers.
- `--glass-bg`: Semi-transparent background for glassmorphism.
- `--text-base`: High contrast text.

### 3. Theme Extension
The `@theme` block maps custom variables to Tailwind-compatible utilities, allowing us to use classes like `text-brand` or `bg-surface-800`.

### 4. Global Base Styles
- **Body Styling**: Includes a subtle dual-radial gradient background that gives the app depth without being distracting.
- **Transitions**: A global catch-all transition on `*` ensures that state changes (like hover or element swaps) are smooth rather than jarring.

### 5. Custom UI Components
While Tailwind handles 90% of the UI, certain complex interactions require custom CSS:

- **.verse-card**: Handles the specific hover lift and shadow for search results and feed items.
- **.liquid-sidebar**: Implements the "PEEK-A-BOO" sidebar logic. It stays partially hidden and slides out fully on hover using a `cubic-bezier` curve for a spring-like feel.
- **.glass-morphism / .glass-card**: Provides standard containers for the app's aesthetic, utilizing `backdrop-filter` for the blur effect.
- **.horizontal-scroll**: Custom horizontal scroll logic for the "Trending" sections, including `scroll-snap` support for a mobile-native feel.

### 6. Scrollbar Hiding
Utility class `.scrollbar-hide` is defined to clean up the UI on desktop browsers without losing scroll functionality.
