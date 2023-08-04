<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { email, required, minLength, maxLength } from '@vuelidate/validators';
import { useMutation } from '@tanstack/vue-query';
import { makeRegister } from '@/services/auth/registration';

type FormStateType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    terms: boolean;
};

enum Messages {
    name = 'This required field must contain at least 2 chars',
    email = 'This required field must contain valid email addr',
    password = 'This required field must fill from 6 to 20 chars',
    repeat = 'This required field must contain the same value as password field',
    term = 'By signing up, I agree to the terms of service and privacy policy.',
}

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const formState: FormStateType = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    terms: false,
});
const rules = {
    firstName: { required, minLength: minLength(2) },
    lastName: { required, minLength: minLength(2) },
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(20) },
    repeatPassword: {
        required,
        checked: (val: string) => val === formState.password,
    },
    terms: {
        checked: (val: boolean) => val,
    },
};

const v$ = useVuelidate(rules, formState);
const { data, isLoading, error, mutateAsync } = useMutation({
    mutationKey: ['reg'],
    mutationFn: () =>
        makeRegister(
            formState.email,
            formState.password,
            `${formState.firstName} ${formState.lastName}/${+new Date()}`,
        ),
});

const sendForm = async () => {
    await mutateAsync();
    data?.value?.message &&
        setTimeout(() => {
            emit('close');
        }, 2000);
};
</script>

<template>
    <form
        @submit.prevent="
            v$.$validate().then((isValid) => {
                isValid && sendForm();
            })
        "
    >
        <div class="form_row_block">
            <ui-input
                placeholder="First Name"
                v-model="formState.firstName"
                @blur="v$.firstName.$touch"
                :error="v$.firstName.$error"
                :errorMessage="Messages.name"
                :disabled="isLoading"
            />
            <ui-input
                placeholder="Last Name"
                v-model="formState.lastName"
                @blur="v$.lastName.$touch"
                :error="v$.lastName.$error"
                :errorMessage="Messages.name"
                :disabled="isLoading"
            />
        </div>

        <ui-input
            placeholder="Email Address"
            class="form_email"
            v-model="formState.email"
            @blur="v$.email.$touch"
            :error="v$.email.$error"
            :errorMessage="Messages.email"
            :disabled="isLoading"
        />

        <div class="form_row_block">
            <ui-input
                placeholder="Password"
                v-model="formState.password"
                @blur="v$.password.$touch"
                :error="v$.password.$error"
                :errorMessage="Messages.password"
                type="password"
                :disabled="isLoading"
            />
            <ui-input
                placeholder="Repeat Password"
                v-model="formState.repeatPassword"
                @blur="v$.repeatPassword.$touch"
                :error="v$.repeatPassword.$error"
                :errorMessage="Messages.repeat"
                type="password"
                :disabled="isLoading"
            />
        </div>

        <ui-checkbox
            name="terms"
            :text="Messages.term"
            v-model="formState.terms"
            @change="v$.terms.$touch"
            :error="v$.terms.$error"
            exClass="form_checkbox"
            :disabled="isLoading"
        />

        <div class="form_result_block">
            <div v-if="data?.errors?.length" class="form_error_block">
                <span
                    v-for="err of data?.errors"
                    :key="err.msg"
                    class="form_error_message"
                >
                    {{ err.msg }}
                </span>
            </div>

            <span v-if="error" class="form_error_message">{{ error }}</span>

            <span class="form_result_message" v-if="data?.message">
                {{ data.message }}
            </span>
        </div>

        <ui-submit-button text="Create Account" :loading="isLoading" />
    </form>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
.form {
    &_row_block {
        display: flex;
        justify-content: space-between;
        gap: 42px;
    }

    &_email {
        box-sizing: border-box;
        margin: 32px 0;
    }

    &_checkbox {
        margin: 36px 0;
    }

    &_result {
        &_block {
            display: flex;
            justify-content: center;
        }

        &_message {
            color: $m-black;
        }
    }

    &_error {
        &_message {
            color: $m-red;
        }
    }
}
</style>
