export const useAuthorization = () => {
  const { user } = useAuth()

  const availablePermissions = computed(() => user.value?.permissions ?? [])

  function allows(permission) {
    if (!permission) {
      return false
    }

    return availablePermissions.value.includes(permission)
  }

  function denies(permission) {
    return !allows(permission)
  }

  function any(permissions) {
    if (!permissions || permissions.length === 0) {
      return false
    }

    return permissions.some(permission => allows(permission))
  }

  function none(permissions) {
    return !any(permissions)
  }

  function can(permissions) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    return any(permissions)
  }

  function cannot(permissions) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    return none(permissions)
  }

  return {
    permissions: availablePermissions,
    allows,
    denies,
    any,
    none,
    can,
    cannot,
  }
}
