<script setup lang="ts">
defineProps<{
    name: string;
    modelValue: boolean;
    text: string;
    exClass?: string;
    error?: boolean;
    disabled?: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
}>();

const updateCheckbox = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
};
</script>

<template>
    <div class="checkbox_container" :class="exClass">
        <input
            class="checkbox"
            :class="{ error }"
            type="checkbox"
            :value="modelValue"
            @input="updateCheckbox"
            :id="name"
            :disabled="disabled"
        />
        <label :for="name">{{ text }}</label>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
        display: flex;
        align-items: center;
        user-select: none;
        font-size: 17.814px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: capitalize;
        color: $form-grey;
        cursor: pointer;
    }

    & + label::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid $form-grey;
        border-radius: 6px;
        margin-right: 16px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        cursor: pointer;
    }

    &:checked + label::before {
        border-color: $m-orange;
        background-color: $m-orange;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    &:disabled + label::before,
    &:disabled + label {
        opacity: 0.5;
        color: $form-grey;
        border-color: $form-grey;
    }
}

.error {
    & + label::before {
        border: 2px $m-red solid;
    }

    & + label {
        color: $m-red;
    }
}
</style>
