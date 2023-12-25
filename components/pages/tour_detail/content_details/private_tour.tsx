import React from "react";
import {motion} from "framer-motion";
import {TourTripProps} from "@/components/pages/tour_detail/content";

const PrivateTour: React.FC<TourTripProps> = ({tour}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Private Tour</h3>
                <div className="flex flex-col gap-3">
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Price</h4>
                        <div className="flex gap-4">
                            <div>
                                <h5 className="text-base font-bold text-gray-700 mb-2">Domestic</h5>
                                <ul className="list-disc list-inside ml-4">
                                    {tour.privateTour.price.domestic.map((price, index) => (
                                        <li key={index}>
                                            {index + 1} person: Rp. {price.toLocaleString()},- / person
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-gray-700 mb-2">International</h5>
                                <ul className="list-disc list-inside ml-4">
                                    {tour.privateTour.price.foreign.map((price, index) => (
                                        <li key={index}>
                                            {index + 1} person: Rp. {price.toLocaleString()},- / person
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Include</h4>
                        <div className="grid grid-cols-3 gap-4 ml-4">
                            {tour.privateTour.include.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Highlight</h4>
                        <div className="grid grid-cols-2 gap-4 ml-4">
                            {tour.privateTour.highlight.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2 inline">
                            Meeting Point: {' '}
                        </h4>
                        <p className={'inline'}>{tour.privateTour.meetingPoint.join(', ')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivateTour;