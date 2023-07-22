<template>
    <NuxtLink :to="href">{{ title }}</NuxtLink>
</template>

<script setup>
const props = defineProps({
    title: String,
    href: String,
    children: Array,
});
const { title } = toRefs(props);
</script>
