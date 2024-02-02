import React from "react";
import Image from "next/image";
import hero_image from "@/public/assets/image/products/bromo/3.webp";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {HiPhone} from "react-icons/hi";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

const fadeInAnimation = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
};

const Banner: React.FC = () => {
    const whatsappMessage = `Hello Bromo Smart Tour, I'm interested in your tour packages.`;
    const phoneNumber = '6282143261091';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <motion.section
            id={'banner_cta'}
            className={'mt-12'}
            initial='hidden'
            animate='visible'
            variants={fadeInAnimation}
        >
            <div className={'relative mt-10 rounded-lg overflow-hidden'}>
                <div className="w-full h-80 relative">
                    <Image
                        src={hero_image}
                        alt={'hero-image'}
                        layout={'fill'}
                        objectFit={'cover'}
                        quality={100}
                        priority={true}
                    />
                    <div
                        className="absolute w-full h-full top-0 left-0 bg-gray-900/70 flex flex-col items-start justify-center px-24"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Explore East Java with Us</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Discover the beauty and cultural richness of East Java with our exclusive tour packages.
                            Immerse yourself in breathtaking landscapes and authentic experiences.
                        </p>
                        <Button asChild variant={'default'} className={cn('bg-cyan-500 hover:bg-cyan-600')}>
                            <Link href={url} className={'flex gap-2 items-center'}>
                                <HiPhone className={'text-xl'}/>
                                <span>Book Now</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Banner