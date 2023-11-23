"use client"

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/partials/header";
import React from "react";
import FooterPartials from "@/components/partials/footer";
import {CustomFlowbiteTheme, Flowbite} from "flowbite-react";
import customTheme from "@/components/utils/theme";
const inter = Inter({subsets: ['latin']})



const metadata: Metadata = {
    title: 'Vinny Bromo Sunrise Tour',
    description: 'Vinny Bromo Sunrise Tour is a tour and travel agency in Malang, East Java, Indonesia.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Flowbite theme={{theme: customTheme}}>
            <div className={'z-30 absolute w-full'}>
                <Header />
            </div>
            {children}
            <FooterPartials />
        </Flowbite>
        </body>
        </html>
    )
}
