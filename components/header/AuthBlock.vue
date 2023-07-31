<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore';

const emit = defineEmits<{
    (e: 'open-reg'): void;
    (e: 'open-login'): void;
}>();

const authStore = useAuthStore();
const onLogout = () => authStore.changeAuthStatus(false);
</script>

<template>
    <div
        v-if="authStore.isAuth"
        class="auth_btn_block"
        :class="{ auth_mobile: !$isDesktop() }"
    >
        <button type="button" class="auth_orange_btn">Contact Us</button>
        <button type="button" class="auth_white_btn" @click="onLogout">
            Logout
        </button>
    </div>
    <div
        v-if="!authStore.isAuth"
        class="auth_btn_block"
        :class="{ auth_mobile: !$isDesktop() }"
    >
        <button
            type="button"
            class="auth_orange_btn"
            @click="emit('open-login')"
        >
            Login
        </button>
        <button type="button" class="auth_white_btn" @click="emit('open-reg')">
            Signup
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';
.auth {
    &_btn_block {
        display: flex;
        justify-content: space-between;
    }

    &_btn {
        border-radius: 4px;
        padding: 8px 24px;
        border: none;
        min-width: 100px;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    &_orange_btn {
        @extend .auth_btn;
        background-color: $m-orange;
        color: white;
        margin-right: 8px;
        opacity: 0.9;
        white-space: nowrap;
    }

    &_white_btn {
        @extend .auth_btn;
        background-color: white;
        color: $m-orange;
        border: 1px solid $m-orange;
        opacity: 0.8;
    }

    &_mobile {
        margin-bottom: 32px;
    }
}
</style>
