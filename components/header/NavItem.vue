<script setup>
const props = defineProps({
    id: Number,
    title: String,
    href: String,
    children: Array,
});

const route = useRoute();
const routeObj = reactive({ route });
const currentUrl = computed(() => routeObj.route.path);

const dropListState = useState(`header-drop-list-${props.id}`, () => false);

const displayDropList = () => {
    props.children && (dropListState.value = true);
};
const hideDropList = () => (dropListState.value = false);
</script>

<template>
    <div class="link_container">
        <NuxtLink
            class="link_item"
            :class="{ link_active: currentUrl === href }"
            :to="href"
            @mouseover="displayDropList"
            >{{ title }}
        </NuxtLink>

        <div v-if="dropListState" class="drop_list_container">
            <NuxtLink
                v-for="{ id, title, href } of children"
                :to="href"
                :key="id"
                class="drop_list_link"
                >{{ title }}
            </NuxtLink>
        </div>
    </div>

    <div v-if="dropListState" class="blanked" @mouseover="hideDropList" />
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.link {
    &_container {
        position: relative;
        z-index: 2;
    }

    &_item {
        color: $m-black;
        font-family: $hind;
        font-weight: 400;
        font-size: 20px;
        text-decoration: none;
        padding: 16px 12px 7px 12px;
        white-space: nowrap;

        &:hover {
            border-bottom: 4px solid $m-orange;
            padding-bottom: 3px;
        }
    }

    &_active {
        font-weight: 600;
        border-bottom: 4px solid $m-orange;
        padding-bottom: 3px;
    }
}

.drop_list {
    &_container {
        position: absolute;
        top: 35px;
        left: -52px;
        padding: 24px 52px;
        border-radius: 22px;
        background: #fff;
        box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.14);
        min-width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    &_link {
        font-family: $hind;
        font-size: 17px;
        font-weight: 400;
        text-decoration: none;
        color: $m-black;
        padding: 12px 0;
        white-space: nowrap;
    }
}

.blanked {
    width: 100%;
    height: 100vh;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>
