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
        <span class="icon"></span>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.link {
    text-decoration: none;
    display: inline-flex;
    align-items: center;

    &:hover {
        opacity: 0.9;
    }

    @include adaptive('mob-l') {
        width: 100%;
    }
}

.text {
    font-family: $hind;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    white-space: nowrap;
    user-select: none;
}

.black {
    color: $m-black;
}

.white {
    color: white;
}

.icon {
    margin-left: 8px;
    color: $m-orange;
    width: 14px;
    height: 24px;
    display: block;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='24' viewBox='0 0 14 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 10.5C10.1716 10.5 9.5 11.1716 9.5 12C9.5 12.8284 10.1716 13.5 11 13.5V10.5ZM13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z' fill='%23F05B25'/%3E%3C/svg%3E%0A");
}
</style>
