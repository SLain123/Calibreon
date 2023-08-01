<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { email, required, minLength } from '@vuelidate/validators';
type FormStateType = {
    firstName: string;
    lastName: string;
    email: string;
};

const formState: FormStateType = reactive({
    firstName: '',
    lastName: '',
    email: '',
});
const rules = {
    firstName: { required, minLength: minLength(2) },
    lastName: { required, minLength: minLength(2) },
    email: { required, email },
};

const v$ = useVuelidate(rules, formState);

const sendForm = () => {
    console.log(v$, formState);
};
</script>

<template>
    <form
        @submit.prevent="
            v$.$validate().then((isValid) => isValid && sendForm())
        "
    >
        <div class="form_fio_block">
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

        <ui-submit-button text="Create Account" />
    </form>
</template>

<style lang="scss" scoped>
.form {
    &_fio_block {
        display: flex;
        justify-content: space-between;
        gap: 42px;
        max-width: 560px;
    }

    &_email {
        max-width: 560px;
        box-sizing: border-box;
        margin-top: 32px;
    }
}
</style>
