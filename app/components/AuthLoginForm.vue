<script setup>
const appConfig = useAppConfig()
const { login } = useAuth()
const { mapFormErrors } = useForm()

const form = useTemplateRef('form')
const state = reactive({
  email: undefined,
  password: undefined,
  remember: false,
})

const showPassword = ref(false)

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await login(formData)
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
          autofocus
          autocomplete="username"
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
          autocomplete="current-password"
          :ui="{ trailing: 'pr-0.5' }"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-closed'"
              :aria-label="$t(showPassword ? 'auth.label.hide_password' : 'auth.label.show_password')"
              :aria-pressed="showPassword"
              aria-controls="password"
              @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>
    </div>

    <div class="flex items-center justify-between">
      <UCheckbox
        v-model="state.remember"
        :label="$t('auth.label.remember')"
        name="remember"
      />

      <UButton
        v-if="appConfig.auth.forgotPassword"
        :to="$localeRoute('forgot-password')"
        :label="$t('auth.action.forgot_password')"
        variant="link"
        class="p-0"
      />
    </div>

    <UButton
      type="submit"
      :label="$t('auth.action.login')"
      size="lg"
      block
    />
  </UForm>
</template>
