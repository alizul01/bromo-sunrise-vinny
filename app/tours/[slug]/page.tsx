"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {TOUR_DATA} from "@/data/tour_data";
import Title from "@/components/pages/tour_detail/title";
import Booking from "@/components/pages/tour_detail/booking";
import GalleryTourSection from "@/components/pages/tour_detail/gallery";
import TripContent from "@/components/pages/tour_detail/content";

const TourDetail: React.FC = () => {
    const router = usePathname();
    const currentSlug = router.split("/")[2];
    const tour = TOUR_DATA.find((tour) => tour.slug === currentSlug);

    if (!tour) return null;

    const getImageUrl = (index: number) =>
        `/assets/image/products/${tour.image}/${index + 1}.webp`;

    const imageGallery = Array.from({length: 4}, (_, index) =>
        getImageUrl(index)
    );

    return (
        <div className={'mx-auto container max-w-7xl mt-12'}>
            <Title title={tour.title}/>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:space-x-4 space-y-8 md:space-y-0 mt-4">
                <div className="col-span-2">
                    <GalleryTourSection images={imageGallery}/>
                    <TripContent tour={tour}/>
                </div>
                <div>
                    <Booking destination={tour.title}/>
                </div>
            </div>
        </div>
    );
};

export default TourDetail;
