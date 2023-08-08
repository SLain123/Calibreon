<script lang="ts" setup>
withDefaults(
    defineProps<{
        color?: 'black' | 'white';
        text: string;
        href: string;
    }>(),
    { color: 'black' },
);
</script>

<template>
    <NuxtLink class="link" :class="color" :to="href">
        <span class="text">{{ text }}</span>
        <nuxt-icon name="arrows/orange-arrow"></nuxt-icon>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.link {
    text-decoration: none;
    display: inline;

    &:hover {
        opacity: 0.9;
    }
}

.text {
    font-family: $hind;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
}

.black {
    color: $m-black;
}

.white {
    color: white;
}

.nuxt-icon {
    margin-left: 8px;
    color: $m-orange;
}
</style>
