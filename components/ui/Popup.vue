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
                    <button
                        type="button"
                        class="modal_close_btn"
                        @click="close"
                    >
                        <span />
                    </button>
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
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.layout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;

    @include adaptive('mob-l') {
        position: relative;
        overflow-y: scroll;
    }
}

.modal {
    &_window {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 320px;
        max-width: 640px;
        padding: 64px;
        background-color: white;
        border-radius: 32px;
        z-index: 10;

        @include adaptive('mob-l') {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            padding: 64px 24px;
            min-width: 100vw;
            border-radius: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
    }

    &_close_btn {
        position: absolute;
        top: 16px;
        right: 16px;
        border: none;
        background-color: transparent;
        padding: 4px;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        & span {
            width: 24px;
            height: 24px;
            display: block;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 212.982 212.982' fill='rgb(77, 77, 77)' style='enable-background:new 0 0 212.982 212.982;' xml:space='preserve'%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;' d='M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'/%3E%3C/svg%3E%0A");
        }
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
