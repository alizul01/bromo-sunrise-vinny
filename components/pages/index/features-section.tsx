'use client'

import React from "react";
import map_bg from '@/public/assets/image/utils/map.png';
import CardFeatures from "@/components/component/card-features";
import {TOUR_DATA} from "@/data/tour_data";
import Image from "next/image";

const FeaturesSection: React.FC = () => {
    return (
        <section className={'relative'}>
            <div className={'absolute top-0 left-0 opacity-70 -z-10'}>
                <span>
                    <Image src={map_bg} alt={'Map'}/>
                </span>
            </div>
            <div className={'container'}>
                <div className={'flex flex-col items-start gap-1 py-8 '}>
                    <h2 className={'text-xl xl:text-2xl font-bold text-gray-900 tracking-wide uppercase'}>
                        Recommended Tours
                    </h2>
                    <div>
                        <p className={'text-gray-600 font-light text-lg text-center'}>
                            We provide tour packages around East Java for domestic and international tourists.
                        </p>
                    </div>
                </div>
                <div className={'flex flex-row gap-8 items-center justify-start'}>
                    {TOUR_DATA.map((tour, index) => (
                        <CardFeatures key={index} title={tour.title} slug={tour.slug} description={tour.description}
                                      price={tour.privateTour.price.domestic} image={tour.image}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection