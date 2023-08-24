<template>
    <wrapper-global>
        <div class="quote_container">
            <quote class="quote_text"
                >“Our end-to-end freelancing services are designed to help you
                achieve your
                <span class="quote_orange"
                    >goals and exceed your expectations.</span
                >”
            </quote>
        </div>
    </wrapper-global>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.quote {
    &_container {
        margin: 120px auto;
        display: flex;
        justify-content: center;

        @include adaptive('mob-l') {
            margin: 48px auto;
        }
    }

    &_text {
        color: $m-black;
        max-width: 75%;
        text-align: center;
        font-size: 32px;
        font-weight: 900;
        line-height: 48px;

        @include adaptive('tab') {
            max-width: 95%;
        }

        @include adaptive('mob-l') {
            font-size: 24px;
            line-height: 36px;
            max-width: 100%;
        }
    }

    &_orange {
        color: $m-orange;
        font-size: 32px;
        font-weight: 900;
        line-height: 48px;

        @include adaptive('mob-l') {
            font-size: 24px;
            line-height: 36px;
        }
    }
}
</style>
