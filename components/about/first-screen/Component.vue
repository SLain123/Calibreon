<template>
    <div class="first_scr_container">
        <wrapper-global
            ><ui-main-header text="About Us" :underlineLenght="15" />

            <div class="first_scr_content">
                <div class="first_scr_info_block">
                    <h2 class="first_scr_title">
                        <span>Our Mission is </span>
                        <span class="first_scr_orange">Clear</span>
                    </h2>
                    <h3 class="first_scr_subtitle">
                        At CaliberOn, we're passionate about helping our clients
                        succeed. That's why we prioritize client satisfaction
                        and deliver exceptional work every time with our team of
                        professionals having access to a wide range of services,
                        from design and development to marketing and branding.
                    </h3>
                </div>
                <img
                    src="img/about-preview.png"
                    alt="preview"
                    class="first_scr_preview_img"
                />
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';

.first_scr {
    &_container {
        margin: 36px 0;

        @include adaptive('tab-l') {
            margin: 24px 0;
        }

        @include adaptive('tab') {
            margin-top: 0px;
        }
    }

    &_content {
        display: flex;
        color: $m-black;

        @include adaptive('mob-l') {
            flex-direction: column;
        }
    }

    &_preview_img {
        width: 50%;
        max-width: 535px;

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
        margin-right: 48px;

        @include adaptive('tab-l') {
            width: 65%;
        }

        @include adaptive('tab') {
            margin-right: 32px;
        }

        @include adaptive('mob-l') {
            width: 100%;
            margin-right: 0;
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
