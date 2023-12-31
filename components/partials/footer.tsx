// components/partials/FooterPartials.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer_image from '@/public/assets/image/gallery/6.webp';
import {
    FacebookIcon,
    InstagramIcon,
    PhoneCall,
    TwitterIcon,
} from "lucide-react";

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

interface Service {
    title: string;
    items: Array<{ label: string; href: string }>;
}

interface CompanySection {
    title: string;
    items: Array<{ label: string; href: string }>;
}

interface FooterContent {
    contact: {
        phone: string;
        schedule: string[];
        socialLinks: SocialLink[];
    };
    services: Service;
    company: CompanySection;
}

const footerContent: FooterContent = {
    contact: {
        phone: "+6282143261091",
        schedule: [
            "Monday to Friday: 24 Hours",
            "Weekend: 10am - 3pm",
        ],
        socialLinks: [
            { icon: <FacebookIcon />, href: "/", label: "Facebook" },
            { icon: <InstagramIcon />, href: "/", label: "Instagram" },
            { icon: <TwitterIcon />, href: "/", label: "Twitter" },
        ],
    },
    services: {
        title: "Services",
        items: [
            { label: "Bromo", href: "#" },
            { label: "Tumpaksewu", href: "#" },
            { label: "Ijen Blue Fire", href: "#" },
        ],
    },
    company: {
        title: "Company",
        items: [
            { label: "About", href: "#" },
            { label: "Contact  Us", href: "/contact" },
        ],
    },
};

const FooterPartials: React.FC = () => {
    const whatsappMessage = `Hello Bromo Smart Tour, I'm interested in your services.`;
    const phoneNumber = '6282143261091';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <footer className="bg-white lg:grid lg:grid-cols-5 mt-24">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <Image
                    src={footer_image}
                    alt="footer"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                <PhoneCall size={16} className={'inline-block mr-2'}/>
                Contact us
              </span>
                            <Link href={url} className="text-xl font-medium text-gray-900 transition hover:opacity-75 block">
                                {footerContent.contact.phone}
                            </Link>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            {footerContent.contact.schedule.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            {footerContent.contact.socialLinks.map((socialLink, index) => (
                                <li key={index}>
                                    <Link href={socialLink.href} rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                        <span className="sr-only">{socialLink.label}</span>
                                        {socialLink.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">{footerContent.services.title}</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                {footerContent.services.items.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-gray-700 transition hover:opacity-75">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">{footerContent.company.title}</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                {footerContent.company.items.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-gray-700 transition hover:opacity-75">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <Link href="#" className="text-gray-500 transition hover:opacity-75">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="text-gray-500 transition hover:opacity-75">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="text-gray-500 transition hover:opacity-75">
                                    Cookies
                                </Link>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2022. Company Name. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPartials;
