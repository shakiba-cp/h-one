<template>
  <div class="flex w-fit p-1 rounded-full border border-borderColor justify-center items-center gap-3">
    <button @click="Plus" class="p-1 bg-primary shadow rounded-full text-white">
      <IconsPlus />
    </button>
    <span class="w-[25px] text-center">{{ model }}</span>
    <button class="disabled:text-muted p-1 bg-secondary rounded-full " :disabled="model==1" @click="Minus">
      <IconsMinus />
    </button>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel({
  type: Number,
  default: 1
});

const Plus=()=>{
  model.value+=1;
}
const Minus=()=>{
  if(model.value==1){
    return;
  }
  model.value-=1;
}
</script>

<style></style>