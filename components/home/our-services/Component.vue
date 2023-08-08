<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
</script>

<template>
    <div class="o_service_container">
        <wrapper-global>
            <div class="o_service_head_block">
                <ui-main-header text="Our Services" color="white" />
                <ui-arrow-link
                    text="View all services"
                    href="/services"
                    color="white"
                />
            </div>
            <swiper :slides-per-view="2" :space-between="48">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';

.o_service {
    &_container {
        background-color: $m-black;
        padding: 56px 0 36px 0;
    }

    &_head_block {
        margin-bottom: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
