<script lang="ts" setup>
withDefaults(
    defineProps<{
        id: number;
        imgSrc: string;
        title: string;
        descList: string[];
        bgColor?: string;
        mode?: 'left' | 'right';
    }>(),
    { bgColor: '#4d4d4d', mode: 'left' },
);
</script>

<template>
    <div class="serv_card_container">
        <img
            :src="imgSrc"
            :alt="`slide-${id}`"
            class="serv_card_img"
            :class="mode"
            :width="360"
            :height="320"
        />
        <div class="serv_card_info_block" :style="{ backgroundColor: bgColor }">
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

.serv_card {
    &_container {
        width: 100%;
        display: flex;
        background-color: transparent;
        position: relative;
    }

    &_img {
        display: block;
        z-index: 1;
    }

    &_img.left {
        margin-left: 24px;
    }

    &_img.right {
        margin-left: auto;
        margin-right: 24px;
    }

    &_info_block {
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0;
        height: calc(100% - 100px);
        border-radius: 20px;
    }

    &_info_content {
        position: absolute;
        top: 0;
        padding: 32px 0;
    }

    &_info_content.left {
        right: 24px;
    }

    &_info_content.right {
        left: 24px;
    }

    &_title {
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        color: white;
        margin-bottom: 8px;
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
        }
    }
}
</style>
