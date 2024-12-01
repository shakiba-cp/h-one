<template>
  <div class="alert my-3 p-4 w-full rounded-sm" :class="[
    { 'bg-lightPrimary': color == 'primary' },
    { 'bg-lightSecondary': color == 'secondary' },
  ]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { color = 'secondary' } = defineProps<{
  color: "primary" | "secondary"
}>()
</script>

<style></style>