<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
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

            <swiper
                :breakpoints="{
                    320: {
                        spaceBetween: 4,
                        slidesPerView: 1.1,
                    },
                    375: {
                        spaceBetween: 16,
                        slidesPerView: 1.3,
                    },
                    768: {
                        spaceBetween: 16,
                        slidesPerView: 1.1,
                    },
                    1024: {
                        spaceBetween: 32,
                        slidesPerView: 1.3,
                    },
                    1280: {
                        spaceBetween: 42,
                        slidesPerView: 1.6,
                    },
                }"
                :modules="[Navigation]"
                :navigation="{
                    nextEl: '.o_service_btn_next',
                    prevEl: '.o_service_btn_prev',
                }"
                class="o_service_swiper"
            >
                <swiper-slide>
                    <card-service
                        :id="0"
                        imgSrc="assets/img/service-1.png"
                        title="Accounting"
                        bgColor="#62C"
                        mode="left"
                        :descList="[
                            'Bookeeping',
                            'Accounting',
                            'Bookeeping',
                            'Accounting',
                        ]"
                    />
                </swiper-slide>
                <swiper-slide>
                    <card-service
                        :id="1"
                        imgSrc="assets/img/service-2.png"
                        title="Film & TV"
                        bgColor="#282828"
                        mode="right"
                        :descList="[
                            'Short films',
                            'Advertisments',
                            'Photography',
                            'Editing',
                        ]"
                    />
                </swiper-slide>
                <swiper-slide>
                    <card-service
                        :id="2"
                        imgSrc="assets/img/service-3.png"
                        title="Architecture"
                        bgColor="#7D1128"
                        mode="left"
                        :descList="[
                            'Bookeeping',
                            'Accounting',
                            'Bookeeping',
                            'Accounting',
                        ]"
                    />
                </swiper-slide>
            </swiper>

            <div class="o_service_control_block">
                <button type="button" class="o_service_btn_prev"></button>
                <button type="button" class="o_service_btn_next"></button>
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

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

        @include adaptive('mob-l') {
            flex-wrap: wrap;
            flex-direction: column;
            align-items: flex-start;
            height: 80px;
        }
    }

    &_swiper {
        position: relative;
        left: 0;
        width: calc(113.5%);

        @include adaptive('desk') {
            width: calc(100% + 32px);
        }

        @include adaptive('tab-l') {
            width: calc(100% + 24px);
        }
    }

    &_control_block {
        margin-top: 76px;
        display: flex;
        justify-content: flex-end;

        @include adaptive('mob-l') {
            margin-top: 4px;
        }
    }

    &_btn_prev,
    &_btn_next {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        border: none;
        cursor: pointer;
        background-color: $m-orange;

        &:hover {
            opacity: 0.9;
        }
    }

    &_btn_prev {
        background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24.5286' cy='24.5286' r='24.5286' fill='%23F05B25'/%3E%3Cpath d='M17.9393 25.5892C17.3536 25.0034 17.3536 24.0537 17.9393 23.4679L27.4853 13.922C28.0711 13.3362 29.0208 13.3362 29.6066 13.922C30.1924 14.5077 30.1924 15.4575 29.6066 16.0433L21.1213 24.5286L29.6066 33.0138C30.1924 33.5996 30.1924 34.5494 29.6066 35.1352C29.0208 35.721 28.0711 35.721 27.4853 35.1352L17.9393 25.5892ZM19.7214 26.0286H19V23.0286H19.7214V26.0286Z' fill='white'/%3E%3C/svg%3E%0A");
        margin-right: 16px;
    }

    &_btn_next {
        background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25.4714' cy='24.5286' r='24.5286' fill='%23F05B25'/%3E%3Cpath d='M32.7821 26.0607C33.3679 25.4749 33.3679 24.5251 32.7821 23.9393L23.2361 14.3934C22.6504 13.8076 21.7006 13.8076 21.1148 14.3934C20.529 14.9792 20.529 15.9289 21.1148 16.5147L29.6001 25L21.1148 33.4853C20.529 34.0711 20.529 35.0208 21.1148 35.6066C21.7006 36.1924 22.6504 36.1924 23.2361 35.6066L32.7821 26.0607ZM31 26.5H31.7214V23.5H31V26.5Z' fill='white'/%3E%3C/svg%3E%0A");
    }
}
</style>
