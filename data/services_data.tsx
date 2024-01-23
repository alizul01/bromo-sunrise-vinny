import React from "react";
import {FaCampground, FaPlane, FaServicestack} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";

export type ServiceFeature = {
    title: string;
    description: string;
    icon: React.ReactNode; // Use React.ReactNode for the icon
};

const SERVICE_DATA: ServiceFeature[] = [
    {
        title: "Service Your Trip",
        description: "We provide personalized trip services in Malang, Banyuwangi, and Jogja.",
        icon: <FaPlane />,
    },
    {
        title: "Group and Private Tours",
        description: "Choose from our group tours or opt for a private tour tailored to your preferences.",
        icon: <FaPeopleGroup />
    },
    {
        title: "Camp and Trekking",
        description: "Experience camping and trekking adventures to breathtaking locations, including Ijen, Semeru, and more.",
        icon: <FaCampground />
    },
    {
        title: "Tour Packages",
        description: "We provide tour packages around East Java for domestic and international tourists.",
        icon: <FaServicestack />
    },
];

export default SERVICE_DATA;
