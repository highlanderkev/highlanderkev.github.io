import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '../', '')
  return {
    define: {
      PUBLIC_GITHUB_ACCESS_TOKEN: JSON.stringify(env.PUBLIC_GITHUB_ACCESS_TOKEN),
      PUBLIC_FIREBASE_API_KEY: JSON.stringify(env.PUBLIC_FIREBASE_API_KEY)
    },
    build: {
      lib: {
        entry: 'src/app-root.ts',
        formats: ['es']
      },
      rollupOptions: {
        external: /^lit/,
      },
    },
    // envDir: '../',
    // envPrefix: 'FIREBASE'
  }
});
