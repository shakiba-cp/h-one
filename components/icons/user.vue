<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.4749 4.52513C15.8417 5.89197 15.8417 8.10804 14.4749 9.47488C13.1081 10.8417 10.892 10.8417 9.52515 9.47488C8.15831 8.10804 8.15831 5.89197 9.52515 4.52513C10.892 3.15829 13.1081 3.15829 14.4749 4.52513"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M4 18.4998V19.4998C4 20.0518 4.448 20.4998 5 20.4998H19C19.552 20.4998 20 20.0518 20 19.4998V18.4998C20 15.4738 16.048 13.5078 12 13.5078C7.952 13.5078 4 15.4738 4 18.4998Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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