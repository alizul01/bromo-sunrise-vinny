'use client'

import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import hero_image from '@/public/assets/image/hero/hero.png';
import {GoPaperAirplane} from "react-icons/go";

const HeroSection: React.FC = () => {

    return (
        <div
            className="container my-8 md:my-12">
            <div className={'flex flex-col-reverse md:flex-row items-center gap-3 justify-center md:`justify-between'}>
                <div className={'flex flex-col items-center justify-center md:items-start gap-5 basis-1/2'}>
                    <span className={'w-fit p-3 bg-white text-cyan-500 flex items-center gap-2 rounded-full shadow-md mb-4'}>
                        <GoPaperAirplane className={'text-xl'}/> <span className={'font-bold'}>Explore the East Java!</span>
                    </span>
                    <h1 className={'font-bold text-4xl md:text-6xl md:leading-tight md:text-start text-center'}>
                        Travel Around East Java with <span
                        className={'text-cyan-500'}>Bromo Smart Tour</span>
                    </h1>
                    <p className={'leading-relaxed font-normal text-gray-600 md:text-start text-center'}>
                        We always give the extraordinary experience for you. We provide tour packages around East Java for domestic and international tourists.
                    </p>
                    <Button className={'w-fit bg-cyan-500 hover:bg-cyan-600'}>
                        Get Started
                    </Button>
                </div>
                <div>
                    <Image className={'w-[42rem]'} src={hero_image} alt={'Bromo Smart Tour Image'} width={1080} height={1080}/>
                </div>
            </div>
            <div className={'absolute right-0 w-[32rem] h-[32rem] bg-cyan-400 rounded-full blur-3xl opacity-10 sm:block md:opacity-25'}/>
        </div>
    )
}


export default HeroSection