<script setup lang="ts">
import { PersoneExperienceType } from '@/types/Cards';

defineProps<PersoneExperienceType>();
</script>

<template>
    <div class="exp_container">
        <p class="exp_title">Worked as {{ post }} at {{ company }}</p>
        <p class="exp_dates">{{ start }} - {{ end }}</p>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.exp {
    &_container {
        margin-top: 32px;

        @include adaptive('mob-l') {
            margin-top: 24px;
        }
    }

    &_title {
        color: $m-black;
        font-family: $hind;
        font-size: 32px;
        font-weight: 400;
        border-bottom: 2px solid $m-orange;
        display: inline-block;

        @include adaptive('mob-l') {
            font-size: 24px;
        }
    }

    &_dates {
        color: $m-orange;
        font-family: $hind;
        font-size: 32px;
        font-weight: 600;

        @include adaptive('mob-l') {
            font-size: 24px;
        }
    }
}
</style>
