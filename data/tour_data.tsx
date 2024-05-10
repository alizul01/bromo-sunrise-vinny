import React from "react";
import {BsBicycle, BsFillCarFrontFill, BsFillFileTextFill, BsScrewdriver} from "react-icons/bs";
import {
    FaBus,
    FaCompass,
    FaFire,
    FaGasPump,
    FaIndustry, FaLeaf,
    FaMountain,
    FaUmbrellaBeach,
    FaUserAlt,
    FaUtensils
} from "react-icons/fa";
import {FaBottleWater, FaPanorama} from "react-icons/fa6";
import {PiJeepBold} from "react-icons/pi";
import {TbBeach, TbMountain} from "react-icons/tb";
import {Sunrise} from "lucide-react";
import {GiCycle, GiHelmet, GiIsland, GiMountainCave, GiMountainClimbing, GiRiver, GiWaterfall} from "react-icons/gi";
import {LiaSnowflake} from "react-icons/lia";
import {IoFastFoodOutline} from "react-icons/io5";

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
    isPromo?: boolean;
    description: string;
    groupTour: GroupTour | null;
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
        description: 'Explore the breathtaking Bromo Tengger Semeru National Park with our Bromo Tour. We offer both group and Private Tours to Bromo.',
        isPromo: true,
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
                domestic: 300000,
                foreign: 450000,
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
                domestic: [1200000, 650000, 425000, 325000, 275000, 250000],
                foreign: [1700000, 900000, 850000, 700000, 600000, 650000],
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit (Madakaripura Waterfall, Pelangi Waterfall, Bromo Hillside Café)',
            ],
        },
        itinerary: [
            {timeRange: '00.00 – 03.00', activity: 'Drive from your hotel or meeting point to the Penanjakan/Kingkong Hill/Prahu Hill'},
            {timeRange: '03.00 – 06.00', activity: 'In Penanjakan enjoy and explore the Bromo Sunrise area'},
            {timeRange: '06.00 – 06.30', activity: 'Continue driving to the Love Hill and explore '},
            {timeRange: '06.30 – 07.30', activity: 'Continue driving to the Widodaren Mt and explore'},
            {timeRange: '07.30 – 10.00', activity: 'Continue driving to the Bromo Mt and explore'},
            {
                timeRange: '10.00 – 12.00',
                activity: 'Continue driving to the Sand sea and Savannah (exploring the Sand sea and Savannah)'
            },
            {timeRange: '12.00 – 14.00', activity: 'Continue driving back to your hotel and end of the tour'},
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
        description: 'Discover the beauty of Tumpaksewu Waterfalls with our Tumpaksewu Tour. We offer both group and Private Tours to this mesmerizing destination.',
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
                foreign: 400000,
            },
        },
        privateTour: {
            time: 'Every day serving Tumpaksewu Tour',
            include: [
                {name: 'Transport', icon: <FaBus/>},
                {name: 'Ticket Entrance', icon: <BsFillFileTextFill/>},
                {name: 'Driver', icon: <FaUserAlt/>},
                {name: 'Mineral Water', icon: <FaBottleWater/>},
                {name: 'Local Guide', icon: <FaUserAlt/>},
                {name: 'Lunch', icon: <FaUtensils/>},
                {name: 'Park and Fuel (Minimum 2 pax)', icon: <FaGasPump/>},
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
                domestic: [1200000, 650000, 425000, 325000, 275000, 250000],
                foreign: [1700000, 900000, 850000, 700000, 650000, 650000],
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
                activity: 'Having a lunch in the traditional resto and prepare (the traditional resto in the waterfalls area)'
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
        title: 'Bromo, Ijen Tour drop to Bali',
        description: 'Experience the mesmerizing Ijen Blue Fire with our Ijen Blue Fire Tour. Choose between a Sharing Trip or a Private Tour for a personalized adventure.',
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
                foreign: 1750000,
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
                domestic: [3500000, 2500000, 2500000, 2200000, 2200000, 2200000],
                foreign: [4000000, 3500000, 3500000, 3500000, 3000000, 3000000],
            },
            additionalRequests: [
                'Contact us if you have requests for meals or places to visit.',
            ],
        },
        itinerary: [
            { timeRange: '00.00 – 03.00', activity: 'Drive from your hotel or meeting point to the Penanjakan/Kingkong Hill/Prahu Hill' },
            { timeRange: '03.00 – 06.00', activity: 'In Penanjakan enjoy and explore the Bromo Sunrise area' },
            { timeRange: '06.00 – 06.30', activity: 'Continue driving to the Love Hill and explore ' },
            { timeRange: '06.30 – 07.30', activity: 'Continue driving to the Widodaren Mt and explore' },
            { timeRange: '07.30 – 10.00', activity: 'Continue driving to the Bromo Mt and explore' },
            { timeRange: '10.00 – 12.00', activity: 'Continue driving to the Sand sea and Savannah (exploring the Sand sea and Savannah)' },
            { timeRange: '12.00 – 12.40', activity: 'Continue driving to the meeting point and change the car' },
            { timeRange: '12.40 – 18.40', activity: 'Continue driving to the Ijen and stay at the hotel' },
            { timeRange: '18.40 – 01.00', activity: 'Stay and relaxing in the hotel' },
            { timeRange: '01.00 – 02.00', activity: 'Check out from the hotel and Drive from your hotel to the Ijen' },
            { timeRange: '02.00 – 04.00', activity: 'Trekking to the Ijen and enjoy the view' },
            { timeRange: '04.00 – 07.00', activity: 'See the Blue Ijen Fire and the panorama' },
            { timeRange: '07.00 – 09.00', activity: 'Trekking back to the parking area' },
            { timeRange: '09.00 – 12.00', activity: 'Continue drive to the Ketapang' },
            { timeRange: '12.00 – 14.00', activity: 'Change to the ferry and enjoy the panorama to Bali' },
            { timeRange: '14.00', activity: 'Arrive at Bali and the end of the tour' },
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
    },
    {
        slug: "3-color-beach-tour",
        image: "3-color-beach",
        title: "3 Color Beach Tour",
        description: "Explore the beauty of 3 Color Beach (Pantai 3 Warna) with our Private Tour options. Choose from domestic or foreign rates and enjoy a personalized experience.",
        groupTour: null,
        privateTour: {
            time: "Every day serving 3 Color Beach Tour",
            price: {
                domestic: [1200000, 600000, 450000, 400000, 350000, 300000],
                foreign: [1500000, 750000, 650000, 550000, 450000, 400000]
            },
            include: [
                { name: "Transport", icon: <FaBus/> },
                { name: "Ticket Entrance", icon: <BsFillFileTextFill/> },
                { name: "Driver", icon: <FaUserAlt/> },
                { name: "Mineral Water", icon: <FaBottleWater/> },
                { name: "Guide Local", icon: <FaUserAlt/> },
                { name: "Lunch", icon: <FaUtensils/> },
                { name: "Park and Fuel", icon: <FaGasPump/> }
            ],
            highlight: [
                { name: "Using Transport with a maximum of 6 passengers", icon: <BsFillCarFrontFill /> },
                { name: "3 Color Beach Trip", icon: <GiIsland /> }
            ],
            meetingPoint: ["Malang City"],
            additionalRequests: ["Contact us if you have requests for meals or places to visit."]
        },
        itinerary: [
            { timeRange: "07.00 – 08.00", activity: "Breakfast in the hotel and prepare for the trip" },
            { timeRange: "08.00 – 10.00", activity: "Start driving to the 3 Color Beach" },
            { timeRange: "10.00 – 10.30", activity: "Trekking to the 3 Color Beach" },
            { timeRange: "10.30 - 13.00", activity: "Explore the 3 Color Beach" },
            { timeRange: "13.00 – 13.30", activity: "Trekking back to the car park" },
            { timeRange: "13.30 – 13.45", activity: "Continue driving to the Ungapan beach for lunch" },
            { timeRange: "13.45 – 15.00", activity: "Lunch and explore the Ungapan beach" },
            { timeRange: "15.00 – 17.30", activity: "Drive back to your hotel in Malang and end of the trip" }
        ],
        requirements: [
            "Second Clothes (because you will get wet in the 3 Color Beach area)",
            "Sandals/shoes anti-slip",
            "Snacks",
            "Plastic bags (for the trash)"
        ],
        childrenCategory: "Anak-anak umur dibawah 3 tahun Free",
        exclude: [
            "Airplane/Train from and to passenger region",
            "Airport Tax",
            "Personal expenses during the tour (laundry, mini bar, etc.)",
            "Driver / Guide Tipping (Voluntary)"
        ],
        paymentMethods: ["Transfer", "Cash (any currency we receive it)"]
    },
    {
        slug: "tea-plantation-tour",
        image: "tea-plantation",
        title: "Tea Plantation Tour",
        description: "Experience the serenity of tea plantations with our Private Tour options. Choose between domestic and foreign rates and enjoy a personalized journey through the tea fields.",
        groupTour: null,
        privateTour: {
            time: "Every day serving Tea Plantation Tour",
            price: {
                domestic: [1000000, 500000, 350000, 250000, 200000, 200000],
                foreign: [1300000, 650000, 550000, 400000, 300000, 300000]
            },
            include: [
                { name: "Transport", icon: <FaBus/> },
                { name: "Ticket Entrance", icon: <BsFillFileTextFill/> },
                { name: "Driver", icon: <FaUserAlt/> },
                { name: "Mineral Water", icon: <FaBottleWater/> },
                { name: "Guide Local", icon: <FaUserAlt/> },
                { name: "Park and Fuel", icon: <FaGasPump/> }
            ],
            highlight: [
                { name: "Using Transport with a maximum of 6 passengers", icon: "<BsFillCarFrontFill />" },
                { name: "Tea Plantation Trip", icon: <FaLeaf /> },
                { name: "Tea Factory", icon: <FaIndustry /> }
            ],
            meetingPoint: ["Malang City"],
            additionalRequests: ["Contact us if you have requests for meals or places to visit."]
        },
        itinerary: [
            { timeRange: "08.00 – 09.00", activity: "Breakfast in the hotel and prepare for the trip" },
            { timeRange: "09.00 – 10.00", activity: "Start driving to the tea plantation" },
            { timeRange: "10.00 – 10.30", activity: "Visit and explore the tea factory with the local guide" },
            { timeRange: "10.30 - 11.30", activity: "Explore the tea plantation" },
            { timeRange: "11.30 – 12.00", activity: "Trekking back to the car park" },
            { timeRange: "12.00 – 13.00", activity: "Continue driving back to your hotel in Malang and the end of the trip" }
        ],
        requirements: [
            "Sandals/shoes anti-slip"
        ],
        childrenCategory: "Anak-anak umur dibawah 3 tahun Free",
        exclude: [
            "Airplane/Train from and to passenger region",
            "Airport Tax",
            "Personal expenses during the tour (laundry, mini bar, etc.)",
            "Driver / Guide Tipping (Voluntary)",
            "Costs for other activities outside the itinerary"
        ],
        paymentMethods: ["Transfer", "Cash (any currency we receive it)"]
    },
    {
        slug: "countryside-cycling-tour",
        image: "countryside-cycling",
        title: "Cycling in Countryside Tour",
        description: "Embark on a cycling adventure in the serene countryside with our Private Tour options. Choose between domestic and foreign rates for an unforgettable cycling experience.",
        groupTour: null,
        privateTour: {
            time: "Every day serving Cycling in the Countryside Tour",
            price: {
                domestic: [1000000, 500000, 450000, 400000, 350000, 300000],
                foreign: [1500000, 750000, 650000, 550000, 450000, 400000]
            },
            include: [
                { name: "Transport", icon: <FaBus/> },
                { name: "Driver", icon: <FaUserAlt/> },
                { name: "Mineral Water", icon: <FaBottleWater/> },
                { name: "Local Guide", icon: <FaUserAlt/> },
                { name: "Sport Bike", icon: <BsBicycle/> },
                { name: "Helmet", icon: <GiHelmet/> },
                { name: "Snacks", icon: <IoFastFoodOutline/> },
                { name: "Park and Fuel", icon: <FaGasPump/> }
            ],
            highlight: [
                { name: "Using Transport with a maximum of 6 passengers", icon: <BsFillCarFrontFill /> },
                { name: "Cycling in the Countryside", icon: <GiCycle/> }
            ],
            meetingPoint: ["Malang City"],
            additionalRequests: ["Contact us if you have requests for meals or places to visit."]
        },
        itinerary: [
            { timeRange: "07.00 – 08.00", activity: "Breakfast in the hotel and prepare for the trip" },
            { timeRange: "08.00 – 09.00", activity: "Start driving to the area for cycling" },
            { timeRange: "09.00 – 09.10", activity: "Prepare all before cycling (warm-up)" },
            { timeRange: "09.10 - 13.00", activity: "Explore the countryside with the bicycle (in the middle of the cycling, get the snacks)" },
            { timeRange: "13.00 – 13.30", activity: "Back to the car and continue driving back to your hotel in Malang and the end of the trip" }
        ],
        requirements: [
            "Sports clothes",
            "Shoes"
        ],
        exclude: [
            "Airplane/Train from and to passenger region",
            "Airport Tax",
            "Personal expenses during the tour (laundry, mini bar, etc.)",
            "Driver / Guide Tipping (Voluntary)",
            "Costs for other activities outside the itinerary"
        ],
        paymentMethods: ["Transfer", "Cash (any currency we receive it)"]
    }
];