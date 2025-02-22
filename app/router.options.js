export default {
  routes: (_routes) => {
    const appConfig = useAppConfig()
    const getRouteBaseName = useRouteBaseName()

    return _routes.filter((route) => {
      if (!appConfig.auth.register && getRouteBaseName(route) === 'register') return false
      if (!appConfig.auth.forgotPassword && getRouteBaseName(route) === 'forgot-password') return false
      if (!appConfig.auth.resetPassword && getRouteBaseName(route) === 'password-reset-hash') return false
      if (!appConfig.auth.verifyEmail && getRouteBaseName(route) === 'verify-email') return false
      if (!appConfig.auth.verifyEmail && getRouteBaseName(route) === 'verify-email-id-hash') return false

      return true
    })
  },
}
