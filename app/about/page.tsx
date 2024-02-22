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
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className={'text-purple-700 font-bold'}>Get to Know</p>
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-600">
                            Bromo Smart Tour is a travel agency that provides tour packages to various tourist destinations on the island of Java, especially in East Java. We are committed to providing the best service to our customers.
                        </p>
                    </div>
                    <div>
                        <p className={'text-purple-700 font-bold'}>What We Do</p>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to provide the best service to our customers and provide the best experience for our customers while on vacation.
                        </p>
                        <ul className="mt-4">
                            <li className="flex items-center text-gray-600">
                                <ChevronRight width={16} className="mr-2" />
                                <span>Provide the best service to our customers</span>
                            </li>
                            <li className="flex items-center text-gray-600">
                                <ChevronRight width={16} className="mr-2" />
                                <span>Provide the best experience for our customers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;