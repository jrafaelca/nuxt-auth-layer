<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'auth.title.forgot_password',
})
</script>

<template>
  <AuthCard
    :title="$t('auth.title.forgot_password')"
    :description="$t('auth.description.forgot_password')"
    icon="i-lucide-key-round"
    backeable
  >
    <AuthForgotPasswordForm />
  </AuthCard>
</template>
