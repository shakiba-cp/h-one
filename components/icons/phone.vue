<template>

  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M10.856 13.1444C9.68599 11.9744 8.80399 10.6644 8.21799 9.33536C8.09399 9.05436 8.16699 8.72536 8.38399 8.50836L9.20299 7.69036C9.87399 7.01936 9.87399 6.07036 9.28799 5.48436L8.11399 4.31036C7.33299 3.52936 6.06699 3.52936 5.28599 4.31036L4.63399 4.96236C3.89299 5.70336 3.58399 6.77236 3.78399 7.83236C4.27799 10.4454 5.79599 13.3064 8.24499 15.7554C10.694 18.2044 13.555 19.7224 16.168 20.2164C17.228 20.4164 18.297 20.1074 19.038 19.3664L19.689 18.7154C20.47 17.9344 20.47 16.6684 19.689 15.8874L18.516 14.7144C17.93 14.1284 16.98 14.1284 16.395 14.7144L15.492 15.6184C15.275 15.8354 14.946 15.9084 14.665 15.7844C13.336 15.1974 12.026 14.3144 10.856 13.1444Z"
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