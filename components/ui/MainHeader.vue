<script lang="ts" setup>
withDefaults(
    defineProps<{
        color?: 'orange' | 'white';
        text: string;
        underlineLenght?: number;
    }>(),
    { color: 'orange', underlineLenght: 40 },
);
</script>

<template>
    <h2
        class="header"
        :style="{ paddingRight: `${underlineLenght}px` }"
        :class="color"
    >
        {{ text }}
    </h2>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.header {
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    padding: 0 0 0 4px;
    border-bottom: 3px solid $m-orange;
    display: inline-block;
    white-space: nowrap;
    user-select: none;

    @include adaptive('mob-l') {
        font-size: 34px;
        padding-right: 8px;
    }
}

.orange {
    color: $m-orange;
}

.white {
    color: white;
}
</style>
