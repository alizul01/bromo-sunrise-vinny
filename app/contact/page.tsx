"use client"

import React from "react";
import {FaPhoneAlt, FaInstagram, FaWhatsapp, FaMapMarked} from "react-icons/fa";
import ContactCard from "@/components/component/contact-card";
import FaqComponents from "@/components/component/faqComponents";
import Image from "next/image";
import hero_image from "@/public/assets/image/products/tumpaksewu/2.webp";
import Breadcrumbs from "@/components/partials/breadcrumbs";
import {ChevronRight} from "lucide-react";

const Contact: React.FC = () => {
    return (
        <section>
            <div className={'relative overflow-hidden'}>
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
                        className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center px-24 bg-purple-950/40">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Contact Us
                        </h2>
                        <Breadcrumbs
                            homeElement={'Home'}
                            separator={<span> <ChevronRight width={14} /> </span>}
                            activeClasses='font-bold text-white'
                            containerClasses='flex text-white items-center font-light'
                            listClasses='hover:underline mx-2'
                            capitalizeLinks
                        />
                    </div>
                </div>
            </div>
            <div className={'mx-auto max-w-7xl mt-10'}>
                <h1 className={'text-3xl font-bold mb-6'}>
                    Contact Us
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ContactCard
                        icon={<FaPhoneAlt/>}
                        title="Phone"
                        content="+1 (123) 456-7890"
                    />
                    <ContactCard
                        icon={<FaInstagram/>}
                        title="Instagram"
                        content="@your_instagram"
                    />
                    <ContactCard
                        icon={<FaWhatsapp/>}
                        title="WhatsApp"
                        content="+1 (123) 456-7890"
                    />
                    <ContactCard
                        icon={<FaMapMarked/>}
                        title="Address"
                        content="Your Location, City"
                    />
                </div>
            </div>
            <FaqComponents/>
        </section>
    );
};

export default Contact;
