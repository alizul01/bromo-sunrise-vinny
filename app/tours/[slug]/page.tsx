"use client"

import React from "react";
import { usePathname } from "next/navigation";
import { TOUR_DATA } from "@/data/tour_data";
import Title from "@/components/pages/tour_detail/title";
import Booking from "@/components/pages/tour_detail/booking";
import GalleryTourSection from "@/components/pages/tour_detail/gallery";
import TripContent from "@/components/pages/tour_detail/content";
import Header from "@/components/partials/header";

const TourDetail: React.FC = () => {
    const router = usePathname();
    const currentSlug = router.split("/")[2];
    const tour = TOUR_DATA.find((tour) => tour.slug === currentSlug);

    if (!tour) return null;

    const getImageUrl = (index: number) =>
        `/assets/image/products/${tour.image}/${index + 1}.webp`;

    const imageGallery = Array.from({ length: 4 }, (_, index) =>
        getImageUrl(index)
    );

    return (
        <div>
            <div className="px-6 xl:px-0 container mx-auto start py-4 mb-12 flex gap-8 flex-col md:flex-row">
                <div>
                    <Title title={tour.title} subtitle={tour.description} />
                    <div className={'container mx-auto w-full h-0.5 bg-gray-200 rounded-full my-5'}/>
                    <GalleryTourSection images={imageGallery} />
                    <div className={'container mx-auto w-full h-0.5 bg-gray-200 rounded-full my-5'}/>
                    <TripContent tour={tour} />
                </div>
                <div className="md:w-1/2">
                    <Booking destination={tour.title} />
                </div>
            </div>
        </div>
    );
};

export default TourDetail;
