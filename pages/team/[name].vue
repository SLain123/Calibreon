<script setup lang="ts">
import { Staff } from '@/assets/data/team';

const route = useRoute();
const personName = route.params.name as string | Staff;
</script>

<template>
    <team-person-component :currentName="personName" />
</template>
