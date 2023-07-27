<script setup>
const menuData = [
    {
        id: 0,
        title: 'Services',
        href: '/services',
        children: [
            { id: 10, title: 'Accounting', href: '/services/accouting' },
            { id: 11, title: 'E-commerce', href: '/services/commerce' },
            { id: 12, title: 'Animation', href: '/services/animation' },
            { id: 13, title: 'Film & TV', href: '/services/film' },
            { id: 14, title: 'Web development', href: '/services/web-dev' },
            { id: 15, title: 'Human Resources', href: '/services/human-resc' },
            { id: 16, title: 'Architecture', href: '/services/arch' },
        ],
    },
    { id: 1, title: 'About us', href: '/about' },
    { id: 2, title: 'Home', href: '/' },
    { id: 3, title: 'Team', href: '/team' },
    { id: 4, title: 'Blogs', href: '/blogs' },
];
</script>

<template>
    <header class="header_container">
        <wrapper-global>
            <div class="header_content">
                <header-mobile-menu v-if="!$isDesktop()" :menu="menuData" />

                <img src="/img/logo.png" alt="logo" width="216" height="72" />

                <header-nav-menu v-if="$isDesktop()" :menu="menuData" />
                <header-auth-block v-if="$isDesktop()" />
            </div>
        </wrapper-global>
    </header>
    <div class="header_stub" />
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
