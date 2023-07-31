<script setup lang="ts">
import { MenuType } from './Component.vue';

defineProps<{
    menu: MenuType[];
}>();
</script>

<template>
    <nav class="nav_container">
        <header-nav-item
            v-for="{ id, title, href, children } of menu"
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
    margin: 0 64px;
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
