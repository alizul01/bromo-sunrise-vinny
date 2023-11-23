'use client'

import Image from "next/image";
import React from "react";
import {Button} from "flowbite-react";
import hero_text from '@/public/assets/image/hero/hero-text.svg';

const HeroSection: React.FC = () => {
    return (
        <div className="w-full h-screen relative">
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="/assets/videos/footage_drone.mp4"
                />
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
            <div
                className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center lg:text-start text-white p-4">
                <div className={"mx-auto container flex items-center justify-center"}>
                    <div className={'lg:w-1/2 items-center lg:items-center justify-center flex flex-col gap-8'}>
                        <Image src={hero_text} alt={'hero-text'} width={1080} height={1080}/>
                        <p className="text-lg md:text-xl mb-4 font-extralight text-center max-w-2xl tracking-tight">
                            Vinny Bromo Sunrise Tour is a tour and travel agency in Malang, East Java, Indonesia. We
                            provide tour packages around East Java for domestic and international tourists.
                        </p>
                        <Button className="bg-white text-black w-fit hover:bg-gray-50 rounded-full">
                            Begin Your Journey
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroSection