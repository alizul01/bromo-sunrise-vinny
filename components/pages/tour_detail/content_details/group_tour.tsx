import React from "react";
import { motion } from "framer-motion";
import { TourTripProps } from "@/components/pages/tour_detail/content";
import {HiUserGroup} from "react-icons/hi";

const GroupTour: React.FC<TourTripProps> = ({ tour }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <div className={'bg-purple-50 py-6 gap-4 px-3 flex items-center justify-start'}>
                    <span className={'bg-purple-400 p-2 rounded-lg'}>
                       <HiUserGroup className={'text-xl text-white'}/>
                    </span>
                    <h3 className="text-lg font-bold text-purple-950">Group Tour</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Price</h4>
                        <ul className="list-disc list-inside ml-4">
                            <li>
                                Domestic: Rp. {tour.groupTour.price.domestic.toLocaleString()}/
                                person
                            </li>
                            <li>
                                International: Rp. {tour.groupTour.price.foreign.toLocaleString()}/
                                person
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Include</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-inside ml-4">
                            {tour.groupTour.include.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 my-4">Highlight</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                            {tour.groupTour.highlight.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2 inline">
                            Meeting Point:{" "}
                        </h4>
                        <p className={"inline"}>{tour.groupTour.meetingPoint}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default GroupTour;
