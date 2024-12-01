<template>
  <svg :width="width" :height="height" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.25 12.25L1.75 1.75" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M12.25 1.75L1.75 12.25" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
<script setup>
const props = defineProps({
   color: {
      type: String,
      default: "currentColor",
   },
   width: {
      type: String,
      default: "20",
   },
   height: {
      type: String,
      default: "20",
   },
});
</script>