<script lang="ts" setup>
import { getPersonInfo, Staff } from '@/assets/data/team';

const props = defineProps<{ currentName: Staff | string }>();
const person = getPersonInfo(props.currentName);
const { name, certified, desc, skills, experience } = person;
</script>

<template>
    <div class="person_container">
        <wrapper-global>
            <ui-main-header text="Team" />

            <div class="person_exists" v-if="name">
                <div class="person_content">
                    <img
                        src="img/staff-photo.png"
                        :alt="name"
                        :width="306"
                        :height="306"
                    />

                    <div class="person_info_block">
                        <p class="person_name">{{ name }}</p>
                        <div
                            class="person_certified_block"
                            v-if="certified?.length"
                        >
                            <p
                                v-for="cert of certified"
                                :key="cert"
                                class="person_certified_text"
                            >
                                {{ cert }}
                            </p>
                        </div>
                        <p class="person_desc">{{ desc }}</p>
                    </div>
                </div>

                <div class="person_extra_block">
                    <div class="person_skills_block" v-if="skills">
                        <p class="person_name">Skills</p>
                        <div v-for="(value, name) in skills" :key="name">
                            <team-skill :title="String(name)" :value="+value" />
                        </div>
                    </div>
                    <div class="person_exp_block" v-if="experience?.length">
                        <p class="person_name">Experience</p>
                        <div
                            v-for="{
                                id,
                                post,
                                company,
                                start,
                                end,
                            } of experience"
                            :key="id"
                        >
                            <team-experience
                                :id="id"
                                :post="post"
                                :company="company"
                                :start="start"
                                :end="end"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="person_unknown_message" v-if="!name">
                The link is incorrect or the employee you specified was not
                found
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.person {
    &_container {
        margin: 36px 0;

        @include adaptive('tab-l') {
            margin: 24px 0;
        }

        @include adaptive('tab') {
            margin-top: 0px;
        }
    }

    &_content {
        display: flex;
        align-items: center;
        margin-top: 42px;

        @include adaptive('mob-l') {
            flex-direction: column;
        }
    }

    &_info_block {
        margin-left: 42px;

        @include adaptive('tab') {
            margin-left: 16px;
            margin-left: 0;
        }
    }

    &_name {
        color: $m-black;
        font-size: 46px;
        font-weight: 700;
        line-height: 70px;
        letter-spacing: -1.06px;

        @include adaptive('mob-l') {
            text-align: center;
            font-size: 36px;
            line-height: 60px;
        }
    }

    &_certified {
        &_block {
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        &_text {
            color: $m-black;
            font-size: 20px;
            font-style: italic;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: -0.46px;

            @include adaptive('mob-l') {
                text-align: center;
            }

            &:after {
                content: '';
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-left: 8px;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHQSURBVHgBhZLNS1RRGMaf894zHwrNjYaGFlqgRBEVRIvECMKF1iLEjIii7wiKQNwWJPQH1KJlEbmZRQZ9CEYKQW7ahBWJ4heOjAM6iqMzo9dz58y5zj1yR9QZfVbvec7zeznnvAcooaeTdlvjX7HQ8F/OPxkTHaUyzCvexK3z/ZbvtmnA/JxULQ7R+obj4EyljGZA4s4BfLsRCXQVwdeT2YvvUoGeZI5hJ+0hhZsR1fjsULBPt/2Z5Q92g1xlFKF3Xj1yaw0Kh0S5cJUfaApvrMMBMjXYmRDNMUmXykEfjhLe1hqoC9ram7aNhi8z1kN2ZTg3+ivNDnvBkxUKPUtUhA4GGXpnLbTFuT6qqyN+meSxbK4W8GvjZQ1QH/LhVVyidb+hob45sQnSV2MUoVOmv98z2scVplcdtFfzDWiKNkGu9nH8oWP5zN3jFc6CayQkoXVIavhTYgX3JxjSW6C9LB+7Hs5f1jNoHhSdv5eNW95mdcBBwlJQZGx7sNOV8vvXE8ELul09t9+7w/UUF6wkFCpY96p41K2LU++ak9eiha8W4oQfi+qqWh8xWCHREna6R9IyVWf6Pr6o4d0op8cjVse5Ads6+y+XahqwnpfKrAEY8bPdeGWp8gAAAABJRU5ErkJggg==');
            }
        }
    }

    &_desc {
        color: $m-black;
        font-family: $hind;
        font-size: 16px;
        font-weight: 500;
    }

    &_extra_block {
        display: flex;
        margin-top: 52px;
        gap: 10%;

        @include adaptive('tab') {
            flex-direction: column;
        }

        @include adaptive('mob-l') {
            margin-top: 24px;
        }
    }

    &_skills_block {
        width: 45%;

        @include adaptive('tab') {
            width: 100%;
            margin-bottom: 48px;
        }

        @include adaptive('mob-l') {
            margin-bottom: 24px;
        }
    }

    &_exp_block {
        width: 45%;

        @include adaptive('tab') {
            width: 100%;
        }
    }

    &_unknown_message {
        margin-top: 42px;
        color: $m-black;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.46px;
    }
}
</style>
