<template>
    <NuxtLink class="link" :class="getActiveStyle" :to="href">{{
        title
    }}</NuxtLink>
</template>

<script setup>
const props = defineProps({
    title: String,
    href: String,
    children: Array,
});

const route = useRoute();
const routeObject = reactive({ route });
const currentRoute = computed(() => {
    return routeObject.route.path;
});
const getActiveStyle = computed(
    () => currentRoute.value === props.href && 'link_active',
);
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
.link {
    color: $m-black;
    font-family: $hind;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    padding: 16px 12px 7px 12px;
    transition: 0.1s ease-in-out;

    &:hover {
        border-bottom: 4px solid $m-orange;
        padding-bottom: 3px;
    }

    &_active {
        font-weight: 600;
        border-bottom: 4px solid $m-orange;
        padding-bottom: 3px;
    }
}
</style>
