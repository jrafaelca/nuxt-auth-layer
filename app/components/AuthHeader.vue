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
})
</script>

<template>
  <div class="text-center space-y-6 mb-6">
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
        class="h-8 text-[var(--ui-primary)] block mx-auto"
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
</template>
