<template>

  <svg v-if="position == 'top'" style="rotate: 180deg;" :width="width" :height="height" viewBox="0 0 11 7" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M6.16686 6.04265L10.4045 1.80496L9.34531 0.745728L5.63724 4.4538L1.92917 0.745728L0.869934 1.80496L5.10762 6.04265C5.2481 6.18308 5.4386 6.26198 5.63724 6.26198C5.83587 6.26198 6.02638 6.18308 6.16686 6.04265Z"
      :fill="color" />
  </svg>
  <svg v-if="position == 'down'" :width="width" :height="height" viewBox="0 0 11 7" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M6.16686 6.04265L10.4045 1.80496L9.34531 0.745728L5.63724 4.4538L1.92917 0.745728L0.869934 1.80496L5.10762 6.04265C5.2481 6.18308 5.4386 6.26198 5.63724 6.26198C5.83587 6.26198 6.02638 6.18308 6.16686 6.04265Z"
      :fill="color" />
  </svg>
  <svg v-if="position == 'left'" style="rotate: 90deg;" :width="width" :height="height" viewBox="0 0 11 7" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M6.16686 6.04265L10.4045 1.80496L9.34531 0.745728L5.63724 4.4538L1.92917 0.745728L0.869934 1.80496L5.10762 6.04265C5.2481 6.18308 5.4386 6.26198 5.63724 6.26198C5.83587 6.26198 6.02638 6.18308 6.16686 6.04265Z"
      :fill="color" />
  </svg>
  <svg v-if="position == 'right'" style="rotate: -90deg;" :width="width" :height="height" viewBox="0 0 11 7" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M6.16686 6.04265L10.4045 1.80496L9.34531 0.745728L5.63724 4.4538L1.92917 0.745728L0.869934 1.80496L5.10762 6.04265C5.2481 6.18308 5.4386 6.26198 5.63724 6.26198C5.83587 6.26198 6.02638 6.18308 6.16686 6.04265Z"
      :fill="color" />
  </svg>

</template>
<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: "currentColor",
  },
  width: {
    type: String,
    default: "11",
  },
  height: {
    type: String,
    default: "7",
  },
  position: {
    type: String,
    default: "left"
  }
});
</script>