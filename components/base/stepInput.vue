<template>
    <ClientOnly>
        <div class="step__wrapper">
            <input :style="inputStyles" @input="(e) => dataChanged(e, index)" @keydown="back($event, index)"
                :tabindex="item" maxlength="1" v-for="(item, index) in RangeNumber(1, length)" :value="data[index]"
                :name="inputName" type="text"
                :class="[{ 'has__Data': data[index] }, { 'disabled': index > 0 && !data[index - 1] }]"
                autocomplete="off" :inputmode="numberKeyboard ? 'numeric' : 'text'" :autofocus="autofocus"
                :id="id + '_' + index" />
        </div>
        <template #fallback>
            <!-- <div class="step__wrapper">
                <BaseSkeletonLoaidng class="loading" :style="inputStyles" v-for="(item, index) in RangeNumber(1, length)" />
            </div> -->
        </template>
    </ClientOnly>
</template>


<script setup lang="ts">
const inputElement = ref(null);
const id = useId();
const props = defineProps({
    length: {
        type: Number,
        default: 5
    },
    modelValue: {
        type: String,
        default: ""
    },
    numberKeyboard: {
        type: Boolean,
        default: true
    },
    inputStyles: {
        type: String,
        default: ""
    },
    onCompleted: {
        type: Function,
        default: () => { }
    },
    autofocus: {
        default: false,
        type: Boolean,
    },
});
const inputName = ref(newGuid());

const data = ref(unref(props.modelValue))
const back = (e: any, index: number) => {
    if (e.key == 'Backspace') {
        if (!data.value[index] || data.value[index] == " ") {
            document.getElementsByName(inputName.value)[index - 1]?.focus()
            data.value = data.value.substring(0, index - 1);
        } else if (data.value[index]) {
            data.value = replaceAt(data.value, index, " ");
        }
    }
    else if (e.key == "Enter" || e.key == "Alt" || e.key == "Control") {
        return;
    }
    else if (data.value[index] && data.value.length < props.length) {
        data.value += e.key;
        document.getElementsByName(inputName.value)[index + 1]?.focus()
    } else if (data.value[index]) {
        data.value = replaceAt(data.value, index, e.key);
    }
}
const focusInput = () => {
    var currentIndex = data.value.length;
    if (currentIndex < 0)
        currentIndex = 0;
    document.getElementsByName(inputName.value)[currentIndex]?.focus()
}
const dataChanged = (e: any, index: number) => {
    if (e.data?.length) {
        if (data.value[index] == " ") {
            data.value = replaceAt(data.value, index, e.data)
        } else if (data.value[index]) {
            data.value = replaceAt(data.value, index, e.data)
        }
        else {
            data.value += e.data;
        }
        document.getElementsByName(inputName.value)[index + 1]?.focus()
    }
}

const emit = defineEmits(['update:modelValue']);
const calledFunction = ref(false);
watch(data, (val) => {

    emit('update:modelValue', val);
    if (data.value.length == props.length && calledFunction.value == false) {
        props.onCompleted();
        calledFunction.value = true;
    }

});
watch(() => props.modelValue, (val) => {
    data.value = val;
});
onMounted(() => {
    if (props.autofocus) {
        setTimeout(() => {
            document.getElementById(id + "_" + 0)!.focus();

        }, 200);
    }
})
</script>
<style lang="scss" scoped>
@media screen and (max-width:460px) {
    .step__wrapper input {
        width: 55px !important;
        height: 55px !important;
    }

    .loading {
        width: 55px !important;
        height: 55px !important;
    }

}

.loading {
    width: 72px;
    height: 72px;
}

.step__wrapper {
    justify-content: space-around;
    display: flex;
    gap: 1rem;
    direction: ltr;
}

input {
    @apply bg-bodyBg border-2 border-borderColor;
    border-radius: 8px;
    width: 52px;
    height: 52px;
    text-align: center;
    color: var(--color-typography-primary);

    &:focus {
        border-color: var(--color-primary) !important;
    }

    &.has__Data {
        border-color: var(--color-primary) !important;
    }

    &.disabled {
        border-color: var(--color-light-secondary) !important;
        @apply  dark:bg-secondary;
         cursor: default;

        font-size: 0 !important;
    }
}
</style>