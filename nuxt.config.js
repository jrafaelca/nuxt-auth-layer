import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],
  ssr: false,
  devtools: { enabled: true },
  css: [join(currentDir, './app/assets/css/main.css')],
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || 'NuxtAuthLayer',
      appUrl: process.env.APP_URL || 'http://localhost:3000',
      appLocale: process.env.APP_LOCALE || 'en',
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
      autoInit: process.env.NODE_ENV === 'development',
    },
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'es', file: 'es.json' },
    ],
    lazy: true,
    defaultLocale: process.env.APP_LOCALE || 'en',
  },
})
