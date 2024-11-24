<template>
  <div class="mt-1 mb-1">
    <div class="slider-styled " :id="id"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const {
  min = 0,
  max = 1000000,
  step = 1,
  modelValue,
} = defineProps<{
  min: number;
  max: number;
  step: number;
  modelValue: string[] | number[];
}>();
const first = ref(modelValue[0]);
const last = ref(modelValue[1]);
const id = useId();
const emit = defineEmits(["update:modelValue", "valueChanged"]);
watch(first, (val) => {
  emit("update:modelValue", [Number(val), unref(last)]);
});
watch(last, (val) => {
  emit("update:modelValue", [unref(first), Number(val)]);
});
watch(
  () => modelValue,
  (val) => {
    first.value = val[0];
    last.value = val[1];
  }
);
onMounted(() => {
  var slider = document.getElementById(id);
  noUiSlider.create(slider!, {
    start: [first.value, last.value],
    connect: true,
    direction: 'rtl',
    range: {
      'min': min,
      'max': max
    },
    step: step
  });
  //@ts-ignore
  slider.noUiSlider.on('update', function (values, handle) {
    if (handle == 0) {
      first.value = Number(values[handle]).toFixed(0);
    } else {
      last.value = Number(values[handle]).toFixed(0);
    }
  });
  //@ts-ignore
  slider.noUiSlider.on('change', function (values, handle) {
    emit("valueChanged", [first, last]);
  });
})
</script>

<style lang="scss">
.noUi-connect {
  background: var(--color-primary) !important;
}

.noUi-horizontal {
  height: 10px !important;
}

.noUi-touch-area,
.noUi-handle {
  border-radius: 110px !important;
  background: var(--color-primary);
  -webkit-tap-highlight-color: transparent !important;
}

.noUi-handle {
  width: 20px !important;
  height: 20px !important;
  border: none !important;
  &::before,&::after{
    content: none !important;
  }
}
</style>