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
        image: 'bromo',
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
    {
        slug: 'tumpaksewu-tour',
        image: 'tumpaksewu',
        title: 'Tumpaksewu Tour',
        description: 'Discover the beauty of Tumpaksewu Waterfalls with our Tumpaksewu Tour. We offer both group and private tours to this mesmerizing destination.',
        groupTour: {
            time: 'Every day serving Tumpaksewu Tour',
            include: ['Transport', 'Ticket Entrance', 'Mineral Water', 'Driver', 'Park and Fuel'],
            highlight: [
                'Using Transport with a maximum of 7 passengers',
                'Panorama Tumpaksewu Waterfalls',
                'Tumpaksewu Waterfalls',
                'Tetes Cave',
                'Telaga Biru',
            ],
            meetingPoint: ['Malang City'],
            price: {
                domestic: 350000,
                foreign: 700000,
            },
        },
        privateTour: {
            time: 'Every day serving Tumpaksewu Waterfall Trip',
            include: [
                'Transport',
                'Ticket Entrance',
                'Driver',
                'Mineral Water',
                'Local Guide',
                'Lunch',
                'Park and Fuel',
            ],
            highlight: [
                'Using Transport with a maximum of 6 passengers',
                'Panorama Tumpaksewu Waterfalls',
                'Tumpaksewu Waterfalls',
                'Tetes Cave',
                'Telaga Biru',
            ],
            meetingPoint: ['Malang City'],
            price: {
                1: { domestic: 1200000, foreign: 1500000 },
                2: { domestic: 600000, foreign: 750000 },
                3: { domestic: 450000, foreign: 650000 },
                4: { domestic: 400000, foreign: 550000 },
                5: { domestic: 350000, foreign: 450000 },
                6: { domestic: 300000, foreign: 400000 },
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit.',
            ],
        },
        itinerary: [
            { timeRange: '07.00 – 08.00', activity: 'Breakfast in the hotel and prepare for the trip' },
            { timeRange: '08.00 – 10.00', activity: 'Start driving to the Tumpaksewu Waterfalls' },
            { timeRange: '10.00 – 11.30', activity: 'Have lunch in the traditional resto and prepare (the traditional resto in the waterfalls area)' },
            { timeRange: '11.30 - 14.30', activity: 'Explore the Tumpaksewu waterfalls and enjoy the trip (Panorama Tumpaksewu Waterfalls, Tumpaksewu waterfalls, Tetes Cave, And Telaga Biru)' },
            { timeRange: '14.30 – 17.30', activity: 'Continue driving back to the Hotel in Malang City and end of the tour' },
        ],
    },
    {
        slug: 'ijen-blue-fire-tour',
        image: 'ijen-blue-fire',
        title: 'Ijen Blue Fire Tour',
        description: 'Experience the mesmerizing Ijen Blue Fire with our Ijen Blue Fire Tour. Choose between a Group Tour or a Private Tour for a personalized adventure.',
        groupTour: {
            time: 'Every day serving Ijen Tour',
            include: ['Transport', 'Ticket Entrance', 'Mineral Water', 'Driver', 'Park and Fuel'],
            highlight: [
                'Using Transport with a maximum of 7 passengers',
                'Ijen Pleatu',
                'Kawah Ijen',
            ],
            meetingPoint: ['Banyuwangi City'],
            price: {
                domestic: 400000,
                foreign: 700000,
            },
        },
        privateTour: {
            time: 'Every day serving Ijen Blue Fire Trip',
            include: [
                'Transport',
                'Ticket Entrance',
                'Driver',
                'Mineral Water',
                'Local Guide',
                'Park and Fuel',
            ],
            highlight: [
                'Using Transport with a maximum of 6 passengers',
                'Climb Ijen Volcano',
                'Blue Fire',
                'Sunrise in Ijen',
            ],
            meetingPoint: ['Banyuwangi City'],
            price: {
                1: { domestic: 1400000, foreign: 1700000 },
                2: { domestic: 700000, foreign: 900000 },
                3: { domestic: 550000, foreign: 650000 },
                4: { domestic: 400000, foreign: 550000 },
                5: { domestic: 350000, foreign: 450000 },
                6: { domestic: 300000, foreign: 400000 },
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit.',
            ],
        },
        itinerary: [
            { timeRange: '00.00', activity: 'Prepare and pick up in the meeting point/Your hotel' },
            { timeRange: '00.00 – 02.00', activity: 'Start driving to the Ijen Blue Fire' },
            { timeRange: '02.00 – 03.30', activity: 'Start trekking until reaching the lake' },
            { timeRange: '03.30 – 07.30', activity: 'Explore the Ijen Blue Fire and enjoy the trip (Sunrise in the Ijen, Blue Fire, and explore the volcano)' },
            { timeRange: '07.30 – 09.30', activity: 'Continue driving back to the Hotel in Banyuwangi and end of the tour' },
        ],
    }
];