'use client'

import React from "react";
import {Button} from "flowbite-react";
import {HiArrowSmRight} from "react-icons/hi";
import CardFeatures from "@/components/component/card-features";
import {TOUR_DATA} from "@/data/tour_data";
import Image from "next/image";

const FeaturesSection: React.FC = () => {
    return (
        <section className={'mt-20 relative'}>
            <div className={'px-6 xl:px-0 xl:max-w-7xl container mx-auto mt-24'}>
                <div className={'flex flex-col items-center gap-4 py-4 mb-12'}>
                    <div>
                        <h2 className={'text-xl xl:text-2xl font-medium text-gray-900'}>
                            Recommended Tours
                        </h2>
                        <div className={'container mx-auto w-12 h-0.5 bg-orange-400 rounded-full mt-4'}/>
                    </div>
                    <div>
                        <p className={'text-gray-600 font-light text-lg text-center'}>
                            We provide tour packages around East Java for domestic and international tourists.
                        </p>
                    </div>
                </div>
               <div className={'flex flex-row gap-6 items-center justify-center'}>
                   {TOUR_DATA.map((tour, index) => (
                       <CardFeatures key={index} title={tour.title} slug={tour.slug} description={tour.description}
                                     price={tour.privateTour.price} image={tour.image}/>
                   ))}
               </div>
            </div>
        </section>
    )
}

export default FeaturesSection