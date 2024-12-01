<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.059" cy="11.059" r="7.059" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round"></circle>
    <path d="M20 19.9998L16.05 16.0498" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round"></path>
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
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>