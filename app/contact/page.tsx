"use client"

import React from "react";
import {FaPhoneAlt, FaInstagram, FaWhatsapp, FaMapMarked} from "react-icons/fa";
import Header from "@/components/partials/header";
import ContactCard from "@/components/component/contact-card";
import FaqComponents from "@/components/component/faqComponents";

const Contact: React.FC = () => {
    return (
        <section>
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
