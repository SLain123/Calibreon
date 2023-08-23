<script setup lang="ts">
import { CardTeamType } from '@/types/Cards';
defineProps<CardTeamType>();
</script>

<template>
    <nuxt-link :to="`/team/${name}`" class="t_card_link_block">
        <div class="t_card_head">
            <img
                :src="photo"
                :alt="name"
                :width="162"
                :height="162"
                class="t_card_photo"
            />
            <div class="t_card_info_block">
                <p class="t_card_name">{{ name }}</p>
                <div v-if="certified?.length" class="t_card_certifaed_block">
                    <p
                        v-for="cert of certified"
                        :key="cert"
                        class="t_card_certifaed_text"
                    >
                        {{ cert }}
                    </p>
                </div>
            </div>
        </div>

        <p class="t_card_desc">{{ desc }}</p>
    </nuxt-link>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.t_card {
    &_link_block {
        text-decoration: none;
        cursor: pointer;
        background-color: $m-black;
        padding: 24px;
        border-radius: 20px;

        @include adaptive('mob-m') {
            padding: 16px;
        }

        &:hover {
            background-color: $m-orange;
        }
    }

    &_head {
        display: flex;
        margin-bottom: 16px;
    }

    &_info_block {
        margin-top: 24px;
        margin-left: 16px;
        display: flex;
        flex-direction: column;

        @include adaptive('mob-m') {
            margin-top: 0;
        }
    }

    &_photo {
        @include adaptive('tab') {
            width: 120px;
            height: 120px;
        }

        @include adaptive('mob-m') {
            width: 80px;
            height: 80px;
        }
    }

    &_name {
        font-size: 48px;
        font-weight: 700;
        line-height: 68px;
        letter-spacing: -1.06px;
        color: white;

        @include adaptive('desk') {
            font-size: 36px;
            line-height: 56px;
        }

        @include adaptive('tab') {
            font-size: 32px;
            line-height: 52px;
        }
    }

    &_certifaed {
        &_block {
            display: flex;
            flex-direction: column;
        }

        &_text {
            font-family: $hind;
            color: white;
            font-size: 13px;
            font-style: italic;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
            white-space: nowrap;
            display: flex;
            align-items: center;

            &:after {
                content: '';
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-left: 4px;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHQSURBVHgBhZLNS1RRGMaf894zHwrNjYaGFlqgRBEVRIvECMKF1iLEjIii7wiKQNwWJPQH1KJlEbmZRQZ9CEYKQW7ahBWJ4heOjAM6iqMzo9dz58y5zj1yR9QZfVbvec7zeznnvAcooaeTdlvjX7HQ8F/OPxkTHaUyzCvexK3z/ZbvtmnA/JxULQ7R+obj4EyljGZA4s4BfLsRCXQVwdeT2YvvUoGeZI5hJ+0hhZsR1fjsULBPt/2Z5Q92g1xlFKF3Xj1yaw0Kh0S5cJUfaApvrMMBMjXYmRDNMUmXykEfjhLe1hqoC9ram7aNhi8z1kN2ZTg3+ivNDnvBkxUKPUtUhA4GGXpnLbTFuT6qqyN+meSxbK4W8GvjZQ1QH/LhVVyidb+hob45sQnSV2MUoVOmv98z2scVplcdtFfzDWiKNkGu9nH8oWP5zN3jFc6CayQkoXVIavhTYgX3JxjSW6C9LB+7Hs5f1jNoHhSdv5eNW95mdcBBwlJQZGx7sNOV8vvXE8ELul09t9+7w/UUF6wkFCpY96p41K2LU++ak9eiha8W4oQfi+qqWh8xWCHREna6R9IyVWf6Pr6o4d0op8cjVse5Ads6+y+XahqwnpfKrAEY8bPdeGWp8gAAAABJRU5ErkJggg==');
            }
        }
    }

    &_desc {
        font-family: $hind;
        font-size: 16px;
        font-weight: 500;
        color: white;
    }
}
</style>
