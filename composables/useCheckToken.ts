import { useQuery } from '@tanstack/vue-query';
import { useAuthStore } from '@/stores/useAuthStore';
import { checkToken } from '@/services/auth/tokenCheck';

export const useCheckToken = () => {
    const storedToken = useCookie('token');
    const authStore = useAuthStore();

    const { suspense } = useQuery({
        queryKey: ['check-token'],
        queryFn: () => checkToken(storedToken.value),
    });
    onServerPrefetch(async () => {
        await suspense().then(
            ({ data }) => data?.validate && authStore.changeAuthStatus(true),
        );
    });
};
