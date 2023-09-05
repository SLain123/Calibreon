<script setup lang="ts">
import { worldData } from '@/assets/data/home';
</script>

<template>
    <div class="world_container">
        <wrapper-global>
            <h2 class="world_title">Testimonial:</h2>
            <h3 class="world_subtitle">
                Find out why we're the top choice - read what our customers have
                to say! Our testimonials reflect the high level of customer
                satisfaction we strive for, and we're confident that you'll see
                why our clients keep coming back for more
            </h3>

            <div class="world_map_block">
                <div class="world_map_content">
                    <card-world
                        v-for="{ id, text, brandImgSrc } of worldData"
                        :key="id"
                        :id="id"
                        :text="text"
                        :brandImgSrc="brandImgSrc"
                    />
                </div>
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.world {
    &_container {
        margin: 112px 0;

        @include adaptive('mob-l') {
            margin: 64px 0;
        }
    }

    &_title {
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        color: $m-orange;
        margin-bottom: 12px;

        @include adaptive('mob-l') {
            font-size: 48px;
        }
    }

    &_subtitle {
        font-family: $hind;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        width: 65%;
        margin-bottom: 16px;

        @include adaptive('tab-l') {
            width: 80%;
        }

        @include adaptive('tab') {
            width: 95%;
        }
    }

    &_map {
        &_block {
            padding: 16px 0;
            background-image: url('public/img/orange-map.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position-x: right;

            @include adaptive('mob-l') {
                background-repeat: repeat-y;
            }
        }

        &_content {
            width: 55%;

            @include adaptive('tab-l') {
                width: 75%;
            }

            @include adaptive('tab') {
                width: 100%;
            }
        }
    }
}
</style>
