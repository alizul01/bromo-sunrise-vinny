"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {TOUR_DATA} from "@/data/tour_data";
import Title from "@/components/pages/tour_detail/title";
import Booking from "@/components/pages/tour_detail/booking";
import GalleryTourSection from "@/components/pages/tour_detail/gallery";
import TripContent from "@/components/pages/tour_detail/content";
import Image from "next/image";
import Breadcrumbs from "@/components/partials/breadcrumbs";
import {ChevronRight} from "lucide-react";

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
        <section>
            <div className={'relative overflow-hidden'}>
                <div className="w-full h-80 relative">
                    <Image
                        src={getImageUrl(1)}
                        alt={'hero-image'}
                        layout={'fill'}
                        objectFit={'cover'}
                        quality={100}
                        priority={true}
                    />
                    <div
                        className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center px-24 bg-purple-950/40">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Best of {tour.title}
                        </h2>
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
        </section>
    );
};

export default TourDetail;
