<template>
    <button type="button" v-if="!to" :class="[
        'btn relative',
        { '!rounded-full': rounded },
        { 'btn-transparent': transparent },
        { 'btn-outline': outline },
        size ? `btn-${size}` : null,
        `btn-${color}`,
        { 'loading': loading },
        { 'soft': soft }
    ]" :disabled="loading || disabled">
        <div :class="{ 'opacity-0': loading }">
            <template v-if="$slots.icon">
                <div class="flex items-center gap-[6px] justify-center " :class="{ 'flex-row-reverse': leftIcon }">
                    <slot name="icon" />
                    <slot />
                </div>
            </template>
            <template v-else>
                <slot />
            </template>
        </div>
        <div class="sp sp-3balls" v-if="loading"></div>
    </button>
    <nuxt-link :to="to" v-else :class="[
        'btn relative',
        { 'btn-white': colorWhite },
        { '!rounded-full': rounded },
        { 'btn-transparent': transparent },
        { 'btn-outline': outline },
        size ? `btn-${size}` : null,
        `btn-${color}`,
        { 'loading': loading }
    ]" :disabled="loading || disabled">
        <div :class="{ 'opacity-0': loading }">
            <template v-if="$slots.icon">
                <div class="flex items-center gap-[6px] justify-center " :class="{ 'flex-row-reverse': leftIcon }">
                    <slot name="icon" />
                    <slot />
                </div>
            </template>
            <template v-else>
                <slot />
            </template>
        </div>
        <div class="sp sp-3balls" v-if="loading"></div>
    </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
    color: {
        type: String,
        default: "primary",
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: "",
    },
    to: {
        type: String,
        required: false
    },
    colorWhite: {
        type: Boolean,
        default: false
    },
    transparent: {
        type: Boolean,
        default: false
    },
    soft: {
        type: Boolean,
        default: false
    },
    leftIcon: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped lang="scss">
@media screen and (max-width:768px) {
    .sp-3balls {
        width: 8px !important;
        height: 8px !important;

        &::after {
            width: 8px !important;
            height: 8px !important;
        }

        &::before {
            width: 8px !important;
            height: 8px !important;
        }
    }

}

.btn {
    @apply relative text-white min-w-fit items-center justify-center flex py-10p px-4 rounded transition-all ease-in delay-50;
    border-width: 2px;
    border-color: transparent;
    height: fit-content;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
}

.btn.btn-white {
    @apply border-none bg-white;
    color: var(--color-primary) !important;

    &:hover {
        background: white !important;
        opacity: .8;
    }
}

.btn.btn-white:hover {
    @apply bg-slate-100
}

.btn-primary {
    @apply bg-primary;

    &:hover {
        @apply bg-blue-900;
    }

    &.soft {
        background: var(--color-primary-100);
        color: var(--color-primary);

        &:hover {
            opacity: .7;
        }
    }
}

.btn-secondary {
    @apply bg-secondary;

    &:hover {
        @apply bg-orange-700;
    }

    &.soft {
        background: var(--color-light-secondary);
        color: var(--color-secondary);

        &:hover {
            opacity: .7;
        }
    }
}

.btn-surface {
    @apply bg-surface;
}

.btn-danger {
    &:hover {
        opacity: .6;
    }
}

.btn-info {
    @apply bg-[#2094F3] text-black;

    &:hover {
        opacity: .6;
    }
}

.loading {
    pointer-events: none;

}

.btn-transparent {
    background: transparent !important;
    color: var(--color-black) !important;
    border: 1px solid #E5EBF6;

    &:hover {
        opacity: .5;
    }
}

.btn-outline {
    background: transparent;
    @apply border-muted;

    &.btn-primary {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    &.btn-gray {
        border-color: #E5EBF6;
    }

    &.btn-danger {
        border-color: var(--color-error);
        color: var(--color-error);

    }

    &.btn-info {
        border-color: #2094F3;
        color: #2094F3;
    }

    &.btn-orange {
        border-color: #FF9900;
        color: #ffa114;
    }

    &:hover {
        opacity: .5;
    }
}

.btn-sm {
    @apply border-none px-2 py-2 rounded-sm sm:p-2;
}

.btn-lg {
    padding: 15px 2rem;
    font-weight: 600;
    line-height: 20px;
}

.sp-3balls,
.sp-3balls:before,
.sp-3balls:after {
    border-radius: 50%;
    background-color: white;
    width: 10px;
    height: 10px;
    transform-origin: center center;
    display: inline-block;
}

.sp-3balls {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    opacity: 1;
    -webkit-animation: spScaleAlpha 1s infinite linear;
    animation: spScaleAlpha 1s infinite linear;
}

.sp-3balls:before,
.sp-3balls:after {
    content: "";
    position: relative;
    opacity: 0.25;
}

.sp-3balls:before {
    left: 18px;
    position: absolute;
    top: 0;
    -webkit-animation: spScaleAlphaBefore 1s infinite linear;
    animation: spScaleAlphaBefore 1s infinite linear;
}

.sp-3balls:after {
    left: -18px;
    position: absolute;
    top: 0;
    -webkit-animation: spScaleAlphaAfter 1s infinite linear;
    animation: spScaleAlphaAfter 1s infinite linear;
}

@-webkit-keyframes spScaleAlpha {
    0% {
        opacity: 1;
    }

    33% {
        opacity: 0.25;
    }

    66% {
        opacity: 0.25;
    }

    100% {
        opacity: 1;
    }
}

@keyframes spScaleAlpha {
    0% {
        opacity: 1;
    }

    33% {
        opacity: 0.25;
    }

    66% {
        opacity: 0.25;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes spScaleAlphaBefore {
    0% {
        opacity: 0.25;
    }

    33% {
        opacity: 1;
    }

    66% {
        opacity: 0.25;
    }
}

@keyframes spScaleAlphaBefore {
    0% {
        opacity: 0.25;
    }

    33% {
        opacity: 1;
    }

    66% {
        opacity: 0.25;
    }
}

@-webkit-keyframes spScaleAlphaAfter {
    33% {
        opacity: 0.25;
    }

    66% {
        opacity: 1;
    }

    100% {
        opacity: 0.25;
    }
}

@keyframes spScaleAlphaAfter {
    33% {
        opacity: 0.25;
    }

    66% {
        opacity: 1;
    }

    100% {
        opacity: 0.25;
    }
}
</style>