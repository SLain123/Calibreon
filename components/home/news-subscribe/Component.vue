<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { email, required, minLength, maxLength } from '@vuelidate/validators';

type FormStateType = {
    email: string;
};

enum Messages {
    email = 'This required field must contain valid email addr',
}

const inputStyle = {
    padding: '8px 4px',
    'border-color': '#f05b25',
};

const formState: FormStateType = reactive({
    email: '',
});
const rules = {
    email: { required, email },
};

const v$ = useVuelidate(rules, formState);

const sendForm = (reset: () => void) => {
    console.log(formState.email);
    formState.email = '';
    reset();
};
</script>

<template>
    <div class="news_container">
        <wrapper-global>
            <div class="news_content">
                <div class="news_info_block">
                    <h3 class="news_info_title">
                        <span class="orange">News letter </span>
                        <span>Join us</span>
                    </h3>
                    <p class="news_info_subtitle">
                        Lorem ipsum dolor sit amet consectetur. Sem ut
                        pellentesque aliquam eget. Purus id faucibus mollis
                        viverra viverra odio tempus tempor ut. Amet lectus in
                        bibendum sed.
                    </p>
                    <form
                        @submit.prevent="
                            v$.$validate().then(
                                (isValid) => isValid && sendForm(v$.$reset),
                            )
                        "
                        class="news_subscribe_block"
                    >
                        <ui-input
                            placeholder="Email Address"
                            v-model="formState.email"
                            class="news_subscribe_input_wrap"
                            :inputStyle="inputStyle"
                            @blur="v$.email.$touch"
                            :error="v$.email.$error"
                            :errorMessage="Messages.email"
                        />
                        <ui-button
                            text="Subscribe"
                            class="news_subscribe_btn"
                        />
                    </form>
                </div>

                <img
                    src="@/assets/img/subscribe-preview.png"
                    alt="news"
                    :width="629"
                    :height="347"
                />
            </div>
        </wrapper-global>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/mixin.scss';
.news {
    &_container {
        margin: 112px 0;
    }

    &_content {
        display: flex;
    }

    &_info {
        &_block {
            display: flex;
            flex-direction: column;
            width: 60%;
            margin-right: 24px;
        }

        &_title {
            width: 75%;
            margin-bottom: 16px;

            & span {
                font-size: 64px;
                font-weight: 700;
                line-height: 57px;
                color: $m-black;
            }
        }

        &_subtitle {
            font-family: $hind;
            font-size: 16px;
            color: $m-black;
            font-weight: 500;
            width: 75%;
            margin-bottom: 16px;
        }
    }

    &_subscribe {
        &_block {
            display: flex;
            align-items: center;
        }

        &_input_wrap {
            margin-right: 24px;
        }

        &_btn {
            margin: 0;
            padding: 8px 42px;
            align-self: flex-start;
        }
    }
}

span.orange {
    color: $m-orange;
}
</style>
