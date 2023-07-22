<template>
    <nav
        class="nav_container"
        v-for="{ id, title, href, children } of menuData"
    >
        <header-nav-item
            :key="id"
            :title="title"
            :href="href"
            :children="children"
        />
    </nav>
</template>

<script setup>
const menuData = [
    {
        id: 0,
        title: 'Services',
        href: '/services',
        children: [
            { id: 10, title: 'Accounting', href: '/service/accouting' },
            { id: 11, title: 'E-commerce', href: '/service/commerce' },
            { id: 12, title: 'Animation', href: '/service/animation' },
            { id: 13, title: 'Film & TV', href: '/service/film' },
            { id: 14, title: 'Web development', href: '/service/web-dev' },
            { id: 15, title: 'Human Resources', href: '/service/human-resc' },
            { id: 16, title: 'Architecture', href: '/service/arch' },
        ],
    },
    { id: 1, title: 'About us', href: '/about' },
    { id: 2, title: 'Home', href: '/' },
    { id: 3, title: 'Team', href: '/team' },
    { id: 4, title: 'Blogs', href: '/blogs' },
];
</script>
