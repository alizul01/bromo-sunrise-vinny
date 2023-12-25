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
                <Image src={`/assets/image/products/${tour.image}/2.png`} alt={tour.title} width={380} height={250} className="w-full h-48 object-cover mb-4 rounded-lg"/>
                <CardTitle>
                    <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
                </CardTitle>
                <CardDescription>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div id={'services'}>
                        <div className={'grid grid-cols-2 gap-4'}>
                            <div className={'flex items-center'}>
                                <BsAirplane className={'text-gray-600'}/>
                                <p className={'ml-2 text-gray-600'}>Flight Ticket</p>
                            </div>
                            <div className={'flex items-center'}>
                                <BiHotel className={'text-gray-600'}/>
                                <p className={'ml-2 text-gray-600'}>Hotel</p>
                            </div>
                        </div>
                    </div>
                </CardDescription>
                <Button asChild className="bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none w-fit">
                    <Link href={`/tours/${tour.slug}`}> Details </Link>
                </Button>
            </CardHeader>
        </Card>
        // <div className="bg-white rounded shadow-md p-6 mb-6">
        //     <img
        //         src={`/assets/image/products/${tour.image}/2.png`}
        //         alt={tour.title}
        //         className="w-full h-48 object-cover mb-4 rounded"
        //     />
        //     <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
        //     <p className="text-gray-600 mb-4">{tour.description}</p>
        //
        //     <div className="flex justify-between items-center mb-4">
        //         <div>
        //             <p className="text-lg font-semibold">Group Tour</p>
        //             <p>{renderPrice(tour.groupTour.price.domestic)}</p>
        //         </div>
        //         <div>
        //             <p className="text-lg font-semibold">Private Tour</p>
        //             <p>{renderPrice(tour.privateTour.price.domestic)}</p>
        //         </div>
        //     </div>
        //
        //     <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
        //         Book Now
        //     </button>
        // </div>
    );
};

export default TourCard;
