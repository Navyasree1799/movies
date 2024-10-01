import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //basic vitest test configuration
  test: {
    include: ["./**/*.test.ts", "./**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    css: {
      //to allow testing css modules
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
})
