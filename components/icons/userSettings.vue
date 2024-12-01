<template>

   <svg :width="width" :height="height" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 15.5V16.5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18 20.5V21.5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.4 17L16.3 17.5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.7 19.5L20.6 20" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.4 20L16.3 19.5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.7 17.5L20.6 17" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
         d="M19.4 17.1C20.2 17.9 20.2 19.1 19.4 19.9C18.6 20.7 17.4 20.7 16.6 19.9C15.8 19.1 15.8 17.9 16.6 17.1C17.4 16.3 18.6 16.3 19.4 17.1"
         :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
         d="M15 5.7C16.7 7.4 16.7 10.1 15 11.7C13.3 13.3 10.6 13.4 8.99999 11.7C7.39999 10 7.29999 7.3 8.99999 5.7C10.7 4.1 13.3 4.1 15 5.7"
         :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 20.5C4 18 6 16 8.5 16H11.1" :stroke="color" stroke-width="1.5" stroke-linecap="round"
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