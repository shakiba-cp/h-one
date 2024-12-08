<template>
  <div>
    <label :class="['input-label mb-2']" v-if="label">{{ label }}<span class="text-red-600" v-if="required">
        *</span></label>
    <div :class="['input-group']">
      <input ref="inputElement" @blur="handleBlur($event, true)" :type="type" :disabled="disabled" :class="[
        'form-control ',
        { 'bg-transparent': transparent },
        { 'invalid-data': !!errorMessage },
        { 'has-icon': $slots.icon },
        { 'outline': outLine },
        { 'profix-icon': profixIcon && $slots.icon },
        inputClass
      ]" :placeholder="placeholder" :value="inputValue" :autofocus="autofocus" @input="modelValueChanged" :name="name"
        :autocomplete="autocomplete" :inputmode="number ? 'numeric' : 'text'"
        :maxlength="maxLenght > 0 ? maxLenght : 524288" />
      <div class="input__icon " :class="[
        { 'profix-icon': profixIcon },
        { 'has-error': errorMessage && meta.touched },
        { 'opacity-50': disabled }
      ]" v-if="$slots.icon">
        <slot name="icon" />
      </div>

      <slot v-if="hasSlot()" />
      <p class="input-invalid-text" v-if="errorMessage && meta.touched">{{ errorMessage }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useField } from "vee-validate";

const slots = useSlots();
const emit = defineEmits(["update:modelValue"]);
const inputElement: Ref<HTMLElement | null> = ref(null);

const props = defineProps({
  autofocus: {
    default: false,
    type: Boolean,
  },
  autocomplete: {
    default: "off",
    type: String
  },
  placeholder: {
    default: "",
    type: String,
  },
  modelValue: {
    default: "",
    type: String || null,
  },
  type: {
    default: "text",
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
  number: {
    type: Boolean,
    default: false,
  },
  ignoreErrorMessage: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: ""
  },
  outLine: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  maxLenght: {
    type: Number,
    default: 0,
  },
  inputClass: {
    type: String,
    default: ""
  },
  profixIcon: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ""
  }
});

const {
  value: inputValue,
  errorMessage,
  meta,
  handleChange,
  handleBlur,
  setValue,
} = useField(props.name, undefined, {
  initialValue: props.value ?? props.modelValue,
  validateOnValueUpdate: false,
});

watchEffect(() => {
  emit("update:modelValue", unref(inputValue));
});
watch(
  () => props.modelValue,
  (value) => {
    setValue(value);
  }
);
const modelValueChanged = ($event: any) => {
  if (props.type == 'input') {
    return;
  }
  if (props.type == 'checkbox') {
    if ($event.target.checked) {
      handleChange($event);
      emit("update:modelValue", $event.target.value);
    } else {
      emit("update:modelValue", "");
      setValue("");
    }
  } else {
    if (props.number) {
      if (!isNaN($event.target.value)) {
        emit("update:modelValue", $event.target.value);
      } else {
        $event.target.value = props.modelValue;
      }
    } else {
      emit("update:modelValue", $event.target.value);
    }
    handleChange($event);
  }
};
const hasSlot = () => {
  return !!slots.default;
};
onMounted(() => {
  if (props.autofocus) {
    setTimeout(() => {
      inputElement.value!.focus();

    }, 200);
  }
})
</script>
<style scoped lang="scss">


</style>