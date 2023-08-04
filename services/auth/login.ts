import { LoginResponseType } from '@/types/Auth';

export const makeLogin = async (
    email: string,
    password: string,
): Promise<LoginResponseType> => {
    const response = await fetch(
        'https://pink-fantastic-turtle.cyclic.app/api/auth/login',
        {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { ['Content-Type']: 'application/json' },
        },
    );

    if (response.status === 404 || response.status === 500) {
        throw new Error('Something was wrong. Check internet connection');
    }

    return response.json();
};
