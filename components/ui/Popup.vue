<script setup lang="ts">
defineProps<{
    isOpen: boolean;
    withLogo?: boolean;
}>();

const emit = defineEmits<{
    (e: 'close'): void;
}>();
</script>

<template>
    <div class="layout" v-if="isOpen" @click.self="emit('close')">
        <div class="modal_window">
            <img
                v-if="withLogo"
                src="/img/logo.png"
                alt="logo"
                width="265"
                height="88"
                class="modal_logo"
            />
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

.modal {
    &_window {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 300px;
        max-width: 640px;
        padding: 64px;
        background-color: white;
        border-radius: 32px;
    }

    &_logo {
        margin: 0 auto 32px auto;
        display: block;
    }
}
</style>
