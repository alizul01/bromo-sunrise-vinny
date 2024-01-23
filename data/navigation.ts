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
        title: 'Tours',
        link: '/tours',
    },
    {
        title: 'About Us',
        link: '/about',
    },
    {
        title: 'Contact',
        link: '/contact',
    },
];

export default NAVIGATION_DATA;