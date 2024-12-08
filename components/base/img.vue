<template>
    <img v-if="src == '' || src == 'null' || src == null || src.includes('null') || src.includes('undefined')"
        :src="placeholderImg" />
    <nuxt-img :format="format" loading="lazy" :alt="alt??'img'" v-else placeholder :src="src" />
</template>
<script setup lang="ts">
import placeholderImg from "~~/assets/img/placeholder.png";

withDefaults(defineProps<{
    src: string,
    alt?: string,
    format?: string
}>(), {
    format: "webp"
});
</script>