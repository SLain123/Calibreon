<script setup lang="ts">
import { blogData } from '@/assets/data/blog';
import { CardBlogType } from '@/types/Cards';

const leftBlock: CardBlogType[] = [];
const rightBlock: CardBlogType[] = [];

blogData.forEach((data, indx) =>
    indx % 2 === 0 ? leftBlock.push(data) : rightBlock.push(data),
);
</script>

<template>
    <div class="blog_container">
        <wrapper-global>
            <ui-main-header text="Blogs" :underlineLenght="150" />
            <div class="blog_card_block">
                <div class="blog_card_col">
                    <card-blog
                        v-for="{
                            id,
                            logo,
                            title,
                            author,
                            text,
                            isOpen,
                        } of leftBlock"
                        :key="id"
                        :id="id"
                        :logo="logo"
                        :title="title"
                        :author="author"
                        :text="text"
                        :isOpen="isOpen"
                    />
                </div>
                <div class="blog_card_col">
                    <card-blog
                        v-for="{
                            id,
                            logo,
                            title,
                            author,
                            text,
                            isOpen,
                        } of rightBlock"
                        :key="id"
                        :id="id"
                        :logo="logo"
                        :title="title"
                        :author="author"
                        :text="text"
                        :isOpen="isOpen"
                    />
                </div>
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.blog {
    &_container {
        margin: 36px 0;

        @include adaptive('tab-l') {
            margin: 24px 0;
        }

        @include adaptive('tab') {
            margin-top: 0px;
        }
    }

    &_card_block {
        margin-top: 16px;
        display: flex;
        gap: 64px;

        @include adaptive('tab-l') {
            gap: 32px;
        }

        @include adaptive('tab') {
            flex-direction: column;
        }
    }

    &_card_col {
        max-width: 47%;

        @include adaptive('tab') {
            max-width: 100%;
        }
    }
}
</style>
