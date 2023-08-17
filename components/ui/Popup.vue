<script setup lang="ts">
export type PopupType = {
    open: () => void;
    close: () => void;
};

const isOpen = ref(false);

defineProps<{
    withLogo?: boolean;
}>();

const open = () => {
    document.body.classList.add('modal-open');
    isOpen.value = true;
};
const close = () => {
    isOpen.value = false;
    document.body.classList.remove('modal-open');
};

defineExpose<PopupType>({
    open,
    close,
});
</script>

<template>
    <Teleport to="body">
        <Transition>
            <div class="layout" v-if="isOpen" @click.self="close">
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
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
.layout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
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
        z-index: 10;
    }

    &_logo {
        margin: 0 auto 32px auto;
        display: block;
    }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
