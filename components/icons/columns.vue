<template>
  <svg :width="width" :height="height" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M4.57166 2.25H15.0717C15.9004 2.25 16.5717 2.92125 16.5717 3.75V14.25C16.5717 15.0788 15.9004 15.75 15.0717 15.75H4.57166C3.74291 15.75 3.07166 15.0788 3.07166 14.25V3.75C3.07166 2.92125 3.74291 2.25 4.57166 2.25Z"
      :stroke="color" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.82166 2.25V15.75" :stroke="color" stroke-width="1.2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M16.5717 9H3.07166" :stroke="color" stroke-width="1.2" stroke-linecap="round"
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
    default: "19",
  },
  height: {
    type: String,
    default: "18",
  },
});
</script>