<template>
  <div class="flex w-full justify-between">
    <label class="cursor-pointer" :for="inputId">{{ label }}</label>
    <div class="checkbox-wrapper-31">
      <input :value="value" :checked="checked" :id="inputId" :type="type" :name="name" />
      <svg viewBox="0 0 35.6 35.6">
        <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
const input = ref(null);
const props = withDefaults(defineProps<{
  label: string,
  type?: "checkbox" | "radio",
  name: string,
  inputId?: string | null,
  checked?: boolean,
  value?: string
}>(), {
  type: 'checkbox',
  inputId: null,
  checked: false
});
const inputId = ref(props.inputId ?? useId());
</script>

<style scoped>
.checkbox-wrapper-31:hover .check {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-31 {
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
}

.checkbox-wrapper-31 .background {
  fill: #C8C7DC;
  transition: ease all 0.5s;
  -webkit-transition: ease all 0.5s;
}

.checkbox-wrapper-31 .stroke {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke-dashoffset: 100;
  stroke-dasharray: 100;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper-31 .check {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  stroke-dashoffset: 22;
  stroke-dasharray: 22;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper-31 input {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  -appearance: none;
  -webkit-appearance: none;
}

.checkbox-wrapper-31 input:hover {
  cursor: pointer;
}

.checkbox-wrapper-31 input:checked+svg .background {
  fill: var(--color-primary);
}

.checkbox-wrapper-31 input:checked+svg .stroke {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-31 input:checked+svg .check {
  stroke-dashoffset: 0;
}
</style>