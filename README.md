# PROYECTO FINAL CODO A CODO

## Testing
Please install vitest -> https://www.robinwieruch.de/vitest-react-testing-library/

1. npm install vitest --save-dev
2. inside "scripts" on ../package.json file add following key:
    "test": "vitest"
3. npm install jsdom --save-dev
4. In ..vite.config.js:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  **test: {**
    **environment: 'jsdom',**
  **},**
});

5. npm install @testing-library/react @testing-library/jest-dom --save-dev

6. In ..vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    **globals: true,**
    environment: 'jsdom',
    **setupFiles: './tests/setup.js',**
  },
});


