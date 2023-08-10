<script setup lang="ts">
import { CardWorldType } from '@/types/Cards';

defineProps<CardWorldType>();
</script>

<template>
    <div class="w-card_container">
        <p class="w-card_text">{{ text }}</p>
        <img :src="brandImgSrc" alt="brand" />
    </div>
</template>

<style lang="scss" scoped></style>
