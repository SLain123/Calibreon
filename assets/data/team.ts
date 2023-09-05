import { TeamCardBlockType, CardTeamType } from '@/types/Cards';

const photo = 'staff-photo.png';
const desc =
    'Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed.';
const skilsMax = { management: 85, development: 96, communication: 64 };
const skilsMin = { management: 98, development: 64, communication: 68 };
const experienceMax = [
    {
        id: 0,
        post: 'accountant',
        company: 'XYZ',
        start: 'November 2008',
        end: '2010',
    },
    {
        id: 1,
        post: 'developer',
        company: 'XYZ',
        start: 'November 2010',
        end: '2014',
    },
    {
        id: 2,
        post: 'SEO',
        company: 'XYZ',
        start: 'December 2014',
        end: 'Present',
    },
];
const experienceMin = [
    {
        id: 0,
        post: 'accountant',
        company: 'XYZ',
        start: 'November 2008',
        end: 'Present',
    },
];

const mandy = {
    id: 0,
    photo,
    name: 'Mandy',
    certified: ['Quickbook certified'],
    desc,
    skills: skilsMax,
    experience: experienceMin,
};
const grag = {
    id: 1,
    photo,
    name: 'Grag',
    certified: ['Quickbook certified', 'HR certified'],
    desc,
    skills: skilsMin,
    experience: experienceMax,
};
const john = {
    id: 2,
    photo,
    name: 'John',
    certified: ['HR certified', 'Best solution certified'],
    desc,
    skills: skilsMax,
    experience: experienceMax,
};
const barbara = {
    id: 3,
    photo,
    name: 'Barbara',
    desc,
    skills: skilsMin,
    experience: [],
};
const ken = {
    id: 4,
    photo,
    name: 'Ken',
    certified: ['Quickbook certified'],
    desc,
    skills: skilsMin,
    experience: experienceMin,
};
const unExist = {
    id: 666,
    photo: '',
    name: '',
    desc: '',
    experience: [],
};

export const teamData: TeamCardBlockType[] = [
    {
        id: 0,
        title: 'Bookeeping & Accounts',
        staff: [mandy, grag, john, barbara, ken],
    },
    {
        id: 1,
        title: 'Amazon FBA & Digital Marketing',
        staff: [ken, mandy, barbara, john, grag],
    },
    {
        id: 2,
        title: 'Film & TV',
        staff: [barbara, ken, grag, mandy, john],
    },
    {
        id: 3,
        title: 'Architecture',
        staff: [grag, john, ken, barbara, mandy],
    },
    {
        id: 4,
        title: 'Human Resources',
        staff: [john, mandy, barbara, ken, grag],
    },
];

export enum Staff {
    Mandy = 'Mandy',
    Grag = 'Grag',
    John = 'John',
    Barbara = 'Barbara',
    Ken = 'Ken',
}

export const getPersonInfo = (name: Staff | string): CardTeamType => {
    switch (name) {
        case Staff.Mandy:
            return mandy;
        case Staff.Grag:
            return grag;
        case Staff.John:
            return john;
        case Staff.Barbara:
            return barbara;
        case Staff.Ken:
            return ken;
        default:
            return unExist;
    }
};
