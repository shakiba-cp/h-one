<template>

  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6.52979H19" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 10.4697V16.5297" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 9.31006V17.5801" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 10.4697V16.5297" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M15.795 20.4718H8.205C6.987 20.4718 6 19.4848 6 18.2668V6.52783H18V18.2668C18 19.4848 17.013 20.4718 15.795 20.4718Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M16 6.52783L15.262 4.22283C15.129 3.80883 14.744 3.52783 14.31 3.52783H9.69C9.255 3.52783 8.87 3.80883 8.738 4.22283L8 6.52783"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 6.52979H6" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style></style>