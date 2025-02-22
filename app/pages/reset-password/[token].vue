<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'auth.title.reset_password',
})

const route = useRoute()

const email = route.query.email
const token = route.params.token
</script>

<template>
  <AuthCard
    :title="$t('auth.title.reset_password')"
    :description="$t('auth.description.reset_password')"
    icon="i-lucide-lock-keyhole"
    backeable
  >
    <AuthResetPasswordForm
      :email="email"
      :token="token"
    />
  </AuthCard>
</template>
