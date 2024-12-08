<template>
  <button class="new-address">
    <IconsPlus />
    افزودن آدرس
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.new-address {
  @apply flex rounded justify-center hover:opacity-45 items-center w-full h-full relative;
  border: 10px dashed var(--border-color);
  transition: opacity .15s ease-out;
  &::before {
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    position: absolute;
    top: -8px;
    left: -8px;
    border-radius: var(--border-radius);
    display: block;
    content: ' ';
    pointer-events: none;
    border: 9px solid ;
    z-index: 1;
    @apply border-cardBg;
  }
}
</style>