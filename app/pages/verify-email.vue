<script setup>
definePageMeta({
  middleware: 'auth',
  layout: 'auth',
  title: 'auth.title.email_verify',
})

const { $api } = useNuxtApp()
const { t } = useI18n()
const toast = useToast()

async function resendVerifyNotification() {
  try {
    await $api('/email/verification-notification', {
      method: 'POST',
    })

    toast.add({
      title: t('auth.title.notification_request_email_verify'),
      description: t('auth.description.notification_request_email_verify'),
      color: 'info',
      icon: 'i-lucide-mail',
    })
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <AuthCard
    :title="$t('auth.title.email_verify')"
    :description="$t('auth.description.email_verify')"
    icon="i-lucide-mail"
  >
    <UButton
      :label="$t('auth.action.send_email_verify')"
      block
      @click="resendVerifyNotification"
    />
  </AuthCard>
</template>
