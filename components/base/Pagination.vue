<template>
    <nav v-if="filterResult && filterResult.pageCount > 1">
        <ul class="inline-flex flex-wrap w-full justify-center gap-2 mt-5 items-center">
            <li :class="{ 'card-loading': modelValue == 1 }" @click="prevPage()">
                <button class="btn">قبلی</button>
            </li>
            <li v-for="item in RangeNumber(filterPaginationResult?.startPage, filterPaginationResult?.endPage)">
                <a :href="`#${parentId}`" @click="changePage(item)" aria-current="page" :class="[`btn`,
                    { 'active': modelValue == item }]">
                    {{ item }}
                </a>
            </li>
            <template v-if="filterPaginationResult.pageCount > filterPaginationResult.endPage">
                <li>...</li>
                <li> <button class="btn">{{ filterPaginationResult.pageCount }}</button></li>
            </template>
            <li @click="nextPage()" :class="{ 'card-loading': modelValue == filterPaginationResult?.pageCount }">
                <button class="btn">بعدی</button>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        default: 1,
    },
    filterResult: {
        type: Object
    },
    parentId: {
        type: String,
        default: ""
    }
})

const filterPaginationResult = props.filterResult as any;

const prevPage = () => {
    if (props.modelValue > 1)
        emit('update:modelValue', props.modelValue - 1)
}
const changePage = (item: number) => {
    emit('update:modelValue', item)

}

const nextPage = () => {
    if (props.modelValue < filterPaginationResult.pageCount)
        emit('update:modelValue', props.modelValue + 1)

}
</script>
<style scoped lang="scss">
.btn {
    @apply bg-secondary px-4 py-2 rounded-sm hover:bg-lightPrimary;

    &.active {
        @apply bg-primary text-white;
    }
}
</style>