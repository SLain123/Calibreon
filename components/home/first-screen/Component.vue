<template>
    <wrapper-global>
        <div class="first_container">
            <img
                src="img/first-preview.png"
                alt="preview"
                class="first_preview_img"
            />
            <div class="first_info_block">
                <h2 class="first_title">
                    <span>Grow with </span>
                    <span class="first_orange">Calibreon International</span>
                </h2>
                <h3 class="first_subtitle">
                    That thrives in the today’s digital landscape by elevating
                    your business to new heights. So, Choose Calibreon
                    International for premium back office support.
                </h3>
            </div>
        </div>
    </wrapper-global>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.first {
    &_container {
        display: flex;
        margin: 64px 0;
        color: $m-black;

        @include adaptive('tab-l') {
            margin: 36px 0;
        }

        @include adaptive('mob-l') {
            flex-direction: column;
            margin: 28px 0;
        }
    }

    &_preview_img {
        width: 50%;
        max-width: 576px;

        @include adaptive('tab-l') {
            width: 35%;
        }

        @include adaptive('mob-l') {
            width: 100%;
        }
    }

    &_info_block {
        width: 50%;
        display: flex;
        flex-direction: column;
        margin-left: 48px;

        @include adaptive('tab-l') {
            width: 65%;
        }

        @include adaptive('tab') {
            margin-left: 32px;
        }

        @include adaptive('mob-l') {
            width: 100%;
            margin-left: 0;
        }
    }

    &_title {
        margin-top: 64px;

        @include adaptive('tab-l') {
            margin-top: 32px;
        }

        @include adaptive('tab') {
            margin-top: 24px;
        }

        & span {
            font-size: 80px;
            font-style: normal;
            font-weight: 900;
            line-height: 83px;

            @include adaptive('tab') {
                font-size: 58px;
                line-height: 64px;
            }

            @include adaptive('mob-l') {
                font-size: 48px;
                line-height: 54px;
            }

            @include adaptive('mob') {
                font-size: 42px;
                line-height: 46px;
            }
        }
    }

    &_subtitle {
        margin-top: 32px;
        font-family: $hind;
        font-size: 16px;
        font-weight: 500;
        width: 80%;

        @include adaptive('tab') {
            width: 90%;
            margin-top: 24px;
        }

        @include adaptive('mob-l') {
            width: 100%;
            margin-top: 16px;
        }
    }

    &_orange {
        color: $m-orange;
    }
}
</style>
