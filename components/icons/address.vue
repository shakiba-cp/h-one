<template>

  <svg :width="width" :height="height" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.00048 12.5C5.04713 12.5002 4.22641 13.1732 4.03948 14.108L3.03953 19.1078C2.92202 19.6953 3.07413 20.3046 3.454 20.768C3.83388 21.2314 4.4015 21.5 5.00069 21.5H18.9993C19.5985 21.5 20.1661 21.2314 20.546 20.768C20.9259 20.3046 21.078 19.6953 20.9605 19.1078L19.9605 14.108C19.7736 13.1732 18.9529 12.5002 17.9995 12.5"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.5 17.5H15.5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M7.5 8V8C7.5 5.51472 9.51472 3.5 12 3.5V3.5C14.4853 3.5 16.5 5.51472 16.5 8V8C16.5 9.98666 14.2599 12.1071 12.9396 13.1839C12.3834 13.6055 11.6146 13.6053 11.0586 13.1834C9.73949 12.1065 7.5 9.98637 7.5 8Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M11.999 7.75001C11.8611 7.75053 11.7496 7.86269 11.75 8.00064C11.7503 8.13858 11.8624 8.25018 12.0003 8.25C12.1383 8.24983 12.25 8.13795 12.25 8.00001C12.2504 7.93343 12.224 7.86949 12.1768 7.8225C12.1297 7.77551 12.0656 7.7494 11.999 7.75001"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
    default: "25",
  },
});
</script>