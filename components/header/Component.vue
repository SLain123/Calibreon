<script setup lang="ts">
import { menu } from '@/assets/data/layoutData';

useCheckToken();
const regWindowState = useState('register-window-status', () => false);
const loginWindowState = useState('login-window-status', () => false);

const changeRegState = (stat: boolean) => (regWindowState.value = stat);
const changeLoginState = (stat: boolean) => (loginWindowState.value = stat);
</script>
<template>
    <header class="header_container">
        <wrapper-global>
            <div class="header_content">
                <header-mobile-menu
                    v-if="!$isDesktop()"
                    :menu="menu"
                    @open-reg="changeRegState(true)"
                    @open-login="changeLoginState(true)"
                />

                <img src="/img/logo.png" alt="logo" width="216" height="72" />

                <header-nav-menu v-if="$isDesktop()" :menu="menu" />
                <header-auth-block
                    v-if="$isDesktop()"
                    @open-reg="changeRegState(true)"
                    @open-login="changeLoginState(true)"
                />
            </div>
        </wrapper-global>
    </header>
    <div class="header_stub" />

    <ui-popup :isOpen="regWindowState" withLogo @close="changeRegState(false)">
        <form-register @close="changeRegState(false)" />
    </ui-popup>

    <ui-popup
        :isOpen="loginWindowState"
        withLogo
        @close="changeLoginState(false)"
    >
        <form-login @close="changeLoginState(false)" />
    </ui-popup>
</template>

<style lang="scss" scoped>
.header {
    &_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 12px 0;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 2;
    }
    &_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &_stub {
        width: 100%;
        height: 100px;
    }
}
</style>
