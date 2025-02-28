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
  <div>
    <AuthHeader
      :title="$t('auth.title.reset_password')"
      :description="$t('auth.description.reset_password')"
      icon="i-lucide-lock-keyhole"
    />

    <AuthResetPasswordForm
      :email="email"
      :token="token"
    />

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
