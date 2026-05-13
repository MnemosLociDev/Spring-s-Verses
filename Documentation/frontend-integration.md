# Frontend Integration Strategy

Since the current app uses a modular `store.js`, migrating to a real backend is straightforward. You only need to change the **Dispatch** layer.

## 1. Updating the Store
Instead of mutating the `state` object directly in `store.js`, you should initiate asynchronous API calls.

**Current (Mock):**
```javascript
case 'VOTE':
  const verse = state.verses.find(v => v.id === payload.verseId);
  if (verse) {
    verse.options.find(o => o.id === payload.optionId).votes++;
  }
  break;
```

**Migrated (Actual API):**
```javascript
case 'VOTE':
  fetch(`/api/verses/${payload.verseId}/vote/${payload.optionId}`, { 
    method: 'POST' 
  })
  .then(resp => resp.json())
  .then(updatedVerse => {
    // Update local state with the source of truth from backend
    const idx = state.verses.findIndex(v => v.id === updatedVerse.id);
    state.verses[idx] = updatedVerse;
    notify(); // Trigger UI re-render
  });
  break;
```

## 2. Bootstrapping Data
In `main.js`, you now need an initial fetch to populate the discovery page.

```javascript
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/verses');
  state.verses = await response.json();
  render();
});
```

## 3. Proxy Configuration
During development, configure Vite (`vite.config.js`) to proxy API requests to your Spring Boot server:

```javascript
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
});
```
