interface TourPrice {
    domestic: number;
    foreign: number;
}

interface TourCommon {
    time: string;
    include: string[];
    highlight: string[];
    meetingPoint: string[];
}

interface PrivateTour extends TourCommon {
    price: Record<number, TourPrice>;
    additionalRequests: string[];
}

interface GroupTour extends TourCommon {
    price: TourPrice;
}

interface ItineraryStep {
    timeRange: string;
    activity: string;
}

interface TourData {
    slug: string;
    image: string;
    title: string;
    description: string;
    groupTour: GroupTour;
    privateTour: PrivateTour;
    itinerary: ItineraryStep[];
}

export const TOUR_DATA: TourData[] = [
    {
        slug: 'bromo-tour',
        image: 'bromo.png',
        title: 'Bromo Tour',
        description: 'Explore the breathtaking Bromo Tengger Semeru National Park with our Bromo Tour. We offer both group and private tours to Bromo.',
        groupTour: {
            time: 'Setiap hari',
            include: ['Jeep', 'Ticket Entrance', 'Bromo Tour'],
            highlight: ['Menggunakan Jeep 4x4 dengan maksimal 6 orang penumpang', 'Mount Bromo', 'Savana Teletubies', 'Bromo Sunrise', 'Pasir Berbisik'],
            meetingPoint: ['Malang city'],
            price: {
                domestic: 350000,
                foreign: 700000,
            },
        },
        privateTour: {
            time: 'Every day serving Bromo Tour',
            include: ['Jeep', 'Ticket Entrance', 'Driver', 'Mineral Water', 'Fuel'],
            highlight: [
                'Using Jeep 4x4 with a maximum of 6 passengers',
                'Mount Bromo',
                'Bromo Sunrise',
                'Savana Teletubies',
                'Sand Sea',
            ],
            meetingPoint: ['Malang City', 'Surabaya City'],
            price: {
                1: { domestic: 1400000, foreign: 1700000 },
                2: { domestic: 700000, foreign: 900000 },
                3: { domestic: 475000, foreign: 850000 },
                4: { domestic: 400000, foreign: 700000 },
                5: { domestic: 350000, foreign: 600000 },
                6: { domestic: 300000, foreign: 500000 },
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit (Madakaripura Waterfall, Pelangi Waterfall, Bromo Hillside Café)',
            ],
        },
        itinerary: [
            { timeRange: '00.00 – 03.00', activity: 'Drive to Penanjakan/Kingkong Hill/Prahu Hill' },
            { timeRange: '03.00 – 06.00', activity: 'Explore Bromo Sunrise area' },
            { timeRange: '06.00 – 06.30', activity: 'Drive to Love Hill and explore' },
            { timeRange: '06.30 – 07.30', activity: 'Drive to Widodaren Mt and explore' },
            { timeRange: '07.30 – 10.00', activity: 'Drive to Bromo Mt and explore' },
            { timeRange: '10.00 – 12.00', activity: 'Drive to Sand Sea and Savannah (exploring the Sand sea and Savannah)' },
            { timeRange: '12.00 – 14.00', activity: 'Drive back to hotel and end of the tour' },
        ],
    },
];