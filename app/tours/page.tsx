"use client"
import React from "react";
import TourCard from "@/components/pages/tour/card";
import { TOUR_DATA } from "@/data/tour_data";
import Image from "next/image";
import hero_image from "@/public/assets/image/products/tumpaksewu/2.jpg";
import Breadcrumbs from "@/components/partials/breadcrumbs";
import {ChevronRight} from "lucide-react";


const ToursPage: React.FC = () => {
    return (
        <div>
            <div className={'relative overflow-hidden'}>
                <div className="w-full h-80 relative">
                    <Image
                        src={hero_image}
                        alt={'hero-image'}
                        layout={'fill'}
                        objectFit={'cover'}
                        quality={100}
                        priority={true}
                    />
                    <div
                        className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center px-24 bg-purple-950/40">
                        <h2 className="text-3xl font-bold text-white mb-4">Explore the Beauty of East Java with Us</h2>
                        <Breadcrumbs
                            homeElement={'Home'}
                            separator={<span> <ChevronRight width={14} /> </span>}
                            activeClasses='font-bold text-white'
                            containerClasses='flex text-white items-center font-light'
                            listClasses='hover:underline mx-2'
                            capitalizeLinks
                        />
                    </div>
                </div>
            </div>
            <div className={'container mx-auto max-w-7xl mt-10'}>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'}>
                    {TOUR_DATA.map((tour) => (
                        <TourCard key={tour.slug} tour={tour} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToursPage;
