'use client'

import Image from "next/image";
import React from "react";
import hero_img from '@/public/assets/image/gallery/1.jpg';
import {Button} from "flowbite-react";
import {Carousel} from "flowbite-react";
import {AiOutlineSearch} from "react-icons/ai";

const HeroSection: React.FC = () => {
    return (
        <div className="w-full h-screen relative">
            <Carousel leftControl={'.'} rightControl={'.'}>
                <Image
                    className="w-full h-full object-cover"
                    src={hero_img}
                    alt="hero image"
                    width={1920}
                    height={1080}
                />
                <Image
                    className="w-full h-full object-cover"
                    src={hero_img}
                    alt="hero image"
                    width={1920}
                    height={1080}
                />
                <Image
                    className="w-full h-full object-cover"
                    src={hero_img}
                    alt="hero image"
                    width={1920}
                    height={1080}
                />
            </Carousel>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50"></div>
            <div
                className="absolute top-0 w-full h-full flex flex-col justify-center items-start text-center lg:text-start text-white p-4">
                <div className={"mx-auto container"}>
                    <div className={'lg:w-1/2 items-center lg:items-start flex flex-col gap-4'}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4"> Vinny Bromo Travel</h1>
                        <p className="text-lg md:text-xl mb-4 font-light tracking-tight"> Vinny Bromo Sunrise Tour is a tour and travel agency in
                            Malang, East Java, Indonesia. We
                            provide tour packages around East Java for domestic and international tourists.</p>
                        <Button className="bg-white text-black w-fit hover:bg-gray-50">
                            <AiOutlineSearch className="inline-block mr-2"/>
                            Cari Paket
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroSection