<template>

  <svg :width="width" :height="height" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.73486 14.363L6.76071 16.3899" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M10.812 8.28589L12.8389 10.3127" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M6.75977 12.3379L8.11133 13.6885" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M8.78613 10.312L10.1377 11.6626" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M12.8379 6.26001L14.1885 7.61157" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M14.8628 4.23511L16.2144 5.58567" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M4.05907 17.7395C3.31317 16.9936 3.31317 15.7842 4.05907 15.0383L15.5382 3.55917C16.2841 2.81327 17.4935 2.81327 18.2394 3.55917L20.9405 6.26032C21.6864 7.00622 21.6864 8.21557 20.9405 8.96147L9.46136 20.4406C8.71546 21.1865 7.50612 21.1865 6.76022 20.4406L4.05907 17.7395Z"
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
    default: "24",
  },
});
</script>