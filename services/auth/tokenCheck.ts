import { CheckTokenResponseType } from '@/types/Auth';

export const checkToken = async (
    token?: string | null,
): Promise<CheckTokenResponseType> => {
    const config = useRuntimeConfig();

    if (!token) {
        return { validate: false, message: 'Have no token' };
    }

    const response = await fetch(`${config.public.baseUrl}/api/auth/check`, {
        method: 'GET',
        headers: { ['Content-Type']: 'application/json', authorization: token },
    });

    if (response.status === 404 || response.status === 500) {
        throw new Error('Something was wrong. Check internet connection');
    }

    return response.json();
};
