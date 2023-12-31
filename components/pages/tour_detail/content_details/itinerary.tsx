import React from "react";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Itinerary: React.FC<{ itinerary: { timeRange: string; activity: string }[] }> = ({ itinerary }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white p-6 shadow-md rounded-lg mt-4">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Itinerary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {itinerary.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start mb-4 cursor-pointer"
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                            <div className="mr-4 text-orange-500">
                                <FaClock size={20} />
                            </div>
                            <div>
                                <p className="text-base font-bold text-gray-700 mb-1">{item.timeRange}</p>
                                <p className="text-sm text-gray-500">{item.activity}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    *Itinerary can be changed at any time according to the situation and conditions in the field.
                </p>
            </div>
        </motion.div>
    );
};

export default Itinerary;
