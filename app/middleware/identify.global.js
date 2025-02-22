export default defineNuxtRouteMiddleware(async () => {
  const { fetchUser } = useAuth()

  await fetchUser()
})
