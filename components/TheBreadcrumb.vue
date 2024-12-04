<template>
  <div class="bg-gray dark:bg-cardBg py-4 mb-4">
    <nav class="container flex gap-3">
      <nuxt-link to="/">فروشگاه آی‌بولک</nuxt-link>
      <template v-for="item in items">
        <IconsArrow color="var(--color-muted)" />
        <nuxt-link v-if="item.to" :to="item.to">{{ item.title }}</nuxt-link>
        <p class="text-muted" v-else>{{ item.title }}</p>
      </template>
    </nav>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  items: {
    title: string,
    to?: string | undefined
  }[]
}>();
</script>

<style></style>