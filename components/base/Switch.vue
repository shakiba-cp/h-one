<template>
  <input :checked="checked" :class="['toggle-checkbox outline-none border-none']" :value="value" :type="type" ref="ele"
    v-model="data" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: string,
  modelValue?: string | boolean,
  value?: string,
  checked?: boolean
}>(), {
  type: 'checkbox',
  modelValue: '',
  value: 'true',
  checked: false
});
const ele: Ref<HTMLInputElement | null> = ref(null);
const data = ref(unref(props.modelValue));
const emit = defineEmits(['update:modelValue']);

watch(data, (val) => {
  emit('update:modelValue', val)
})
const toggle = () => {
  ele.value?.classList.toggle("toggle-checkbox--active");
};
watch(() => props.modelValue, (val) => {
  if (val != props.value) {
    data.value = val;
    ele.value!.checked = false;
  }
})
</script>

<style scoped lang="scss">
.toggle-checkbox {
  position: relative;
  cursor: pointer;
  width: 42px;
  height: 24px;
  border-radius: 53px;
  background-color: #E8EBF0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all ease .3s;

  &:disabled {
    background-color: #E8EBF0 !important;
  }

  &::after {
    top: 4.5px ;
    content: "";
    position: absolute;
    left: 4px;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all ease .3s;
    z-index: 1;
    transform: translateX(110%);
  }
}

@media screen and (max-width:768px) {
  .toggle-checkbox {
    &::after {
      top: 4px;


    }
  }


}

.toggle-checkbox:checked {
  background-color: var(--color-primary);
}

.toggle-checkbox:checked::after {
  transform: translateX(5%);
}
</style>