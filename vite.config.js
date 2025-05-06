import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  rollupOptions: {
    // Preserve original file names and structure
    preserveModules: true,
    // Use the original file names for output
    originalName: true,
    // This will keep the original file names and structure in the output directory
    // You can also specify the output directory for each entry point
    // For example, if you have multiple entry points, you can specify different output directories
  }


})
