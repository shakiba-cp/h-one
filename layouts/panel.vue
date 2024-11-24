<template>
  <div class="container mt-8">
    <div class="flex gap-8 dashboard-page">
      <PanelTheSideBar />
      <div class="card flex-grow">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>