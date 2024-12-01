<template>
  <svg :width="width" :height="height" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M16.5717 3.75V5.8125C16.5717 6.64125 15.9004 7.3125 15.0717 7.3125H4.57166C3.74291 7.3125 3.07166 6.64125 3.07166 5.8125V3.75C3.07166 2.92125 3.74291 2.25 4.57166 2.25H15.0717C15.9004 2.25 16.5717 2.92125 16.5717 3.75Z"
      :stroke="color" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M16.5717 12.1875V14.25C16.5717 15.0788 15.9004 15.75 15.0717 15.75H4.57166C3.74291 15.75 3.07166 15.0788 3.07166 14.25V12.1875C3.07166 11.3587 3.74291 10.6875 4.57166 10.6875H15.0717C15.9004 10.6875 16.5717 11.3587 16.5717 12.1875Z"
      :stroke="color" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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