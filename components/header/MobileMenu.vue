<script setup>
const mobileMenuState = useState('header-mob-menu', () => false);

const toggleMenu = () => (mobileMenuState.value = !mobileMenuState.value);
</script>

<template>
    <button
        type="button"
        @click="toggleMenu"
        :class="{
            m_menu_active: mobileMenuState,
            m_menu_inactive: !mobileMenuState,
        }"
    ></button>
</template>

<style lang="scss" scoped>
.m_menu {
    &_btn {
        width: 36px;
        height: 36px;
        border: none;
        background-color: transparent;
        padding: 8px;
        background-position: center
    }

    &_active {
        @extend .m_menu_btn;
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 212.982 212.982' style='enable-background:new 0 0 212.982 212.982;' xml:space='preserve'%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;' d='M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'/%3E%3C/svg%3E%0A");
    }

    &_inactive {
        @extend .m_menu_btn;
        background-image: url("data:image/svg+xml,%3Csvg width='46' height='44' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M7.94977 11.9498H39.9498' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.94977 23.9498H39.9498' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.94977 35.9498H39.9498' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    }
}
</style>
