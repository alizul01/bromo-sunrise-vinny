// components/partials/FooterPartials.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer_image from '@/public/assets/image/gallery/6.webp';
import logo from '@/public/assets/image/logo/logo.png';
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
    description?: string;
    contact: {
        phone: string;
        schedule: string[];
        socialLinks: SocialLink[];
    };
    services: Service;
    company: CompanySection;
}

const footerContent: FooterContent = {
    description: "We provide tour packages around East Java for domestic and international tourists.",
    contact: {
        phone: "+6282143261091",
        schedule: [
            "Monday to Friday: 24 Hours",
            "Weekend: 10am - 3pm",
        ],
        socialLinks: [
            {icon: <FacebookIcon/>, href: "/", label: "Facebook"},
            {icon: <InstagramIcon/>, href: "/", label: "Instagram"},
            {icon: <TwitterIcon/>, href: "/", label: "Twitter"},
        ],
    },
    services: {
        title: "Services",
        items: [
            {label: "Bromo", href: "#"},
            {label: "Tumpaksewu", href: "#"},
            {label: "Ijen Blue Fire", href: "#"},
        ],
    },
    company: {
        title: "Bromo Smart Tour",
        items: [
            {label: "About", href: "#"},
            {label: "Contact  Us", href: "/contact"},
        ],
    },
};

export const FooterPartials = () => {
    const whatsappMessage = `Hello Bromo Smart Tour, I'm interested in your services.`;
    const phoneNumber = '6282143261091';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <Image src={logo} alt={'logo'} width={50} height={50} quality={75}/>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            {footerContent.company.title}
                        </span>
                    </Link>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            {footerContent.description}
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <Link
                            href={url}
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            {footerContent.contact.phone}
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@lorem.mail"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            info@lorem.mail
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Address:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            312 Lovely Street, NY
                        </a>
                    </div>
                </div>
                <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
                    <div className="flex items-start justify-start mt-3 space-x-3">
                        <ul className="flex gap-6">
                            {footerContent.contact.socialLinks.map((socialLink, index) => (
                                <li key={index}>
                                    <Link href={socialLink.href} rel="noreferrer" target="_blank"
                                          className="text-gray-700 transition hover:opacity-75">
                                        <span className="sr-only">{socialLink.label}</span>
                                        {socialLink.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Follow us for the latest news and updates.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2024 Bromo Smart Tour Indonesia. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a
                            href="/"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            F.A.Q
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Terms &amp; Conditions
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const FooterPartialsBak: React.FC = () => {
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
                            <Link href={url}
                                  className="text-xl font-medium text-gray-900 transition hover:opacity-75 block">
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
                                    <Link href={socialLink.href} rel="noreferrer" target="_blank"
                                          className="text-gray-700 transition hover:opacity-75">
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
                            &copy; 2023. Bromo Smart Tour. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPartials;
