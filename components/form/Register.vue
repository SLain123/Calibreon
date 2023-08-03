<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { email, required, minLength, maxLength } from '@vuelidate/validators';

type FormStateType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    terms: boolean;
};

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

const sendForm = () => {
    const registerData = {
        email: formState.email,
        password: formState.password,
        nickName: `${formState.firstName} ${formState.lastName}/${+new Date()}`,
    };

    console.log(registerData);
    emit('close');
};
</script>

<template>
    <form
        @submit.prevent="
            v$.$validate().then((isValid) => isValid && sendForm())
        "
    >
        <div class="form_row_block">
            <ui-input
                placeholder="First Name"
                v-model="formState.firstName"
                @blur="v$.firstName.$touch"
                :error="v$.firstName.$error"
                errorMessage="This required field must contain at least 2 chars"
            />
            <ui-input
                placeholder="Last Name"
                v-model="formState.lastName"
                @blur="v$.lastName.$touch"
                :error="v$.lastName.$error"
                errorMessage="This required field must contain at least 2 chars"
            />
        </div>

        <ui-input
            placeholder="Email Address"
            class="form_email"
            v-model="formState.email"
            @blur="v$.email.$touch"
            :error="v$.email.$error"
            errorMessage="This required field must contain valid email addr"
        />

        <div class="form_row_block">
            <ui-input
                placeholder="Password"
                v-model="formState.password"
                @blur="v$.password.$touch"
                :error="v$.password.$error"
                errorMessage="This required field must fill from 2 to 20 chars"
                type="password"
            />
            <ui-input
                placeholder="Repeat Password"
                v-model="formState.repeatPassword"
                @blur="v$.repeatPassword.$touch"
                :error="v$.repeatPassword.$error"
                errorMessage="This required field must contain the same value as password field"
                type="password"
            />
        </div>

        <ui-checkbox
            name="terms"
            text="By signing up, I agree to the terms of service and privacy policy."
            v-model="formState.terms"
            @change="v$.terms.$touch"
            :error="v$.terms.$error"
            exClass="form_checkbox"
        />

        <ui-submit-button text="Create Account" />
    </form>
</template>

<style lang="scss" scoped>
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
}
</style>
