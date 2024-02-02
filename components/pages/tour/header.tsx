import React from "react";
import {motion} from "framer-motion";

const bounceAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

const TourHeader: React.FC = () => {
    return (
        <section id={'copywriting-cta'} className="mt-10">
            <motion.div
                variants={bounceAnimation}
                initial="hidden"
                animate="visible"
            >
                <h2 className={'text-3xl font-bold text-gray-800 mb-2'}>

                </h2>
            </motion.div>
            <motion.div
                variants={bounceAnimation}
                initial="hidden"
                animate="visible"
            >
                <p className={'text-lg text-gray-600 mb-6'}>
                    Embark on a journey filled with wonders and unforgettable experiences. Discover our diverse tour packages tailored for you.
                </p>
            </motion.div>
        </section>
    );
};

export default TourHeader;
