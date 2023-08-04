import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({ isAuth: false, userId: '' }),
    actions: {
        changeAuthStatus(status: boolean) {
            this.isAuth = status;
        },
        changeUserId(id: string) {
            this.userId = id;
        },
    },
});
