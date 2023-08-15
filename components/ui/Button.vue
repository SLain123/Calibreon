<script setup lang="ts">
import SpinnerLoader from 'vue-spinner/src/clipLoader.vue';

withDefaults(
    defineProps<{
        text: string;
        loading?: boolean;
        type?: 'submit' | 'button';
    }>(),
    { type: 'submit', loading: false },
);
</script>

<template>
    <button class="btn" :disabled="loading" :type="type">
        <spinner-loader
            class="spinner"
            :loading="loading"
            color="#ffffff"
            size="20px"
        ></spinner-loader>
        <span>{{ text }}</span>
    </button>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.btn {
    background-color: $m-orange;
    border: none;
    padding: 12px 36px;
    border-radius: 6px;
    display: flex;
    margin: 32px auto;
    cursor: pointer;
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }

    &:disabled {
        background-color: grey;
        cursor: not-allowed;

        &:hover {
            opacity: 0.9;
        }
    }

    & span {
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
}

.spinner {
    margin-right: 16px;
    margin-top: 2px;
}
</style>
