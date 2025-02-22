<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  backeable: {
    type: Boolean,
    default: false,
  },
})

const appConfig = useAppConfig()
</script>

<template>
  <div class="space-y-8">
    <div
      v-if="title || description || icon || $slots.icon"
      class="text-center space-y-6"
    >
      <UButton
        v-if="icon"
        :to="$localeRoute('login')"
        variant="outline"
        color="neutral"
        :icon="icon"
        size="xl"
        class="p-4"
      />

      <NuxtLink
        v-else
        :to="$localeRoute('login')"
        class="block"
      >
        <AppLogo
          class="h-10 text-[var(--ui-primary)] mx-auto"
          compact
        />
      </NuxtLink>

      <div
        v-if="title || description"
        class="space-y-3"
      >
        <h1
          v-if="title"
          class="font-semibold text-2xl text-[var(--ui-text-highlighted)] md:text-3xl"
        >
          {{ title }}
        </h1>

        <p
          v-if="description"
          class="text-[var(--ui-text-muted)]"
        >
          {{ description }}
        </p>
      </div>
    </div>

    <slot />

    <div
      v-if="backeable"
      class="text-center"
    >
      <UButton
        :to="$localeRoute('login')"
        :label="$t('auth.action.back_login')"
        variant="link"
        color="neutral"
        icon="i-lucide-arrow-left"
      />
    </div>

    <div
      v-if="appConfig.localSwitch || appConfig.colorSwitch"
      class="flex items-center justify-center gap-2"
    >
      <AppLocaleDropdown v-if="appConfig.localSwitch" />
      <AppColorModeButton v-if="appConfig.colorSwitch" />
    </div>
  </div>
</template>
