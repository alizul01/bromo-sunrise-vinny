'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { HiArrowSmRight } from "react-icons/hi";

const WhoWeAreSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
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
                                <div className={'w-24 h-0.5 bg-orange-400 rounded-full mt-2'}/>
                            </div>
                            <div>
                                <p className={'text-gray-600 font-light text-lg text-center'}>
                                    We provide tour packages around East Java for domestic and international tourists.
                                </p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-6 mt-16">
                            <div className="text-center">
                                <div className="border border-purple-500 p-1 inline-block mb-5">
                                    <div className="w-20 h-20 bg-purple-500 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                             className="h-10 w-10 text-white">
                                            <path fill="currentColor"
                                                  d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl uppercase mb-4">Responsive design</h3>
                                <p className="text-gray-500 dark:text-gray-400">Lorem voluptatem Quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default WhoWeAreSection;
