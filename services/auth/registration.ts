import { RegisterResponseType } from '@/types/Auth';

export const makeRegister = async (
    email: string,
    password: string,
    nickName: string,
): Promise<RegisterResponseType> => {
    const config = useRuntimeConfig();

    const response = await fetch(`${config.public.baseUrl}/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify({ email, password, nickName }),
        headers: { ['Content-Type']: 'application/json' },
    });

    if (response.status === 404 || response.status === 500) {
        throw new Error('Something was wrong. Check internet connection');
    }

    return response.json();
};
