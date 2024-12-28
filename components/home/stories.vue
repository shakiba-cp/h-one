<template>
  <div>
    <div class="flex overflow-x-auto gap-3 bg-cardBg p-3 mt-4 rounded">
      <button @click="openStory(item)" class="text-center min-w-fit" v-for="(item, index) in data" :key="index">
        <BaseImg :src="`shop/${item.image}`" class="rounded-full border-[3px] border-red-600
        w-[80px] h-[80px] sm:w-[70px] sm:h-[70px]" :alt="item.title" />
        <p class="mt-1">{{ item.title }}</p>
      </button>
    </div>
    <BaseModal size="sm" header-class="!pt-6" :title="selectedStory?.title" v-model="isOpenModal">
      <video controls v-if="selectedStory?.content.endsWith('.mp4')" :src="BASE_IMAGE_URL + selectedStory?.content"
        class="w-full" />
      <img v-else :src="`${BASE_IMAGE_URL}/${selectedStory!.content}`" 
      class="rounded w-full border border-borderColor" 
        :alt="selectedStory!.title"/>
      <p v-if="selectedStory?.description" v-html="selectedStory!.description" class="mt-2"></p>
      <BaseButton class="w-full mt-2" :to="selectedStory!.link">مشاهده</BaseButton>
    </BaseModal>
  </div>
</template>

<script lang="ts" setup>
import type { Story } from '~/models/Banner';
const selectedStory: Ref<Story | null> = ref(null);
const isOpenModal = ref(false);

defineProps<{
  data: Story[]
}>();

const openStory = (story: Story) => {
  isOpenModal.value = true;
  selectedStory.value = story;
}
</script>

<style scoped lang="scss">
div.text-center {
  min-width: fit-content;
  flex-grow: 1;
}
</style>