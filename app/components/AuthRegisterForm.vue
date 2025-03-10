<script setup>
const { $api } = useNuxtApp()
const { mapFormErrors } = useForm()

const form = useTemplateRef('form')
const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
})

const showPassword = ref(false)

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await $api('/register', {
      method: 'POST',
      body: formData,
    })

    navigateTo('/', { replace: true })
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
        name="name"
        :label="$t('auth.label.name')"
      >
        <UInput
          v-model="state.name"
          type="name"
          :placeholder="$t('auth.placeholder.name')"
          class="w-full"
          autofocus
          autocomplete="name"
        />
      </UFormField>

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
        />
      </UFormField>

      <UFormField
        name="password"
        :label="$t('auth.label.password')"
        :help="$t('auth.help.password')"
      >
        <UInput
          v-model="state.password"
          :type="showPassword ? 'text' : 'password'"
          :placeholder="$t('auth.placeholder.password')"
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
      :label="$t('auth.action.register')"
      size="lg"
      block
    />
  </UForm>
</template>
