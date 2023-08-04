<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { email, required, minLength, maxLength } from '@vuelidate/validators';
import { useMutation } from '@tanstack/vue-query';
import { makeLogin } from '@/services/auth/login';
import { useAuthStore } from '@/stores/useAuthStore';

type FormStateType = {
    email: string;
    password: string;
};

enum Messages {
    email = 'This required field must contain valid email addr',
    password = 'This required field must fill from 6 to 20 chars',
}

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const formState: FormStateType = reactive({
    email: '',
    password: '',
});
const rules = {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(20) },
};

const v$ = useVuelidate(rules, formState);
const authStore = useAuthStore();
const storedToken = useCookie('token', { maxAge: 1814400 }); //3 weeks;
const { data, isLoading, error, mutateAsync } = useMutation({
    mutationFn: () => makeLogin(formState.email, formState.password),
});

const sendForm = async () => {
    await mutateAsync();

    if (data?.value?.token && data?.value?.userId) {
        storedToken.value = data.value.token;
        authStore.changeAuthStatus(true);
        authStore.changeUserId(data.value.userId);

        setTimeout(() => {
            emit('close');
        }, 2000);
    }
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
        <ui-input
            placeholder="Email Address"
            class="form_row"
            v-model="formState.email"
            @blur="v$.email.$touch"
            :error="v$.email.$error"
            :errorMessage="Messages.email"
            :disabled="isLoading"
        />
        <ui-input
            placeholder="Password"
            class="form_row"
            v-model="formState.password"
            @blur="v$.password.$touch"
            :error="v$.password.$error"
            :errorMessage="Messages.password"
            :disabled="isLoading"
            type="password"
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

        <ui-submit-button text="Login" :loading="isLoading" />
    </form>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
.form {
    &_row {
        box-sizing: border-box;
        margin: 32px 0;
        min-width: 400px;
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
            font-size: 14px;
        }
    }
}
</style>
