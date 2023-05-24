/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GITHUB_ACCESS_TOKEN: string
  readonly PUBLIC_FIREBASE_API_KEY: string
  readonly PUBLIC_SENTRY_DSN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
