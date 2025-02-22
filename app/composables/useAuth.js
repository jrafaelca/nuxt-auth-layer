export const useAuth = () => {
  const { $api } = useNuxtApp()
  const user = useState('user', () => null)
  const isAuthenticated = computed(() => user.value !== null)

  async function fetchUser() {
    try {
      const { data } = await $api('/v1/user')
      user.value = data
    }
    catch (error) {
      user.value = null
    }
  }

  async function login(credentials) {
    try {
      const response = await $api('/login', {
        method: 'POST',
        body: credentials,
      })

      user.value = response
      navigateTo('/', { replace: true })

      return response
    }
    catch (error) {
      throw error
    }
  }

  async function logout() {
    try {
      await $api('/logout', { method: 'POST' })

      user.value = null
      navigateTo('/login', { replace: true })
    }
    catch (error) {
      throw error
    }
  }

  return {
    user,
    isAuthenticated,
    fetchUser,
    login,
    logout,
  }
}
