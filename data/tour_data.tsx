import React from "react";
import {BsFillCarFrontFill, BsFillFileTextFill, BsScrewdriver} from "react-icons/bs";
import {FaBus, FaCompass, FaFire, FaGasPump, FaMountain, FaUmbrellaBeach, FaUserAlt, FaUtensils} from "react-icons/fa";
import {FaBottleWater, FaPanorama} from "react-icons/fa6";
import {PiJeepBold} from "react-icons/pi";
import {TbBeach, TbMountain} from "react-icons/tb";
import {Sunrise} from "lucide-react";
import {GiMountainCave, GiMountainClimbing, GiRiver, GiWaterfall} from "react-icons/gi";
import {LiaSnowflake} from "react-icons/lia";

interface TourPrice {
    domestic: number;
    foreign: number;
}

interface TourCommon {
    time: string;
    include: { name: string; icon: React.ReactNode }[];
    highlight: {
        name: string;
        icon?: React.ReactNode;
    }[];
    meetingPoint: string[];
}

export interface PrivateTour extends TourCommon {
    price: {
        domestic: number[];
        foreign: number[];
    };
    additionalRequests: string[];
}

interface GroupTour extends TourCommon {
    price: TourPrice;
}

interface ItineraryStep {
    timeRange: string;
    activity: string;
}

export interface TourData {
    slug: string;
    image: string;
    title: string;
    description: string;
    groupTour: GroupTour;
    privateTour: PrivateTour;
    itinerary: ItineraryStep[];
    requirements?: string[];
    childrenCategory?: string;
    exclude?: string[];
    paymentMethods?: string[];
}

export const TOUR_DATA: TourData[] = [
    {
        slug: 'bromo-tour',
        image: 'bromo',
        title: 'Bromo Tour',
        description: 'Explore the breathtaking Bromo Tengger Semeru National Park with our Bromo Tour. We offer both group and private tours to Bromo.',
        groupTour: {
            time: 'Setiap hari',
            include: [
                {name: 'Jeep', icon: <PiJeepBold/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Bromo Tour', icon: <FaMountain/>},
            ],
            highlight: [
                {name: 'Using Jeep 4x4 with maximum 6 passenger', icon: <BsFillCarFrontFill/>},
                {name: 'Bromo Mount', icon: <FaMountain/>},
                {name: 'Savana Teletubies', icon: <TbMountain/>},
                {name: 'Bromo Sunrise', icon: <Sunrise/>},
                {name: 'Whisper Sand', icon: <TbBeach/>},
            ],
            meetingPoint: ['Malang city'],
            price: {
                domestic: 350000,
                foreign: 700000,
            },
        },
        privateTour: {
            time: 'Every day serving Bromo Tour',
            include: [
                {name: 'Jeep', icon: <BsFillCarFrontFill/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Driver', icon: <FaUserAlt/>},
                {name: 'Mineral Water', icon: <FaBottleWater/>},
                {name: 'Fuel', icon: <FaGasPump/>},
            ],
            highlight: [
                {name: 'Using Jeep 4x4 with maximum 6 passenger', icon: <BsFillCarFrontFill/>},
                {name: 'Bromo Mount', icon: <FaMountain/>},
                {name: 'Savana Teletubies', icon: <TbMountain/>},
                {name: 'Bromo Sunrise', icon: <Sunrise/>},
                {name: 'Sand Sea', icon: <FaUmbrellaBeach/>},
            ],
            meetingPoint: ['Malang City', 'Surabaya City'],
            price: {
                domestic: [1400000, 700000, 475000, 400000, 350000, 300000],
                foreign: [1700000, 900000, 850000, 700000, 600000, 500000],
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit (Madakaripura Waterfall, Pelangi Waterfall, Bromo Hillside Café)',
            ],
        },
        itinerary: [
            {timeRange: '00.00 – 03.00', activity: 'Drive to Penanjakan/Kingkong Hill/Prahu Hill'},
            {timeRange: '03.00 – 06.00', activity: 'Explore Bromo Sunrise area'},
            {timeRange: '06.00 – 06.30', activity: 'Drive to Love Hill and explore'},
            {timeRange: '06.30 – 07.30', activity: 'Drive to Widodaren Mt and explore'},
            {timeRange: '07.30 – 10.00', activity: 'Drive to Bromo Mt and explore'},
            {
                timeRange: '10.00 – 12.00',
                activity: 'Drive to Sand Sea and Savannah (exploring the Sand sea and Savannah)'
            },
            {timeRange: '12.00 – 14.00', activity: 'Drive back to hotel and end of the tour'},
        ],
        requirements: [
            'Wool hat',
            'Mask',
            'Warm Clothes',
            'Gloves',
            'Long Pants',
            'Flashlight',
            'Sunglasses',
        ],
        childrenCategory: 'Anak-anak umur dibawah 3 tahun Free',
        exclude: [
            'Airplane/Train from and to passenger region',
            'Airport Tax',
            'Personal expenses during the tour (laundry, mini bar, etc.)',
            'Driver / Guide Tipping (Voluntary)',
            'Costs for other activities outside the itinerary',
        ],
        paymentMethods: ['Transfer', 'Cash'],
    },
    {
        slug: 'tumpaksewu-tour',
        image: 'tumpaksewu',
        title: 'Tumpaksewu Tour',
        description: 'Discover the beauty of Tumpaksewu Waterfalls with our Tumpaksewu Tour. We offer both group and private tours to this mesmerizing destination.',
        groupTour: {
            time: 'Every day serving Tumpaksewu Tour',
            include: [
                {name: 'Transport', icon: <FaBus/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Mineral Water', icon: <FaBottleWater/>},
                {name: 'Driver', icon: <FaUserAlt/>},
                {name: 'Park and Fuel', icon: <FaGasPump/>},
            ],
            highlight: [
                { name: 'Using Transport with a maximum of 7 passengers', icon: <BsFillCarFrontFill /> },
                { name: 'Panorama Tumpaksewu Waterfalls', icon: <FaPanorama /> },
                { name: 'Tumpaksewu Waterfalls', icon: <GiWaterfall /> },
                { name: 'Tetes Cave', icon: <GiMountainCave /> },
                { name: 'Telaga Biru', icon: <LiaSnowflake /> },
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
                {name: 'Transport', icon: <FaBus/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Driver', icon: <FaUserAlt/>},
                {name: 'Mineral Water', icon: <FaBottleWater/>},
                {name: 'Local Guide', icon: <FaUserAlt/>},
                {name: 'Lunch', icon: <FaUtensils/>},
                {name: 'Park and Fuel', icon: <FaGasPump/>},
            ],
            highlight: [
                { name: 'Using Transport with a maximum of 6 passengers', icon: <BsFillCarFrontFill /> },
                { name: 'Panorama Tumpaksewu Waterfalls', icon: <FaPanorama /> },
                { name: 'Tumpaksewu Waterfalls', icon: <GiWaterfall /> },
                { name: 'Tetes Cave', icon: <GiMountainCave /> },
                { name: 'Telaga Biru', icon: <LiaSnowflake /> },
            ],
            meetingPoint: ['Malang City'],
            price: {
                domestic: [1200000, 600000, 450000, 400000, 350000, 300000],
                foreign: [1500000, 750000, 650000, 550000, 450000, 400000],
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit.',
            ],
        },
        itinerary: [
            {timeRange: '07.00 – 08.00', activity: 'Breakfast in the hotel and prepare for the trip'},
            {timeRange: '08.00 – 10.00', activity: 'Start driving to the Tumpaksewu Waterfalls'},
            {
                timeRange: '10.00 – 11.30',
                activity: 'Have lunch in the traditional resto and prepare (the traditional resto in the waterfalls area)'
            },
            {
                timeRange: '11.30 - 14.30',
                activity: 'Explore the Tumpaksewu waterfalls and enjoy the trip (Panorama Tumpaksewu Waterfalls, Tumpaksewu waterfalls, Tetes Cave, And Telaga Biru)'
            },
            {
                timeRange: '14.30 – 17.30',
                activity: 'Continue driving back to the Hotel in Malang City and end of the tour'
            },
        ],
        requirements: [
            'Second Clothes (because you will get wet in the Tumpaksewu Waterfalls area)',
            'Sandals/shoes anti-slip',
        ],
        childrenCategory: 'Anak-anak umur dibawah 3 tahun Free',
        exclude: [
            'Airplane/Train from and to passenger region',
            'Airport Tax',
            'Personal expenses during the tour (laundry, mini bar, etc.)',
            'Driver / Guide Tipping (Voluntary)',
            'Costs for other activities outside the itinerary',
        ],
        paymentMethods: ['Transfer', 'Cash'],

    },
    {
        slug: 'ijen-blue-fire-tour',
        image: 'ijen-blue-fire',
        title: 'Ijen Blue Fire Tour',
        description: 'Experience the mesmerizing Ijen Blue Fire with our Ijen Blue Fire Tour. Choose between a Group Tour or a Private Tour for a personalized adventure.',
        groupTour: {
            time: 'Every day serving Ijen Tour',
            include: [
                {name: 'Transport', icon: <FaBus/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Mineral Water', icon: <FaBottleWater/>},
                {name: 'Driver', icon: <FaUserAlt/>},
                {name: 'Park and Fuel', icon: <FaGasPump/>},
            ],
            highlight: [
                { name: 'Using Transport with a maximum of 7 passengers', icon: <BsFillCarFrontFill /> },
                { name: 'Ijen Pleatu', icon: <GiRiver /> },
                { name: 'Ijen Crater', icon: <BsScrewdriver /> },
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
                {name: 'Transport', icon: <FaBus/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Driver', icon: <FaUserAlt/>},
                {name: 'Mineral Water', icon: <FaBottleWater/>},
                {name: 'Local Guide', icon: <FaCompass/>},
                {name: 'Lunch', icon: <FaUtensils/>},
                {name: 'Park and Fuel', icon: <FaGasPump/>},
            ],
            highlight: [
                { name: 'Using Transport with a maximum of 6 passengers', icon: <BsFillCarFrontFill /> },
                { name: 'Climb Ijen Volcano', icon: <GiMountainClimbing /> },
                { name: 'Blue Fire', icon: <FaFire /> },
                { name: 'Sunrise in Ijen', icon: <Sunrise /> },
            ],
            meetingPoint: ['Banyuwangi City'],
            price: {
                domestic: [1400000, 700000, 550000, 400000, 350000, 300000],
                foreign: [1700000, 900000, 650000, 550000, 450000, 400000],
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit.',
            ],
        },
        itinerary: [
            {timeRange: '00.00', activity: 'Prepare and pick up in the meeting point/Your hotel'},
            {timeRange: '00.00 – 02.00', activity: 'Start driving to the Ijen Blue Fire'},
            {timeRange: '02.00 – 03.30', activity: 'Start trekking until reaching the lake'},
            {
                timeRange: '03.30 – 07.30',
                activity: 'Explore the Ijen Blue Fire and enjoy the trip (Sunrise in the Ijen, Blue Fire, and explore the volcano)'
            },
            {
                timeRange: '07.30 – 09.30',
                activity: 'Continue driving back to the Hotel in Banyuwangi and end of the tour'
            },
        ],
        requirements: [
            'Sandal/anti-slip shoes',
            'Masker',
            'Warm clothes',
            'Glove',
            'Long pants',
        ],
        exclude: [
            'Airplane/Train from and to passenger region',
            'Airport Tax',
            'Personal expenses during the tour (laundry, mini bar, etc.)',
            'Driver / Guide Tipping (Voluntary)',
            'Costs for other activities outside the itinerary',
        ],
        paymentMethods: ['Transfer', 'Cash'],
    }
];