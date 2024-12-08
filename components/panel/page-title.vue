<template>
  <div class="flex justify-between items-center mb-8">
    <h2 class=" text-[1.5rem]">{{ title }}</h2>
    <BaseButton v-if="hasButton" color="light" outline>{{ buttonTitle }}</BaseButton>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  },
  hasButton: {
    type: Boolean,
    default: () => false,
  },
  buttonTitle: {
    type: String,
    default: () => false,
  },
});
</script>
