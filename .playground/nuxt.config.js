import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['..'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-02-28',
})