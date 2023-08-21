import { TeamCardBlockType } from '@/types/Cards';

const photo = 'assets/img/staff-photo.png';
const desc =
    'Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed.';

const mandy = {
    id: 0,
    photo,
    name: 'Mandy',
    certified: ['Quickbook certified'],
    desc,
};
const grag = {
    id: 1,
    photo,
    name: 'Grag',
    certified: ['Quickbook certified', 'HR certified'],
    desc,
};
const john = {
    id: 2,
    photo,
    name: 'John',
    certified: ['HR certified', 'Best solution certified'],
    desc,
};
const barbara = {
    id: 3,
    photo,
    name: 'Barbara',
    desc,
};
const ken = {
    id: 4,
    photo,
    name: 'Ken',
    certified: ['Quickbook certified'],
    desc,
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
