'use client'

import React from "react";
import { motion } from "framer-motion";
import SERVICE_DATA from "@/data/services_data";
import BoxFeatures from "@/components/component/box-features";

const WhoWeAreSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section className={'bg-gray-100 mt-24'}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ duration: 0.5 }}
                className={"px-6 xl:px-0 xl:max-w-[82rem] container mx-auto"}
            >
                <div className={"flex flex-col gap-2 items-start justify-center "}>
                    <div className="py-20">
                        <div className="container">
                            <div className={'flex flex-col items-start gap-4 py-4 mb-12'}>
                                <div>
                                    <h2 className={'text-xl xl:text-2xl font-medium text-gray-900'}>
                                        Our Services & Facilities
                                    </h2>
                                </div>
                                <div>
                                    <p className={'text-gray-600 font-light text-lg text-center'}>
                                        We provide tour packages around East Java for domestic and international tourists.
                                    </p>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                                {SERVICE_DATA.map((feature, index) => (
                                    <BoxFeatures key={index} feature={feature} />
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
