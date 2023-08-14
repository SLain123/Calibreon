<script setup lang="ts">
import { CardWorldType } from '@/types/Cards';

defineProps<CardWorldType>();
</script>

<template>
    <div class="w_card_container">
        <p class="w_card_text">{{ text }}</p>
        <img :src="brandImgSrc" alt="brand" class="w_card_img" />
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.w_card {
    &_container {
        padding: 24px;
        background-color: $m-orange;
        opacity: 0.87;
        margin-bottom: 12px;
        border-radius: 18px;

        @include adaptive('mob-l') {
            padding: 16px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    &_text {
        color: #fff;
        font-family: $hind;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;

        @include adaptive('mob-l') {
            font-size: 16px;
        }
    }

    &_img {
        margin-left: auto;
        display: block;
    }
}
</style>
