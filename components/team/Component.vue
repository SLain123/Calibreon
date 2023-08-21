<script setup lang="ts">
import { teamData } from '@/assets/data/team';
</script>

<template>
    <div class="team_container">
        <wrapper-global>
            <ui-main-header text="Team" />

            <team-card-block
                v-for="{ id, title, staff } of teamData"
                :key="id"
                :id="id"
                :title="title"
                :staff="staff"
            />
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.team {
    &_container {
        margin: 36px 0;

        @include adaptive('tab-l') {
            margin: 24px 0;
        }

        @include adaptive('tab') {
            margin-top: 0px;
        }
    }
}
</style>
