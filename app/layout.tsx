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
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        <FooterPartials />
        </body>
        </html>
    )
}
