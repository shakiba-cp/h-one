<template>

  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.9 7.6C9.7 8.4 9.7 9.6 8.9 10.4C8.1 11.2 6.9 11.2 6.1 10.4C5.3 9.6 5.3 8.4 6.1 7.6C6.9 6.8 8.1 6.8 8.9 7.6"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M17.8 6.70039C18.8 7.70039 18.8 9.30039 17.8 10.2004C16.8 11.1004 15.2 11.2004 14.3 10.2004C13.4 9.20039 13.3 7.60039 14.3 6.70039C15.2 5.80039 16.8 5.80039 17.8 6.70039"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.5 18V17C20.5 15.3 19.2 14 17.5 14H14.5C12.8 14 11.5 15.3 11.5 17V18" :stroke="color"
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.5 14H6.5C4.8 14 3.5 15.3 3.5 17V18" :stroke="color" stroke-width="1.5" stroke-linecap="round"
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