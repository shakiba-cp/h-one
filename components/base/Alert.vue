<template>
  <div class="alert my-3 p-4 w-full rounded-sm" :class="[
    { 'bg-lightPrimary': color == 'primary' },
    { 'bg-lightSecondary': color == 'secondary' },
    { 'bg-red-100 !text-red-700': color == 'red' },
    { 'bg-green-100 !text-green-700': color == 'green' },
  ]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { color = 'secondary' } = defineProps<{
  color: "primary" | "secondary" | "red"| "green"
}>()
</script>

<style></style>