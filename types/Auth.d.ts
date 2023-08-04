export type RegisterResponseType = {
    message?: string;
    errors?: { msg: string; param: string; location: string }[];
};

export type LoginResponseType = {
    token?: string;
    userId?: string;
    errors?: { msg: string; param: string; location: string }[];
    message?: string;
};
