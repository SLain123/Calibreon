<script setup lang="ts">
defineProps<{
    isOpen: boolean;
}>();

defineEmits<{
    (e: 'close'): void;
}>();
</script>

<template>
    <div class="layout">
        <div class="modal-window">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-window {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: translate(-50%, -50%);
    min-width: 300px;
    height: 200px;
    padding: 32px;
}
</style>
