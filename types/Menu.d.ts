export type MenuType = {
    id: number;
    title: string;
    href: string;
    children?: MenuType[];
};

type ContactType = { text: string; value: string };

export type FooterMenuType = {
    menu: MenuType[];
    uLinks: MenuType[];
    contacts: {
        email: ContactType;
        addr: ContactType;
        area: string;
        city: string;
    };
};
