import React from "react";
import {motion} from "framer-motion";
import {TourTripProps} from "@/components/pages/tour_detail/content";
import {HiUserGroup} from "react-icons/hi";
import {BiMoney} from "react-icons/bi";
import {FaParachuteBox} from "react-icons/fa";
import {AiFillHighlight} from "react-icons/ai";
import {MdLocationPin} from "react-icons/md";

const GroupTour: React.FC<TourTripProps> = ({tour}) => {

    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div>
                <div className={'bg-purple-50 py-6 gap-4 px-3 flex items-center justify-start mb-4'}>
                    <span className={'bg-purple-400 p-2 rounded-lg'}>
                       <HiUserGroup className={'text-xl text-white'}/>
                    </span>
                    <h3 className="text-lg font-bold text-purple-950">Group Tour</h3>
                </div>
                <div className="flex flex-col gap-3">
                    {tour.groupTour ? (
                        <>
                            <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                                <h4 className="text-lg font-bold mb-3 text-purple-700 flex items-center">
                                    <BiMoney className="inline text-xl mr-2"/> Price
                                </h4>
                                <div className="mt-3 flex justify-around flex-wrap flex-col gap-1.5 text-base">
                                    <p className="text-gray-700">Domestic:
                                        Rp{tour.groupTour.price.domestic.toLocaleString()} /person</p>
                                    <p className="text-gray-700">International:
                                        Rp{tour.groupTour.price.foreign.toLocaleString()} /person</p>
                                </div>
                            </div>
                            <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                                <h4 className="text-lg font-bold mb-3 text-purple-700 flex items-center">
                                    <FaParachuteBox className="inline text-xl mr-2"/> Include
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-inside ml-4 mt-3">
                                    {tour.groupTour.include.map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="mr-2">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                                <h4 className="text-lg font-bold mb-3 text-purple-700 flex items-center">
                                    <AiFillHighlight className="inline text-xl mr-2"/> Highlight
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                                    {tour.groupTour.highlight.map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="mr-2">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                                <div className="text-base gap-1 mb-2 inline-flex items-center ">
                                    <MdLocationPin className="text-purple-600 inline text-xl mr-2"/> <span
                                    className={'font-semibold text-purple-600'}>Meeting Point: </span> {tour.groupTour.meetingPoint}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                            <h4 className="text-lg font-bold mb-3 text-purple-700">Group Tour is not available</h4>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default GroupTour;
