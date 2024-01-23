'use client'

import React, { useEffect, useRef } from "react";
import SERVICE_DATA from "@/data/services_data";
import BoxFeatures from "@/components/component/box-features";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhoWeAreSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section
            ref={ref}
            className={'border-y-[1.5px] border-gray-300 mt-12 relative'}
        >
            <div className={"container"}>
                <motion.div
                    className={"flex flex-col gap-2 items-start justify-center "}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <div className="py-6">
                        <div className={"flex flex-col items-center sm:items-start gap-1"}>
                            <h2 className={"text-xl xl:text-2xl font-bold text-gray-900 tracking-wide uppercase"}>
                                Our Services
                            </h2>
                            <div>
                                <p className={"text-gray-600 font-light text-lg text-center"}>
                                    We give you the best service for your trip, so you can
                                    enjoy your trip without any worries.
                                </p>
                            </div>
                        </div>
                        <motion.div
                            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 mt-12"
                            initial="hidden"
                            animate={controls}
                            variants={containerVariants}
                        >
                            {SERVICE_DATA.map((feature, index) => (
                                <BoxFeatures key={index} feature={feature} />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
