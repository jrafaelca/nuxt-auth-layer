<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard',
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
