"use client"

import React from "react";
import TourHeader from "@/components/pages/tour/header";
import Header from "@/components/partials/header";

const ToursPage: React.FC =  () => {
    return (
        <div>
            <div className={'w-full'}>
                <Header/>
            </div>
            <div className={'px-10 mx-auto max-w-7xl mt-10'}>
                <TourHeader/>
            </div>
        </div>
    )
}

export default ToursPage