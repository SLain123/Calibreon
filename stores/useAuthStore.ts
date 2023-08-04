import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({ isAuth: false }),
    actions: {
        changeAuthStatus(status: boolean) {
            this.isAuth = status;
        },
    },
});
