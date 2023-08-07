<script lang="ts" setup>
import { FooterMenuType } from '@/types/Menu';

defineProps<{ footerData: FooterMenuType }>();
</script>

<template>
    <div class="menu_container">
        <div class="menu_column">
            <p class="menu_title">Menu</p>

            <div class="menu_link_block">
                <NuxtLink
                    class="menu_link"
                    v-for="{ id, title, href } of footerData.menu"
                    :key="id"
                    :to="href"
                >
                    {{ title }}
                </NuxtLink>
            </div>
        </div>

        <div class="menu_column">
            <p class="menu_title">Useful Links</p>

            <div class="menu_link_block">
                <NuxtLink
                    class="menu_link"
                    v-for="{ id, title, href } of footerData.uLinks"
                    :key="id"
                    :to="href"
                >
                    {{ title }}
                </NuxtLink>
            </div>
        </div>

        <div class="menu_column">
            <p class="menu_title">Contact</p>

            <div class="menu_link_block">
                <a
                    class="menu_link"
                    :href="`mailto:${footerData.contacts.email.value}`"
                >
                    {{ footerData.contacts.email.text }}
                </a>
                <NuxtLink
                    class="menu_link"
                    :to="footerData.contacts.addr.value"
                >
                    {{ footerData.contacts.addr.text }}
                </NuxtLink>
                <p class="menu_text">{{ footerData.contacts.area }}</p>
                <p class="menu_text">{{ footerData.contacts.city }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/mixin.scss';

.menu {
    &_container {
        display: flex;
        gap: 40px;

        @include adaptive('mob-l') {
            flex-direction: column;
        }
    }

    &_title {
        font-size: 26px;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 12px;

        @include adaptive('mob-l') {
            text-align: center;
        }
    }

    &_column {
        display: flex;
        flex-direction: column;
    }

    &_link_block {
        display: flex;
        flex-direction: column;
    }

    &_link {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
        margin-bottom: 12px;

        &:hover {
            opacity: 0.9;
        }

        @include adaptive('mob-l') {
            text-align: center;
        }
    }

    &_text {
        @extend .menu_link;

        &:hover {
            opacity: 1;
        }
    }
}
</style>
