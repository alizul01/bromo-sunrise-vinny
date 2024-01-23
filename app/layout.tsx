import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import FooterPartials from "@/components/partials/footer";
import {Toaster} from "@/components/ui/toaster";
import TopBar from "@/components/partials/top-bar";
import Header from "@/components/partials/header";

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'Bromo Smart Tour',
    description: 'Bromo Smart Tour is a tour and travel agency in Malang, East Java, Indonesia.',
    authors: {
        name: 'Muhammad Ali Zulfikar',
        url: 'https://www.alizul01.my.id',
    },
    abstract: 'Bromo Smart Tour is a tour and travel agency in Malang, East Java, Indonesia. We provide tour packages around East Java for domestic and international tourists. We also provide car rental services for those of you who want to travel in Malang and surrounding areas. We are ready to serve you 24 hours.',
    icons: {
        icon: '/favicon.ico',
    },
    keywords: [
        'tour',
        'travel',
        'tour and travel',
        'tour packages',
        'car rental',
        'bromo tour',
        'bromo sunrise tour',
        'bromo midnight tour',
        'bromo ijen tour',
        'bromo malang tour',
        'bromo malang midnight tour',
        'bromo malang ijen tour',
        'bromo malang midnight ijen tour',
        'malang tour',
        'malang midnight tour',
    ],
    robots: {
        follow: true,
        index: true,
    },
    category: 'Tour and Travel',
    referrer: 'no-referrer-when-downgrade',
    twitter: {
        images: [
            {
                url: '/assets/image/products/bromo/1.webp',
                alt: 'Bromo Tour',
                type: 'image/png',
                height: 630,
            },
        ],
    },
    applicationName: 'Bromo Smart Tour',
    creator: 'Bromo Smart Tour',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Toaster/>
        <FooterPartials/>
        </body>
        </html>
    )
}
