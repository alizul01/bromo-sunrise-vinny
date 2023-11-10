'use client'

import Image from "next/image";
import map_bg from '@/public/assets/image/utils/map.png';
import React from "react";
import hero_img from '@/public/assets/image/gallery/1.jpg';
import {Button} from "flowbite-react";
import {HiArrowSmRight} from "react-icons/hi";
import {motion} from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section>
            <div className={'absolute top-0 left-0 opacity-70 -z-10'}>
                <span>
                    <Image src={map_bg} alt={'Map'}/>
                </span>
            </div>
            <motion.section initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={'px-6 xl:px-0 xl:max-w-[82rem] container mx-auto'}>
                <div className={'pt-16 lg:pt-28'}>
                    <div
                        className={'flex w-full items-center justify-between flex-wrap flex-col lg:flex-row lg:flex-nowrap gap-10'}>
                        <div className={'flex flex-col gap-8 lg:w-1/2'}>
                            <div className={'bg-orange-100/50 py-2 px-4 rounded-lg w-fit'}>
                                <p className={'text-orange-400 font-medium text-sm'}>
                                    Vinny Bromo Sunrise
                                </p>
                            </div>
                            <div className={'flex flex-col gap-7'}>
                                <h1 className={'text-4xl md:text-6xl xl:text-8xl font-bold tracking-wide pt-8 text-gray-900'}>
                                    East Java Trip &amp; Travel
                                </h1>
                                <p className={'text-gray-600 font-light text-lg'}>
                                    Vinny Bromo Sunrise Tour is a tour and travel agency in Malang, East Java, Indonesia. We
                                    provide tour packages around East Java for domestic and international tourists.
                                </p>
                                <Button className={'w-fit bg-orange-400 text-orange-50 hover:bg-orange-500'} size={'lg'}>
                                    Book Now
                                    <HiArrowSmRight className={'ml-2'}/>
                                </Button>
                            </div>
                        </div>
                        <div className={'hidden lg:flex items-center justify-center h-full w-1/2'}>
                            <Image src={hero_img} alt={'Hero Image'} width={600} height={600} className={'rounded-lg'}/>
                        </div>
                    </div>
                </div>
            </motion.section>
        </section>
    )
}

export default HeroSection