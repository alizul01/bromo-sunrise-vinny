import React from "react";
import { motion } from "framer-motion";

type FeatureData = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

interface BoxFeaturesProps {
    feature: FeatureData;
}

const BoxFeatures: React.FC<BoxFeaturesProps> = ({ feature }) => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="p-1 inline-block mb-5 rounded-lg">
                <motion.div
                    className="w-20 h-20 bg-cyan-200 flex items-center justify-center rounded-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-4xl text-cyan-500">{feature.icon}</span>
                </motion.div>
            </div>
            <motion.h3
                className="text-lg uppercase mb-2 font-bold"
                variants={textVariants}
            >
                {feature.title}
            </motion.h3>
            <motion.p
                className="text-gray-500 dark:text-gray-400 text-sm text-center"
                variants={textVariants}
            >
                {feature.description}
            </motion.p>
        </motion.div>
    );
};

export default BoxFeatures;