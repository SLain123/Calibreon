<script setup lang="ts">
import { brandData } from '@/assets/data/home';


</script>

<template>
    <div class="o_brand_container">
        <img
            v-for="{ id, src, alt } of brandData"
            :key="id"
            :src="`img/brands/${src}`"
            :alt="alt"
            class="o_brand_img"
            :width="312"
            :height="56"
        />
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.o_brand {
    &_container {
        background-color: $m-black;
        padding: 112px 0;
        display: flex;
        justify-content: center;

        @include adaptive('tab-l') {
            flex-direction: column;
            align-items: center;
        }

        @include adaptive('tab-l') {
            padding: 64px 0;
        }
    }

    &_img {
        margin-right: 48px;

        @include adaptive('tab-l') {
            margin-bottom: 48px;
            margin-right: 0;
        }

        &:last-child {
            margin-right: 0;
            margin-bottom: 0;
        }
    }
}
</style>
