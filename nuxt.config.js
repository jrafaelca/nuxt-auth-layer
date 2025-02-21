import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
      autoInit: process.env.NODE_ENV === 'development',
    }
  }
})