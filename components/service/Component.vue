<script lang="ts" setup>
import { servicesData } from '@/assets/data/service';
</script>

<template>
    <div class="service_container">
        <wrapper-global>
            <ui-main-header text="Our Services" :underlineLenght="24" />
            <div class="service_card_block">
                <card-service
                    v-for="{
                        id,
                        imgSrc,
                        title,
                        bgColor,
                        mode,
                        descList,
                    } of servicesData"
                    :key="id"
                    :id="id"
                    :imgSrc="imgSrc"
                    :title="title"
                    :bgColor="bgColor"
                    :mode="mode"
                    :descList="descList"
                />
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.service {
    &_container {
        margin: 36px 0 102px 0;

        @include adaptive('tab-l') {
            margin: 24px 0 64px 0;
        }

        @include adaptive('tab') {
            margin-top: 0px;
        }
    }

    &_card_block {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 16px;
        row-gap: 64px;

        @include adaptive('mob-l') {
            flex-direction: column;
            row-gap: 0;
        }
    }
}
</style>
