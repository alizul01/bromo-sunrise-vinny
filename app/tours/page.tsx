"use client"

import React from "react";
import TourHeader from "@/components/pages/tour/header";
import Header from "@/components/partials/header";
import TourCard from "@/components/pages/tour/card";
import {TOUR_DATA} from "@/data/tour_data";

const ToursPage: React.FC =  () => {
    return (
        <div>
            <div className={'w-full'}>
                <Header/>
            </div>
            <div className={'px-10 mx-auto max-w-7xl mt-10'}>
                <TourHeader/>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'}>
                    {TOUR_DATA.map((tour) => (
                        <TourCard key={tour.slug} tour={tour} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToursPage