import React from "react";

const TourHeader: React.FC = () => {
    return (
        <div className="text-center mt-12 mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">
                Explore Our Exciting Tours
            </h1>
            <p className="mt-2 text-lg text-gray-600">
                Uncover the beauty and adventure that await you
            </p>
            <div className="flex justify-center mt-6">
                <div className="w-16 h-[0.5px] bg-orange-500"></div>
            </div>
        </div>
    );
};

export default TourHeader;
