"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection: React.FC = () => {
    const images = [
        "/assets/image/products/bromo/1.jpg",
        "/assets/image/products/bromo/2.jpg",
        "/assets/image/products/ijen-blue-fire/1.jpg",
        "/assets/image/products/ijen-blue-fire/2.jpg",
        "/assets/image/products/tumpaksewu/1.jpg",
        "/assets/image/products/tumpaksewu/2.jpg",
        "/assets/image/products/countryside-cycling/1.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <section className="relative container mx-auto my-4">
            <div className="absolute top-0 left-0 opacity-70 -z-10">
                <Image src="/assets/image/utils/top-gallery.png" alt="Map" width={1920} height={1080} />
            </div>

            <div className={'flex flex-col items-center sm:items-start gap-1 py-8 '}>
                <h2 className={'text-xl xl:text-2xl font-bold text-gray-900 tracking-wide uppercase'}>
                    Gallery
                </h2>
                <div>
                    <p className={'text-gray-600 font-light text-lg text-center'}>
                        Look at our gallery, and see how beautiful Indonesia is.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative h-72 md:h-96 lg:h-80 cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => handleImageClick(image)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                    >
                        <Image
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        key="modal"
                        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="max-w-screen-md overflow-hidden"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                        >
                            <Image src={selectedImage} alt="Selected Image" layout="responsive" width={1200} height={800} />
                            <button className="absolute top-4 right-4 text-white" onClick={handleClose}>
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
