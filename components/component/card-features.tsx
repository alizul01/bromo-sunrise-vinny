import React, {useState} from "react";
import Image from "next/image";
import {HiArrowRight} from "react-icons/hi";
import Link from "next/link";
import {motion, useAnimation} from "framer-motion";

interface CardFeaturesProps {
    title: string;
    slug: string;
    description: string;
    price: number[];
    image: string;
}

const CardFeatures: React.FC<CardFeaturesProps> = ({
                                                       title,
                                                       slug,
                                                       price,
                                                       image,
                                                   }) => {
    const formatToRupiah = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(amount);
    };

    const controls = useAnimation();

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
        controls.start({opacity: 1, y: 0});
    };

    const handleHoverExit = () => {
        setIsHovered(false);
        controls.start({opacity: 0, y: 20});
    };

    return (
        <Link href={`/${slug}`}>
            <motion.div
                className="relative w-80 h-[28rem] mx-auto rounded-xl overflow-hidden cursor-pointer"
                onHoverStart={handleHover}
                onHoverEnd={handleHoverExit}
            >
                <Image
                    src={`/assets/image/products/${image}/1.webp`}
                    alt={title}
                    fill
                    sizes={"100%"}
                    className="h-[28rem] w-full object-cover"
                    loading={"eager"}
                />

                <div
                    className="absolute inset-0 bg-gradient-to-t from-black to-black/20 opacity-30 rounded-md"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Set opacity to 0 initially
                    animate={controls}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black to-black/20 opacity-80 rounded-md"
                />
                <div className="absolute inset-0 flex items-end justify-start p-4">
                    <div className={"flex flex-col gap-2"}>
                    <motion.div
                            animate={{y: isHovered ? -10 : 0}}
                            className={"flex items-center"}
                        >
                            <h2 className="text-white text-xl font-bold shadow-lg">{title}</h2>
                            <p>
                                <HiArrowRight className="text-white inline-block ml-2"/>
                            </p>
                        </motion.div>
                        <div className="text-white text-sm font-light">
                            Starting from <br/>
                            <span className={"font-bold text-lg"}>
                                {formatToRupiah(price[1])} / Person
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default CardFeatures;
