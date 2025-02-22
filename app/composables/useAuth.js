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

      console.error(error)
    }
  }

  async function login(credentials) {
    const response = await $api('/login', {
      method: 'POST',
      body: credentials,
    })

    user.value = response
    navigateTo('/', { replace: true })

    return response
  }

  async function logout() {
    await $api('/logout', { method: 'POST' })

    user.value = null
    navigateTo('/login', { replace: true })
  }

  return {
    user,
    isAuthenticated,
    fetchUser,
    login,
    logout,
  }
}
