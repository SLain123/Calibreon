export enum CardServiceMode {
    'left' = 'left',
    'right' = 'right',
}

export type CardServiceType = {
    id: number;
    imgSrc: string;
    title: string;
    descList: string[];
    bgColor?: string;
    mode?: CardServiceMode;
};

export type CardWorldType = {
    id: number;
    text: string;
    brandImgSrc: string;
};

export type CardBlogType = {
    id: number;
    logo: string;
    title: string;
    author: string;
    text: string;
    isOpen?: boolean;
};
