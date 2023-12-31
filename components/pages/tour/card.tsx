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
                    <span className="text-gray-600 mb-4">{tour.description}</span>
                    <span id={'services'}>
                        <span className={'grid grid-cols-2 gap-4'}>
                            <span className={'flex items-center'}>
                                <BsAirplane className={'text-gray-600'}/>
                                <span className={'ml-2 text-gray-600'}>Flight Ticket</span>
                            </span>
                            <span className={'flex items-center'}>
                                <BiHotel className={'text-gray-600'}/>
                                <span className={'ml-2 text-gray-600'}>Hotel</span>
                            </span>
                        </span>
                    </span>
                </CardDescription>
                <Button asChild className="bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none w-fit">
                    <Link href={`/tours/${tour.slug}`}> Details </Link>
                </Button>
            </CardHeader>
        </Card>
    );
};

export default TourCard;
