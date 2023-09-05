<script lang="ts" setup>
import { CardBlogType } from '@/types/Cards';

const props = withDefaults(defineProps<CardBlogType>(), { isOpen: false });
const imageUrl = new URL(`../../assets/img/blog/${props.logo}`, import.meta.url)
    .href;

const isOpenText = ref(props.isOpen);

const btnText = computed(() => (isOpenText.value ? 'Read Less' : 'Read More'));
const computedText = computed(() =>
    isOpenText.value ? props.text : `${props.text.slice(0, 600)}...`,
);

const toggleTextStatus = () => (isOpenText.value = !isOpenText.value);
</script>

<template>
    <div class="b_card_container">
        <div class="b_card_head">
            <img
                :src="imageUrl"
                :alt="`logo-${id}`"
                :width="166"
                :height="166"
                class="b_card_logo"
            />
            <div class="b_card_info_block">
                <p class="b_card_title">{{ title }}</p>
                <p class="b_card_author">BY {{ author }}</p>
            </div>
        </div>

        <div class="b_card_text_block">
            <p class="b_card_text_content">
                {{ computedText }}
            </p>
            <button
                type="button"
                class="b_card_more_btn"
                @click="toggleTextStatus"
            >
                <span>{{ btnText }}</span>
                <span class="icon"></span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.b_card {
    &_container {
        padding: 32px 0;
        margin-bottom: 16px;
        width: 100%;

        @include adaptive('mob-l') {
            padding: 24px 0;
            margin-bottom: 8px;
        }
    }

    &_head {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    &_info_block {
        display: flex;
        flex-direction: column;
        margin-left: 24px;
        width: 100%;
    }

    &_logo {
        @include adaptive('tab') {
            width: 120px;
            height: 120px;
        }

        @include adaptive('mob-m') {
            width: 64px;
            height: 64px;
        }
    }

    &_title {
        font-size: 46px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: -1px;
        color: $m-black;
        border-bottom: 3px solid $m-black;
        width: 70%;
        padding-left: 4px;
        overflow: hidden;

        @include adaptive('desk') {
            width: 85%;
        }

        @include adaptive('tab-l') {
            width: calc(100% - 4px);
            padding-left: 0;
            font-size: 42px;
        }

        @include adaptive('mob-l') {
            font-size: 32px;
        }

        @include adaptive('mob-m') {
            font-size: 28px;
        }
    }

    &_author {
        margin-top: 8px;
        font-size: 13px;
        font-style: italic;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.27px;
        text-transform: uppercase;
        padding-left: 4px;
    }

    &_text_content {
        font-family: $hind;
        font-size: 16px;
        font-weight: 500;
        color: $m-black;
        white-space: pre-wrap;
    }

    &_more_btn {
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-left: auto;

        &:hover {
            opacity: 0.9;
        }

        & span {
            font-family: $hind;
            font-size: 20px;
            font-weight: 600;
            margin-top: 24px;
            margin-right: 16px;
            color: $m-black;
        }

        & .icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' viewBox='0 0 13 23' fill='none'%3E%3Cpath d='M10.4175 10.2442C9.61458 10.2442 8.96371 10.895 8.96371 11.6979C8.96371 12.5008 9.61458 13.1517 10.4175 13.1517V10.2442ZM12.4146 12.7259C12.9824 12.1582 12.9824 11.2377 12.4146 10.67L3.16287 1.41819C2.59514 0.850461 1.67466 0.850461 1.10692 1.41819C0.539187 1.98593 0.539187 2.90641 1.10692 3.47414L9.33072 11.6979L1.10692 19.9217C0.539187 20.4895 0.539187 21.4099 1.10692 21.9777C1.67466 22.5454 2.59514 22.5454 3.16287 21.9777L12.4146 12.7259ZM10.4175 13.1517H11.3867V10.2442H10.4175V13.1517Z' fill='%23F05B25'/%3E%3C/svg%3E");
            width: 13px;
            height: 23px;
            display: block;
        }
    }
}
</style>
