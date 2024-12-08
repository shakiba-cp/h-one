<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.1211 12.8906H6.58594V11.1328H11.1211V6.58594H12.8789V11.1328H17.4141V12.8906H12.8789V17.4141H11.1211V12.8906Z"
      :fill="color" />
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