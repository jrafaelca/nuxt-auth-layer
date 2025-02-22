<script setup>
const props = defineProps({
  token: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const { $api } = useNuxtApp()
const { mapFormErrors } = useForm()
const { t } = useI18n()
const toast = useToast()

const form = useTemplateRef('form')
const state = reactive({
  email: props.email,
  password: undefined,
  password_confirmation: undefined,
  token: props.token,
})

const showPassword = ref(false)

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await $api('/reset-password', {
      method: 'POST',
      body: formData,
    })

    toast.add({
      title: t('auth.title.notification_update_password'),
      description: t('auth.description.notification_update_password'),
      color: 'success',
      icon: 'i-lucide-circle-check',
    })

    navigateTo('/login', { replace: true })
  }
  catch (error) {
    if (error?.response.status === 422) {
      form.value?.setErrors(mapFormErrors(error.response._data.errors))
    }

    state.password = undefined
  }
}
</script>

<template>
  <UForm
    ref="form"
    :state="state"
    class="space-y-6"
    @submit="onSubmit"
  >
    <div class="space-y-5">
      <UFormField
        name="email"
        :label="$t('auth.label.email')"
      >
        <UInput
          v-model="state.email"
          type="email"
          :placeholder="$t('auth.placeholder.email')"
          class="w-full"
          autocomplete="username"
          readonly
        />
      </UFormField>

      <UFormField
        name="password"
        :label="$t('auth.label.password')"
      >
        <UInput
          v-model="state.password"
          :type="showPassword ? 'text' : 'password'"
          :placeholder="$t('auth.placeholder.password')"
          class="w-full"
          autocomplete="new-password"
          autofocus
          :ui="{ trailing: 'pr-0.5' }"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-closed'"
              :aria-label="showPassword ? $t('auth.label.hide_password') : $t('auth.label.show_password')"
              :aria-pressed="showPassword"
              aria-controls="password"
              @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>

      <UFormField
        name="password_confirmation"
        :label="$t('auth.label.password_confirmation')"
      >
        <UInput
          v-model="state.password_confirmation"
          :type="showPassword ? 'text' : 'password'"
          :placeholder="$t('auth.placeholder.password_confirmation')"
          class="w-full"
          autocomplete="new-password"
          :ui="{ trailing: 'pr-0.5' }"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-closed'"
              :aria-label="showPassword ? $t('auth.label.hide_password') : $t('auth.label.show_password')"
              :aria-pressed="showPassword"
              aria-controls="password"
              @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>
    </div>

    <UButton
      type="submit"
      :label="$t('auth.action.reset_password')"
      size="lg"
      block
    />
  </UForm>
</template>
