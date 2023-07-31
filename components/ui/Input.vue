<script setup lang="ts">
defineProps<{
    placeholder?: string;
    exClass?: string;
}>();
</script>

<template>
    <input class="input" :class="exClass" :placeholder="placeholder" />
</template>

<style lang="scss">
@import 'assets/styles/variables.scss';

.input {
    border: none;
    border-bottom: 2px solid $form-grey;
    padding: 20px 8px;
    font-family: 'Montserrat';
    font-size: 20px;
    outline: none;
    width: 100%;

    &::placeholder {
        color: $form-grey;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 400;
    }

    &:focus {
        border-bottom: 3px solid $m-orange;
    }
}
</style>
