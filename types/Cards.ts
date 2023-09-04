export enum CardServiceMode {
    'left' = 'left',
    'right' = 'right',
    'compact' = 'compact',
}

export enum CardFounderMode {
    'staff' = 'staff',
    'founder' = 'founder',
}

export enum CardFounderPosition {
    'top' = 'top',
    'left' = 'left',
    'right' = 'right',
    'bottom' = 'bottom',
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

export type PersoneExperienceType = {
    id: number;
    post: string;
    company: string;
    start: string;
    end: string;
};

export type CardTeamType = {
    id: number;
    photo: string;
    name: string;
    certified?: string[];
    desc: string;
    skills?: { [key: string]: number };
    experience: PersoneExperienceType[];
};

export type TeamCardBlockType = {
    id: number;
    title: string;
    staff: CardTeamType[];
};

export type FounderCardType = {
    id: number;
    photo: string;
    name: string;
    certified?: string[];
    desc: string;
    mode?: CardFounderMode;
    position?: CardFounderPosition;
};
