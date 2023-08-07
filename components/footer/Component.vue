<script lang="ts" setup>
import { footerData } from '@/assets/data/layoutData';
</script>

<template>
    <footer class="footer_container">
        <wrapper-global>
            <div class="footer_contant">
                <div class="footer_first_row">
                    <div class="footer_community_block">
                        <footer-community />
                    </div>
                    <div class="footer_menu_block">
                        <footer-menu :footerData="footerData" />
                    </div>
                </div>

                <img
                    src="/img/logo-white.png"
                    alt="logo"
                    width="310"
                    height="104"
                />

                <div class="footer_end_row">
                    © 2023 CALIBREON INTL. ALL RIGHTS RESERVED. DESIGNED BY
                    Ariyan Arman, DEVELOPMENT BY Lamzov Artem
                </div>
            </div>
        </wrapper-global>
    </footer>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.footer {
    &_container {
        padding: 84px 0 32px 0;
        background-color: $m-black;
        color: white;
        margin-top: 64px;
    }

    &_first_row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    &_end_row {
        display: flex;
        justify-content: center;
        margin-top: 42px;
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
    }
}
</style>
