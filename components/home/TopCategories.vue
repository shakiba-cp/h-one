<template>
  <div class="flex  flex-nowrap flex- overflow-x-auto max-w-full gap-5">
    <div v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14]" :key="i">
      <CategoriesCard />
    </div>
  </div>
</template>

<script setup>

</script>
