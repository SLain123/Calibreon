<script setup lang="ts">
import { menuData } from '@/assets/data/layout';
import { PopupType } from '@/components/ui/Popup.vue';

const regPopup = ref<PopupType | null>(null);
const loginPopup = ref<PopupType | null>(null);

useCheckToken();
</script>
<template>
    <header class="header_container">
        <wrapper-global>
            <div class="header_content">
                <header-mobile-menu
                    v-if="!$isDesktop()"
                    :menu="menuData"
                    @open-reg="regPopup?.open"
                    @open-login="loginPopup?.open"
                />

                <img
                    src="/img/logo.png"
                    alt="logo"
                    width="216"
                    height="72"
                    class="header_logo"
                />

                <header-nav-menu v-if="$isDesktop()" :menu="menuData" />
                <header-auth-block
                    v-if="$isDesktop()"
                    @open-reg="regPopup?.open"
                    @open-login="loginPopup?.open"
                />
            </div>
        </wrapper-global>
    </header>
    <div class="header_stub" />

    <ui-popup ref="regPopup" withLogo>
        <form-register @close="regPopup?.close" />
    </ui-popup>

    <ui-popup ref="loginPopup" withLogo>
        <form-login @close="loginPopup?.close" />
    </ui-popup>
</template>

<style lang="scss" scoped>
@import 'assets/styles/mixin.scss';

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

    &_logo {
        @include adaptive('tab-l') {
            width: 156px;
            height: 48px;
        }
    }

    &_stub {
        width: 100%;
        height: 100px;
    }
}
</style>
