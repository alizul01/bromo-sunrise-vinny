import React from "react";
import {motion} from "framer-motion";
import {TourTripProps} from "@/components/pages/tour_detail/content";
import {HiUser} from "react-icons/hi";
import {BiMoney} from "react-icons/bi";
import {FaParachuteBox} from "react-icons/fa";
import {AiFillHighlight} from "react-icons/ai";
import {MdLocationPin} from "react-icons/md";

const PrivateTour: React.FC<TourTripProps> = ({tour}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div>
                <div className={'bg-blue-50 py-6 gap-4 px-3 flex items-center justify-start mb-4'}>
                    <span className={'bg-blue-400 p-2 rounded-lg'}>
                       <HiUser className={'text-xl text-white'}/>
                    </span>
                    <h3 className="text-lg font-bold text-blue-900">Private Tour</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                        <h4 className="text-lg font-bold mb-3 text-blue-700 flex items-center">
                            <BiMoney className="inline text-xl mr-2"/> Price
                        </h4>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                    <h5 className="text-base font-bold text-gray-700 mb-2">Domestic</h5>
                                    <div className={'flex flex-col gap-6 text-sm md:text-base'}>
                                        {tour.privateTour.price.domestic.map((price, index) => (
                                            <div key={index}
                                                 className="flex justify-between items-center bg-blue-200 p-2 rounded-md">
                                                <span>{index + 1} person:</span>
                                                <span className="font-bold">Rp{price.toLocaleString()} / person</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                                    <h5 className="text-base font-bold text-gray-700 mb-2">International</h5>
                                    <div className={'flex flex-col gap-6 text-sm md:text-base'}>
                                        {tour.privateTour.price.foreign.map((price, index) => (
                                            <div key={index} className="flex justify-between items-center bg-indigo-200 p-2 rounded-md">
                                                <span>{index + 1} person:</span>
                                                <span
                                                    className="font-bold">Rp. {price.toLocaleString()},- / person</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                        <h4 className="text-lg font-bold mb-3 text-blue-700 flex items-center">
                            <FaParachuteBox className="inline text-xl mr-2"/> Include
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-4">
                            {tour.privateTour.include.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                        <h4 className="text-lg font-bold mb-3 text-blue-700 flex items-center">
                            <AiFillHighlight className="inline text-xl mr-2"/> Highlight
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                            {tour.privateTour.highlight.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white">
                        <div className="text-base gap-1 mb-2 inline-flex items-center ">
                            <MdLocationPin className="text-blue-600 inline text-xl mr-2"/> <span
                            className={'font-semibold text-blue-600'}>Meeting Point: </span> {tour.privateTour.meetingPoint.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivateTour;
