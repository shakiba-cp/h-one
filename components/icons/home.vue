<template>
   <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
         d="M19.842 8.29925L13.842 3.63225C12.759 2.78925 11.242 2.78925 10.158 3.63225L4.15801 8.29925C3.42701 8.86725 3.00001 9.74125 3.00001 10.6673V18.0002C3.00001 19.6572 4.34301 21.0002 6.00001 21.0002H18C19.657 21.0002 21 19.6572 21 18.0002V10.6673C21 9.74125 20.573 8.86725 19.842 8.29925Z"
         :stroke="color" stroke-width="1.5" />
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