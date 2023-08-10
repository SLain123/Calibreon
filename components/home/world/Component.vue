<script setup lang="ts">
import { worldData } from '@/assets/data/home';
</script>

<template>
    <div class="world_container">
        <h2 class="world_title">Testimonial:</h2>
        <h3 class="world_subtitle">
            Find out why we're the top choice - read what our customers have to
            say! Our testimonials reflect the high level of customer
            satisfaction we strive for, and we're confident that you'll see why
            our clients keep coming back for more
        </h3>

        <div class="world_map_block">
            <card-world
                v-for="{ id, text, brandImgSrc } of worldData"
                :key="id"
                :id="id"
                :text="text"
                :brandImgSrc="brandImgSrc"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
