import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/partials/header";
import React from "react";
import FooterPartials from "@/components/partials/footer";

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'Vinny Bromo Sunrise Tour',
    description: 'Vinny Bromo Sunrise Tour is a tour and travel agency in Malang, East Java, Indonesia.',
    authors: {
        name: 'Muhammad Ali Zulfikar',
        url: 'https://www.alizul01.my.id',
    },
    abstract: 'Vinny Bromo Sunrise Tour is a tour and travel agency in Malang, East Java, Indonesia. We provide tour packages around East Java for domestic and international tourists. We also provide car rental services for those of you who want to travel in Malang and surrounding areas. We are ready to serve you 24 hours.',
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
                url: '/assets/image/products/bromo/1.png',
                alt: 'Bromo Tour',
                type: 'image/png',
                height: 630,
            },
        ],
    },
    applicationName: 'Vinny Bromo Sunrise Tour',
    creator: 'Vinny Bromo Sunrise Tour',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <FooterPartials/>
        </body>
        </html>
    )
}
