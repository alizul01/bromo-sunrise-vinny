export interface Testimonial {
    id: number;
    content: string;
    rating: number;
    name: string;
    position: string;
    imageUrl: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Temporibus autem quibusdam et aut officiis debitis",
        rating: 5,
        name: 'John Doe',
        position: 'CEO of PT Cinta Sejati',
        imageUrl: "http://placehold.it/500x500",
    },
];

export default TESTIMONIALS_DATA;