// File: TourCard.tsx
import React from "react";
import {TourData} from "@/data/tour_data";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import {BsAirplane} from "react-icons/bs";
import {BiHotel} from "react-icons/bi";
import Link from "next/link";

interface TourCardProps {
    tour: TourData;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
    return (
        <Card className={cn("w-[380px]")}>
            <CardHeader>
                <Image src={`/assets/image/products/${tour.image}/2.webp`} alt={tour.title} width={380} height={250} className="w-full h-48 object-cover mb-4 rounded-lg"/>
                <CardTitle>
                    <span className="text-2xl font-bold mb-2">{tour.title}</span>
                </CardTitle>
                <CardDescription>
                    <span className="text-gray-600 mb-4 line-clamp-3">{tour.description}</span>
                    <span id={'services'}>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-inside my-4">
                            {tour.groupTour.include.slice(1, 3).map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </span>
                </CardDescription>
                <Button asChild className="bg-cyan-500 text-white rounded hover:bg-cyan-600 focus:outline-none">
                    <Link href={`/tours/${tour.slug}`}> Details </Link>
                </Button>
            </CardHeader>
        </Card>
    );
};

export default TourCard;
