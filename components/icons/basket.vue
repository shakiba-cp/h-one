<template>
  <svg :width="24" :height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M19.6001 6.467L17.9001 4.2C17.3331 3.445 16.4441 3 15.5001 3H8.50006C7.55606 3 6.66706 3.445 6.10006 4.2L4.40006 6.467C4.14006 6.813 4.00006 7.234 4.00006 7.667V18C4.00006 19.657 5.34306 21 7.00006 21H17.0001C18.6571 21 20.0001 19.657 20.0001 18V7.667C20.0001 7.234 19.8601 6.813 19.6001 6.467Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15.0001 10C15.0001 11.657 13.6571 13 12.0001 13C10.3431 13 9.00006 11.657 9.00006 10" :stroke="color"
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M19.8802 7H4.12018" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    </path>
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