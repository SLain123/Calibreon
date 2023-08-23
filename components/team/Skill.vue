<script setup lang="ts">
defineProps<{
    title: string;
    value: number;
}>();
</script>

<template>
    <div class="skill_container">
        <p class="skill_title">{{ title }}</p>
        <div class="skill_progress_outer">
            <div class="skill_progress_inner" :style="{ width: `${value}%` }" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.skill {
    &_container {
        margin-top: 24px;

        @include adaptive('mob-l') {
           margin-top: 16px;
        }
    }

    &_title {
        color: $m-black;
        font-family: $hind;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 12px;

        @include adaptive('mob-l') {
            font-size: 24px;
        }

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &_progress {
        &_outer {
            background-color: $m-black;
            width: 100%;
            margin-bottom: 16px;
        }

        &_inner {
            background-color: $m-orange;
            padding: 6px;
        }
    }
}
</style>
