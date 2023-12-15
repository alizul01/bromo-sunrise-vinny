"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {TOUR_DATA} from "@/data/tour_data";
import Hero from "@/components/pages/tour_detail/hero";
import Title from "@/components/pages/tour_detail/title";

const TourDetail: React.FC = () => {
    const router = usePathname();
    const currentSlug = router.split('/')[2];

    const tour = TOUR_DATA.find(tour => tour.slug === currentSlug);
    if (!tour) return null;
    const imageUrl = `/assets/image/products/${tour.image}/1.png`;

    return (
        <div>
            <Hero imageUrl={imageUrl}/>
            <div className={'px-6 xl:px-0 container mx-auto mt-10 start py-4 mb-12 flex gap-8'}>
                <div className={''}>
                    <Title title={tour.title} subtitle={tour.description} />
                </div>
                <div className={'w-1/4'}>
                    Test
                </div>
            </div>
        </div>
    )
}

export default TourDetail