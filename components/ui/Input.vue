<script setup lang="ts">
defineProps<{
    modelValue: string;
    placeholder?: string;
    exClass?: string;
    error?: boolean;
    errorMessage?: string;
    type?: 'text' | 'password';
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const updateInput = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
</script>

<template>
    <div class="input_container" :class="{ exClass }">
        <input
            class="input_string"
            :class="{ error }"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateInput"
            :type="type ?? 'text'"
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
    }
}
</style>
