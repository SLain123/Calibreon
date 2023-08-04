import { RegisterResponseType } from '@/types/Auth';

export const makeRegister = async (
    email: string,
    password: string,
    nickName: string,
): Promise<RegisterResponseType> => {
    const response = await fetch(
        'https://pink-fantastic-turtle.cyclic.app/api/auth/register',
        {
            method: 'POST',
            body: JSON.stringify({ email, password, nickName }),
            headers: { ['Content-Type']: 'application/json' },
        },
    );

    
    return response.json();
};
