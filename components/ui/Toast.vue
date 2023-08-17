<script setup lang="ts">
export type ToastType = {
    setVisible(timeSec?: number): void;
};

defineProps<{ message: string }>();

const isVisible = ref(false);
const setVisible = (timeSec = 0) => {
    isVisible.value = true;
    timeSec && setTimeout(() => (isVisible.value = false), +`${timeSec}000`);
};

defineExpose<ToastType>({
    setVisible,
});
</script>

<template>
    <Teleport to="body">
        <Transition>
            <div v-if="isVisible" class="toast_container">
                <p class="toast_message">{{ message }}</p>
                <button
                    type="button"
                    class="toast_close_btn"
                    @click="isVisible = false"
                >
                    <Icon name="ci:close-lg" color="#f05b25" />
                </button>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
.toast {
    &_container {
        position: fixed;
        bottom: 16px;
        right: 16px;
        background-color: white;
        box-shadow: 0px 16px 40px 0px rgba(72, 74, 100, 0.08),
            0px 4px 16px 0px rgba(72, 74, 100, 0.16);
        padding: 32px 64px;
        border-radius: 12px;
        min-width: 280px;
        max-width: calc(100vw - 32px);
        display: flex;
        justify-content: center;
        z-index: 9;
    }

    &_message {
        color: $m-black;
        font-family: $hind;
        font-size: 18px;
        font-weight: 500;
    }

    &_close_btn {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
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
