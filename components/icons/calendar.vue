<template>
  <svg :width="width" :height="height" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.3493 21H6.17834C4.52149 21 3.17834 19.6569 3.17834 18V6C3.17834 4.34315 4.52149 3 6.17834 3H18.1783C19.8352 3 21.1783 4.34315 21.1783 6V14.146"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M21.3603 14.318C23.1177 16.0754 23.1177 18.9246 21.3603 20.682C19.603 22.4393 16.7537 22.4393 14.9964 20.682C13.239 18.9246 13.239 16.0754 14.9963 14.318C15.8403 13.4741 16.9849 13 18.1783 13C19.3718 13 20.5164 13.4741 21.3603 14.318"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.0713 15.983V17.741L19.4539 18.584" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M6.92834 17.5002H9.17928" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M6.92834 14.5002H10.1783" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M6.92834 11.5002H12.1783" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M21.1783 8.00021H3.17834" :stroke="color" stroke-width="1.5" stroke-linecap="round"
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
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>