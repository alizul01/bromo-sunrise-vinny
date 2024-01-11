export type Navigation = {
    title: string;
    link: string;
    children?: Navigation[];
}

const NAVIGATION_DATA: Navigation[] = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Destinations and Tours',
        link: '/tour',
    },
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Contact Us',
        link: '/contact',
    },
];

export default NAVIGATION_DATA;