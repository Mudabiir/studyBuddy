// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use specific Firebase modules to avoid errors
      // 'firebase/app': 'firebase/app',
      // 'firebase/firestore': 'firebase/firestore',
      // 'firebase/auth': 'firebase/auth',
    },
  },
});
