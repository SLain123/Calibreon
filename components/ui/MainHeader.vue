<script lang="ts" setup>
withDefaults(
    defineProps<{
        color?: 'orange' | 'white';
        text: string;
    }>(),
    { color: 'orange' },
);
</script>

<template>
    <h2 class="header" :class="color">{{ text }}</h2>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.header {
    font-size: 39px;
    font-style: normal;
    font-weight: 700;
    padding: 0 32px 0 4px;
    border-bottom: 3px solid $m-orange;
    display: inline-block;
}

.orange {
    color: $m-orange;
}

.white {
    color: white;
}
</style>
