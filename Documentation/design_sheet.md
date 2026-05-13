# Design Sheet: Verses Aesthetic

## Mood: "Liquid Cyber-Minimalism"
The design aims for a high-tech, clean look that balances deep dark backgrounds with vibrant "Signal Rose" (Brand) accents.

## Visual Tokens

- **Primary Color (Brand)**: `#f43f5e` (Signal Rose)
- **Backgrounds**: 
  - Dark: `#0a0a0a` (Surface 900)
  - Light: `#ffffff`
- **Glass-Morphism**: Uses `backdrop-filter: blur(12px)` and low-opacity borders to create a layered "Liquid Glass" effect in the sidebar and profile modal.

## Key UI Components

### 1. Liquid Sidebar
- **Behavior**: Hidden at -80% translation until hovered.
- **Motion**: Uses `cubic-bezier(0.175, 0.885, 0.32, 1.275)` for a smooth, physical bounce.

### 2. Verse Cards
- **Structure**: Robust information hierarchy.
- **Interaction**: Scale and ring-glow effect on hover.
- **Themes**: Adapts instantly to light/dark mode transitions via CSS variable interpolation.

## Typography
- **Headings**: Space Grotesk (Black/Bold) - Used for aggressive, high-energy impact.
- **Body**: DM Sans (Medium) - Used for high readability in long-form descriptions.
