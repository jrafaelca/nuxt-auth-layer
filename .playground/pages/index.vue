<script setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <UContainer>
    <div class="h-16 flex items-center gap-2 mb-6">
      <AppLogo class="h-6 block w-auto" />

      <div class="ms-auto" />

      <AuthUserDropdown />
    </div>
  </UContainer>
</template>
