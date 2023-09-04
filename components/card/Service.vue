<script lang="ts" setup>
import { CardServiceType, CardServiceMode } from '@/types/Cards';

withDefaults(defineProps<CardServiceType>(), {
    bgColor: '#4d4d4d',
    mode: CardServiceMode.left,
});
</script>

<template>
    <div class="serv_card_container" :class="mode">
        <img
            :src="imgSrc"
            :alt="`slide-${id}`"
            class="serv_card_img"
            :class="mode"
            :width="360"
            :height="320"
        />
        <div
            class="serv_card_info_block"
            :style="{ backgroundColor: bgColor }"
            :class="mode"
        >
            <div class="serv_card_info_content" :class="mode">
                <h3 class="serv_card_title">{{ title }}</h3>
                <ul class="serv_card_list">
                    <li
                        v-for="(desc, indx) of descList"
                        :key="indx"
                        class="serv_card_desc"
                    >
                        {{ desc }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.serv_card {
    &_container {
        width: 100%;
        display: flex;
        background-color: transparent;
        position: relative;

        @include adaptive('mob-l') {
            padding-bottom: 260px;
        }
    }

    &_container.compact {
        width: calc(50% - 8px);
        height: 580px;
        margin-top: 32px;

        @include adaptive('mob-l') {
            width: 100%;
            margin-top: 0;
        }
    }

    &_img {
        display: block;
        z-index: 1;

        @include adaptive('mob-l') {
            width: calc(100% - 48px);
            height: 240px;
        }
    }

    &_img.left {
        margin-left: 24px;
    }

    &_img.right {
        margin-left: auto;
        margin-right: 24px;
    }

    &_img.compact {
        margin-left: auto;
        margin-right: auto;
    }

    &_info_block {
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0;
        height: calc(100% - 100px);
        border-radius: 20px;

        @include adaptive('mob-l') {
            top: 60px;
        }
    }

    &_info_block.compact {
        height: 500px;

        @include adaptive('mob-l') {
            height: 430px;
        }
    }

    &_info_content {
        position: absolute;
        top: 0;
        padding: 32px 16px 32px 0;

        @include adaptive('mob-l') {
            margin-top: 200px;
            left: 24px;
        }
    }

    &_info_content.left {
        right: 24px;
    }

    &_info_content.right {
        left: 24px;
    }

    &_info_content.compact {
        top: 50%;
        left: 24px;

        @include adaptive('mob-l') {
            top: 0;
        }
    }

    &_title {
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        color: white;
        margin-bottom: 8px;

        @include adaptive('tab') {
            font-size: 36px;
        }
    }

    &_list {
        list-style: none;
        padding-left: 24px;
    }

    &_desc {
        font-family: $hind;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        color: white;
        margin-bottom: 2px;
        display: flex;
        align-items: center;

        &:before {
            content: '';
            width: 8px;
            height: 12px;
            display: inline-block;
            background-image: url("data:image/svg+xml,%3Csvg width='7' height='11' viewBox='0 0 7 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.91211 4.77308C4.5396 4.77308 4.23762 5.07506 4.23762 5.44757C4.23762 5.82008 4.5396 6.12206 4.91211 6.12206V4.77308ZM6.06354 5.92451C6.32694 5.6611 6.32694 5.23404 6.06354 4.97063L1.7711 0.678196C1.5077 0.414791 1.08063 0.414791 0.817226 0.678196C0.553821 0.941602 0.553821 1.36867 0.817226 1.63207L4.63273 5.44757L0.817226 9.26307C0.553821 9.52648 0.553821 9.95354 0.817226 10.2169C1.08063 10.4804 1.5077 10.4804 1.7711 10.2169L6.06354 5.92451ZM4.91211 6.12206H5.5866V4.77308H4.91211V6.12206Z' fill='white'/%3E%3C/svg%3E%0A");
            margin-right: 4px;
            background-repeat: no-repeat;
        }
    }
}
</style>
