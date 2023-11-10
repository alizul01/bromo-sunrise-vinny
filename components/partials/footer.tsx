'use client'

import React from "react";
import { motion } from "framer-motion";
import logo from '@/public/assets/image/logo/logo.png';
import {Footer} from "flowbite-react";


const FooterPartials: React.FC = () => {
    return (
        <Footer className={'container mx-auto bg-transparent shadow-transparent'} container={true}>
            <Footer.Copyright href="https://www.instagram.com/zulverse" by="Zulverse™" year={2023} />
            <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}

export default FooterPartials