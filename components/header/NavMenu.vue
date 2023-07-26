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
    <nav class="nav_container">
        <header-nav-item
            v-for="{ id, title, href, children } of menuData"
            :key="id"
            :id="id"
            :title="title"
            :href="href"
            :children="children"
        />
    </nav>
</template>

<style lang="scss" scoped>
@import 'assets/styles/mixin.scss';
.nav_container {
    width: 100%;
    margin: 0 120px;
    display: flex;
    justify-content: space-around;

    @include adaptive('desk') {
        margin: 0 64px;
    }

    @include adaptive('tab-l') {
        margin: 0 32px;
    }
}
</style>
