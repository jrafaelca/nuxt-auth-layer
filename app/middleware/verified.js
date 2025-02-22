export default defineNuxtRouteMiddleware(() => {
  const appConfig = useAppConfig()
  const { user } = useAuth()

  if (!appConfig.auth.verifyEmail) {
    return
  }

  if (!user.value?.email_verified_at) {
    return navigateTo('/verify-email', { replace: true })
  }
})
