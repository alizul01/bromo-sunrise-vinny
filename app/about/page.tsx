'use client'

import React from "react";
import Image from "next/image";
import {ChevronRight} from "lucide-react";
import hero_image from "@/public/assets/banner/1.jpg";
import Breadcrumbs from "@/components/partials/breadcrumbs";

const AboutPage: React.FC = () => {
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
                        <h2 className="text-3xl font-bold text-white mb-4">Explore East Java with Us</h2>
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
        </div>
    )
}

export default AboutPage;