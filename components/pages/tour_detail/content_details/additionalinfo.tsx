import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillAlt, FaRegCreditCard, FaChild } from "react-icons/fa"; // Import the icons you need

interface AdditionalInfoProps {
    requirements?: string[];
    childrenCategory?: string;
    exclude?: string[];
    paymentMethods?: string[];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
                                                           requirements,
                                                           childrenCategory,
                                                           exclude,
                                                           paymentMethods,
                                                       }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
            <div className="bg-white p-6 shadow-md rounded-lg">
                {requirements && (
                    <div className="mb-4">
                        <h4 className="text-base font-bold text-gray-700 mb-2">Keperluan yang Perlu Dibawa:</h4>
                        <ul className="list-disc list-inside ml-4">
                            {requirements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {childrenCategory && (
                    <div className="mb-4">
                        <h4 className="flex items-center text-base font-bold text-blue-700 mb-2">
                            <FaChild className="mr-2" />
                            Kategori Anak-anak:
                        </h4>
                        <p className="text-blue-500">{childrenCategory}</p>
                    </div>
                )}
                {exclude && (
                    <div className="mb-4">
                        <h4 className="text-base font-bold text-gray-700 mb-2">Tour Exclude:</h4>
                        <ul className="list-disc list-inside ml-4">
                            {exclude.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {paymentMethods && (
                    <div className="mb-4">
                        <h4 className="flex items-center text-base font-bold text-green-700 mb-2">
                            Metode Pembayaran:
                        </h4>
                        <div className="flex flex-wrap gap-4">
                            {paymentMethods.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    {item === "cash" ? (
                                        <span className="flex items-center text-green-500">
                            <FaMoneyBillAlt className="mr-2" />
                                            {item}
                        </span>
                                    ) : (
                                        <span className="flex items-center text-green-500">
                            <FaRegCreditCard className="mr-2" />
                                            {item}
                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default AdditionalInfo;
