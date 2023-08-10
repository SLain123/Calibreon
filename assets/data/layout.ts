import { MenuType, FooterMenuType } from 'types/Menu';

export const menuData: MenuType[] = [
    {
        id: 0,
        title: 'Services',
        href: '/services',
        children: [
            { id: 10, title: 'Accounting', href: '/services/accouting' },
            { id: 11, title: 'E-commerce', href: '/services/commerce' },
            { id: 12, title: 'Animation', href: '/services/animation' },
            { id: 13, title: 'Film & TV', href: '/services/film' },
            { id: 14, title: 'Web development', href: '/services/web-dev' },
            { id: 15, title: 'Human Resources', href: '/services/human-resc' },
            { id: 16, title: 'Architecture', href: '/services/arch' },
        ],
    },
    { id: 1, title: 'About us', href: '/about' },
    { id: 2, title: 'Home', href: '/' },
    { id: 3, title: 'Team', href: '/team' },
    { id: 4, title: 'Blogs', href: '/blogs' },
];

export const footerData: FooterMenuType = {
    menu: menuData,
    uLinks: [
        { id: 100, title: 'Terms of Service', href: '#' },
        { id: 101, title: 'Privacy Policy', href: '#' },
        { id: 102, title: 'FAQ', href: '#' },
    ],
    contacts: {
        email: { text: 'Contact@Test.Io', value: 'sl163@yandex.ru' },
        addr: {
            text: 'Xyz, Block / Street',
            value: 'https://maps.google.com?saddr=Current+Location&daddr=43.12345,-76.12345',
        },
        area: 'Area xyz',
        city: 'City xyz',
    },
};
