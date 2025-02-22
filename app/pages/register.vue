<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'auth.title.register',
})
</script>

<template>
  <AuthCard
    :title="$t('auth.title.register')"
    :description="$t('auth.description.register')"
  >
    <AuthRegisterForm />

    <div class="text-center">
      <p class="text-sm text-[var(--ui-text-dimmed)]">
        {{ $t('auth.label.registered') }}

        <UButton
          :to="$localeRoute({ name: 'login' })"
          :label="$t('auth.action.login')"
          variant="link"
          class="p-0"
        />
      </p>
    </div>
  </AuthCard>
</template>
