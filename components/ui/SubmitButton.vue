<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
    <button class="btn">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.btn {
    background-color: $m-orange;
    border: none;
    padding: 12px 36px;
    border-radius: 6px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin: 32px auto;
    display: block;
    cursor: pointer;
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }
}
</style>
