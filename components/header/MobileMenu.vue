<script setup>
const props = defineProps({
    menu: Array,
});

const route = useRoute();
const routeObj = reactive({ route });
const currentUrl = computed(() => routeObj.route.path);

const mobileMenuState = useState('header-mob-menu', () => false);
const toggleMenu = () => (mobileMenuState.value = !mobileMenuState.value);

watch(mobileMenuState, (isOpen) => {
    isOpen
        ? (document.documentElement.style.overflow = 'hidden')
        : (document.documentElement.style.overflow = 'auto');
});
</script>

<template>
    <button
        type="button"
        @click="toggleMenu"
        :class="{
            menu_icon_active: mobileMenuState,
            menu_icon_inactive: !mobileMenuState,
        }"
    ></button>

    <div
        :class="{
            menu_visible: mobileMenuState,
            menu_hide: !mobileMenuState,
        }"
    >
        <div class="menu_sidebar">
            <div class="menu_contant">
                <div
                    v-for="{ id, title, href, children } of menu"
                    class="link_block"
                >
                    <NuxtLink
                        :key="id"
                        class="link_item"
                        :class="{ link_item_active: currentUrl === href }"
                        :to="href"
                        >{{ title }}
                    </NuxtLink>

                    <div v-if="children?.length" class="child_block">
                        <NuxtLink
                            v-for="{ id, title, href } of children"
                            :key="id"
                            class="link_child"
                            :class="{ link_item_active: currentUrl === href }"
                            :to="href"
                            >{{ title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
.menu {
    &_btn {
        width: 36px;
        height: 36px;
        border: none;
        background-color: transparent;
        padding: 8px;
        z-index: 5;
        transition: all 0.1s ease-in-out;
    }

    &_icon_active {
        @extend .menu_btn;
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 212.982 212.982' fill='rgb(77, 77, 77)' style='enable-background:new 0 0 212.982 212.982;' xml:space='preserve'%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;' d='M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'/%3E%3C/svg%3E%0A");
    }

    &_icon_inactive {
        @extend .menu_btn;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='44' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M7.94977 11.9498H39.9498' stroke='rgb(77, 77, 77)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.94977 23.9498H39.9498' stroke='rgb(77, 77, 77)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.94977 35.9498H39.9498' stroke='rgb(77, 77, 77)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        background-position: top left;
    }

    &_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.1s ease-in-out;
    }

    &_visible {
        @extend .menu_container;
        z-index: 2;
        display: block;
    }

    &_hide {
        @extend .menu_container;
        display: none;
    }

    &_sidebar {
        width: 100%;
        max-width: 420px;
        height: 100vh;
        background-color: white;
        overflow: scroll;
    }

    &_contant {
        position: relative;
        top: 0;
        left: 0;
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.link_block {
    display: flex;
    flex-direction: column;
}

.link_item {
    color: $m-black;
    font-family: $hind;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    padding: 12px;
    white-space: nowrap;
    margin-bottom: 8px;
    text-align: center;

    &_active {
        font-weight: 600;
    }
}

.child_block {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.link_child {
    @extend .link_item;
    margin-bottom: 0;
    font-size: 16px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        margin-bottom: 16px;
    }
}
</style>
