<template>
    <div class="wrapper_global"><slot /></div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/mixin.scss';
.wrapper_global {
    max-width: 1278px;
    padding: 0 81px;
    margin: 0 auto;

    @include adaptive('desk') {
        padding: 0 32px;
    }

    @include adaptive('tab-l') {
        padding: 0 24px;
    }

    @include adaptive('mob-l') {
        padding: 0 16px;
    }

    @include adaptive('mob-m') {
        padding: 0 12px;
    }
}
</style>
