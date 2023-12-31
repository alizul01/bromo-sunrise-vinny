'use client'

import React from "react";
import {motion} from "framer-motion";
import map_travel from '@/public/assets/image/utils/map-travel.png';
import SERVICE_DATA from "@/data/services_data";
import BoxFeatures from "@/components/component/box-features";
import Image from "next/image";

const WhoWeAreSection: React.FC = () => {
    const containerVariants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    };

    return (
        <motion.section className={'border-y-[1.5px] border-gray-300 mt-24'}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{duration: 0.5}}
                className={"px-6 xl:px-0 xl:max-w-[82rem] container mx-auto relative"}
            >
                <div className={'absolute top-0 left-0 opacity-70 -z-10'}>
                    <span>
                        <Image src={map_travel} alt={'Map'}/>
                    </span>
                </div>
                <div className={"flex flex-col gap-2 items-start justify-center "}>
                    <div className="py-12">
                        <div className="container">
                            <div className={'flex flex-col items-center gap-4 py-4 mb-12'}>
                                <div>
                                    <h2 className={'text-xl xl:text-2xl font-medium text-gray-900'}>
                                        Our Services
                                    </h2>
                                    <div className={'container mx-auto w-12 h-0.5 bg-orange-400 rounded-full mt-4'}/>
                                </div>
                                <div>
                                    <p className={'text-gray-600 font-light text-lg text-center'}>
                                        We provide tour packages around East Java for domestic and international
                                        tourists.
                                    </p>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mt-16">
                                {SERVICE_DATA.map((feature, index) => (
                                    <BoxFeatures key={index} feature={feature}/>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default WhoWeAreSection;
