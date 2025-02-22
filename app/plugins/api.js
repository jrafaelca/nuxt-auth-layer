export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const csrfToken = ref('')

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: 'include',
    async onRequest({ options }) {
      if (options.method !== 'GET' && options.method !== undefined) {
        await $fetch(`${config.public.apiBaseUrl}/sanctum/csrf-cookie`, {
          credentials: 'include',
        })

        csrfToken.value = useCookie('XSRF-TOKEN').value
      }

      const headers = {}
      if (csrfToken.value) {
        headers['X-XSRF-TOKEN'] = csrfToken.value
      }

      if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json'
      }

      options.headers = { ...options.headers, ...headers }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
