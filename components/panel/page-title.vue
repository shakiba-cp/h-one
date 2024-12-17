<template>
  <div class="flex justify-between items-center mb-8">
    <h2 class=" text-[1.5rem]">{{ title }}</h2>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  }

});
</script>
