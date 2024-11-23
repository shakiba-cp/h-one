<template>
  <div v-for="(story, index) in stories" :key="index" class="text-center w-20">
    <a
      :href="story.href"
      :title="story.title"
      :target="story.target"
      class="basic story-circle flex-grow-0 flex-shrink-0 mb-1"
      :data-toggle="story.dataToggle"
      :data-type="story.dataType"
      :data-src="story.dataSrc"
      :data-url="story.dataUrl"
      :data-target="story.dataTarget"
    >
      <img class="mb-0" :src="story.imageSrc" />
    </a>
    <span class="font-bold" style="font-size: 0.85rem">
      {{ story.text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    stories: {
      type: Array,
      required: true, // Make sure stories is required
    },
  },
};
</script>
