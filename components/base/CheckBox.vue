<template>
  <div class="flex checkbox-input gap-2 items-center w-fit h-fit" :class="[{ 'opacity-70 cursor-default': disabled }, {
    'radio': type == 'radio'
  }]">
    <div class="checkbox-wrapper-45  h-fit">
      <input :disabled="disabled" :name="name" :value="value" :checked="checked" :id="checkId" :type="type"
        @change="handleChangeInput" />
      <label class="cbx" :for="checkId" :class="{ 'opacity-50 !cursor-default': disabled }">
        <div class="flip">
          <div class="front"></div>
          <div class="back">
            <svg width="14" height="13" class="mr-[4px] " viewBox="0 0 16 14">
              <path d="M2 8.5L6 12.5L14 1.5"></path>
            </svg>
          </div>
        </div>
      </label>
    </div>
    <label class="flex-grow text-right select-none" :class="{ 'cursor-pointer': disabled == false }" :for="checkId">{{
      label
    }}</label>
  </div>
</template>
<script lang="ts" setup>
import { useField } from 'vee-validate';

const input: Ref<HTMLInputElement | null> = ref(null);
const props = withDefaults(defineProps<{
  label: string,
  type?: "checkbox" | "radio",
  name: string,
  checked?: boolean,
  value?: string,
  modelValue?: string,
  disabled?: boolean,
  inputId?: string
}>(), {
  type: 'checkbox',
  checked: false,
  disabled: false,
  value: '',
});
const checkId = ref(props.inputId ?? useId());

const {
  value: inputValue,
  errorMessage,
  meta,
  handleChange,
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
});
const emit = defineEmits(['change', 'update:modelValue'])

const handleChangeInput = (e: any) => {
  handleChange(e);
  if (e.target.checked) {
    emit('change', props.value);
    emit('update:modelValue', props.value);
  } else {
    emit('change', '');
    emit('update:modelValue', '');
  }
}
onMounted(() => {
  if (props.modelValue == props.value) {
    if (input.value)
      input.value.checked = true;
  }
  if (props.checked) {
    emit('update:modelValue', props.value)
  }
})
</script>

<style scoped lang="scss">
.checkbox-wrapper-45 {
  position: relative;
}

.checkbox-wrapper-45 input {
  display: none;
  visibility: hidden;
}

.checkbox-wrapper-45 .cbx {
  -webkit-perspective: 20;
  perspective: 20;
  display: inline-block;
  border: 1px solid var(--color-secondary);
  background: transparent;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  transition: all 0.3s ease;
  @apply rounded-[2px] flex;
}

.checkbox-wrapper-45 .cbx:hover {
  border-color: var(--body-text-color);
}

.checkbox-wrapper-45 .flip {
  display: block;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  position: relative;
  width: 22px;
  height: 22px;
}

.checkbox-wrapper-45 input:checked+.cbx {
  border-color: var(--body-text-color);
}

.checkbox-wrapper-45 input:checked+.cbx .flip {
  transform: rotateY(180deg);
}

.checkbox-wrapper-45 .front,
.checkbox-wrapper-45 .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border-radius: 2px;
}

.checkbox-wrapper-45 .front {
  @apply bg-transparent;
  z-index: 1;
}

.checkbox-wrapper-45 .back {
  transform: rotateY(180deg);
  background: var(--body-text-color);
  text-align: center;
  color: #fff;
  line-height: 22px;
  box-shadow: 0 0 0 1px var(--body-text-color);

}

.checkbox-wrapper-45 .back svg {
  margin-top: 3px;
  fill: none;
}

.checkbox-wrapper-45 .back svg path {
  stroke: #fff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.radio {

  .back,
  .cbx {
    border-radius: 50%;
  }

  svg {
    width: 12px;
    right: 1px;
    top: 1px;
    position: relative;
  }
}
</style>