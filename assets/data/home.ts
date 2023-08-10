import { CardServiceType, CardServiceMode, CardWorldType } from '@/types/Cards';

export const servicesData: CardServiceType[] = [
    {
        id: 0,
        imgSrc: 'assets/img/services/service-1.png',
        title: 'Accounting',
        bgColor: '#62C',
        mode: CardServiceMode.left,
        descList: ['Bookeeping', 'Accounting', 'Bookeeping', 'Accounting'],
    },
    {
        id: 1,
        imgSrc: 'assets/img/services/service-2.png',
        title: 'Film & TV',
        bgColor: '#282828',
        mode: CardServiceMode.right,
        descList: ['Short films', 'Advertisments', 'Photography', 'Editing'],
    },
    {
        id: 2,
        imgSrc: 'assets/img/services/service-3.png',
        title: 'Architecture',
        bgColor: '#7D1128',
        mode: CardServiceMode.left,
        descList: ['Bookeeping', 'Accounting', 'Bookeeping', 'Accounting'],
    },
];

export const worldData: CardWorldType[] = [
    {
        id: 0,
        text: "Razia has been a great resource, knowledgeable, communicative, open to suggestions and ready to bring her advice to improve the accounting processes and systems - it's important to mention her experience with Hong Kong accounting standards, her expertise with Xero, and her insight on E-commerce Dropshipping businesses is really commendable - looking forward to having her for a long term",
        brandImgSrc: 'assets/img/brands/brand-1.png',
    },
    {
        id: 1,
        text: 'Zahid is extremely hard working, very responsive, and provided quality work during his tenure. His efforts greatly assisted with the roll out of various initiatives. Additionally, he has a wide range of useful, applicable skills. I enjoyed working with Zahid.',
        brandImgSrc: 'assets/img/brands/brand-2.png',
    },
    {
        id: 2,
        text: 'He did a great job and work well with teams. He communicates well.Would highly recommended.',
        brandImgSrc: 'assets/img/brands/brand-3.png',
    },
];
