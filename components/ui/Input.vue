<script setup lang="ts">
import { StyleValue } from 'vue';

withDefaults(
    defineProps<{
        modelValue: string;
        placeholder?: string;
        inputStyle?: StyleValue;
        error?: boolean;
        errorMessage?: string;
        type?: 'text' | 'password';
        disabled?: boolean;
    }>(),
    { type: 'text' },
);

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const updateInput = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
</script>

<template>
    <div class="input_container">
        <input
            class="input_string"
            :style="inputStyle"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateInput"
            :type="type"
            :disabled="disabled"
        />
        <span v-if="error && errorMessage" class="error_message">{{
            errorMessage
        }}</span>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.input {
    &_container {
        width: 100%;
    }

    &_string {
        border: none;
        border-bottom: 2px solid $form-grey;
        padding: 20px 8px;
        font-size: 20px;
        outline: none;
        width: 100%;

        &::placeholder {
            color: $form-grey;
            font-size: 20px;
            font-weight: 400;
        }

        &:focus {
            border-bottom: 3px solid $m-orange;
        }
    }
}

.error {
    color: $m-red;
    border-bottom: 2px solid $m-red;

    &_message {
        color: $m-red;
        display: flex;
    }
}
</style>
