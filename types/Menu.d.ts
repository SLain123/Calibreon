export type MenuType = {
    id: number;
    title: string;
    href: string;
    children?: MenuType[];
};
