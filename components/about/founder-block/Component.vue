<script lang="ts" setup>
import { founderList } from '@/assets/data/about';
import { CardFounderMode } from '@/types/Cards';
</script>

<template>
    <div class="founders_container">
        <wrapper-global
            ><h3 class="founders_title">
                Meet our <span class="founders_orange">Co-Founders</span>
            </h3>

            <div class="founders_card_block">
                <card-team
                    v-for="{
                        id,
                        photo,
                        name,
                        certified,
                        desc,
                        position,
                    } of founderList"
                    :key="id"
                    :id="id"
                    :photo="photo"
                    :name="name"
                    :certified="certified"
                    :desc="desc"
                    :mode="CardFounderMode.founder"
                    :position="position"
                />
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.founders {
    &_container {
        margin: 36px 0;

        @include adaptive('tab-l') {
            margin: 24px 0;
        }

        @include adaptive('tab') {
            margin-top: 0px;
        }
    }

    &_text {
        text-align: center;
        font-size: 80px;
        font-weight: 900;
        line-height: 83px;

        @include adaptive('mob-l') {
            font-size: 48px;
            font-weight: 800;
            line-height: 58px;
        }

        @include adaptive('mob-m') {
            font-size: 38px;
            line-height: 48px;
        }
    }

    &_title {
        @extend .founders_text;
        color: $m-black;
        max-width: 560px;
        margin: 120px auto;

        @include adaptive('mob-l') {
            margin: 64px auto;
        }
    }

    &_orange {
        @extend .founders_text;
        color: $m-orange;
        white-space: nowrap;
    }

    &_card_block {
        display: flex;
        height: 1400px;
        position: relative;

        @include adaptive('tab-l') {
            flex-flow: wrap;
            justify-content: space-between;
            height: auto;
            gap: 24px;
        }

        @include adaptive('mob-l') {
            flex-flow: column;
            gap: 24px;
        }
    }
}
</style>
