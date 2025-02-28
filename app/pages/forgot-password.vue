<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'auth.title.forgot_password',
})
</script>

<template>
  <div>
    <AuthHeader
      :title="$t('auth.title.forgot_password')"
      :description="$t('auth.description.forgot_password')"
      icon="i-lucide-key-round"
    />

    <AuthForgotPasswordForm />

    <div class="text-center mt-6">
      <UButton
        :to="$localeRoute('login')"
        :label="$t('auth.action.back_login')"
        variant="link"
        color="neutral"
        icon="i-lucide-arrow-left"
      />
    </div>
  </div>
</template>
