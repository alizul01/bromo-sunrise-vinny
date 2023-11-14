import React from "react";

type FeatureData = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

interface BoxFeaturesProps {
    feature: FeatureData;
}

const BoxFeatures: React.FC<BoxFeaturesProps> = ({ feature }) => {
    return (
        <div className="text-center">
            <div className="p-1 inline-block mb-5 rounded-lg">
                <div className="w-20 h-20 bg-orange-300 flex items-center justify-center rounded-xl">
                    <span className="text-3xl text-orange-500">
                        {feature.icon}
                    </span>
                </div>
            </div>
            <h3 className="text-lg uppercase mb-4">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
        </div>
    );
};

export default BoxFeatures;
