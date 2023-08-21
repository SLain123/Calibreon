<script setup lang="ts">
import { TeamCardBlockType } from '@/types/Cards';

const props = defineProps<TeamCardBlockType>();

const isOpen = ref(false);

const moreBtnText = computed(() => (isOpen.value ? 'Hide all' : 'View all'));
const computedStaffList = computed(() =>
    isOpen.value ? props.staff : props.staff.slice(0, 3),
);

const toggleMore = () => (isOpen.value = !isOpen.value);
</script>

<template>
    <div class="t_card_block_container">
        <div class="t_card_block_head">
            <h3 class="t_card_block_title">{{ title }}</h3>

            <button
                type="button"
                class="t_card_block_more_btn"
                @click="toggleMore"
            >
                <span>{{ moreBtnText }}</span>
            </button>
        </div>

        <div class="t_card_block_content">
            <transition-group name="cards">
                <card-team
                    v-for="{
                        id,
                        photo,
                        name,
                        certified,
                        desc,
                    } of computedStaffList"
                    :key="id"
                    :id="id"
                    :photo="photo"
                    :name="name"
                    :certified="certified"
                    :desc="desc"
                />
            </transition-group>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.t_card_block {
    &_container {
        margin-bottom: 64px;
    }

    &_head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 32px 0;
    }

    &_title {
        color: $m-black;
        font-family: $hind;
        font-size: 32px;
        font-weight: 600;
        user-select: none;
    }

    &_more_btn {
        border: none;
        background-color: transparent;
        cursor: pointer;

        @include adaptive('mob-l') {
            display: none;
        }

        &:hover {
            opacity: 0.9;
        }

        & span {
            color: $m-black;
            font-family: $hind;
            font-size: 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
            white-space: nowrap;

            &:after {
                content: '';
                width: 14px;
                height: 24px;
                display: inline-block;
                margin-left: 16px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='24' viewBox='0 0 14 24' fill='none'%3E%3Cpath d='M11 10.5C10.1716 10.5 9.5 11.1716 9.5 12C9.5 12.8284 10.1716 13.5 11 13.5V10.5ZM13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z' fill='%23F05B25'/%3E%3C/svg%3E");
            }
        }
    }

    &_content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 32px;

        @include adaptive('tab-l') {
            grid-template-columns: 1fr 1fr;
        }

        @include adaptive('tab') {
            grid-gap: 16px;
        }

        @include adaptive('mob-l') {
            grid-template-columns: 1fr;
        }
    }
}

.cards-enter-active,
.cards-leave-active {
    transition: all 0.5s ease;
}

.cards-enter-from,
.cards-leave-to {
    transform: translateY(30px);
    opacity: 0;
}
</style>
