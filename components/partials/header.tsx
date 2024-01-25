'use client'
import React, {useEffect, useState} from "react";
import logo from '@/public/assets/image/logo/logo.png';
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import NAVIGATION_DATA from "@/data/navigation";
import {BiMenu} from "react-icons/bi";
import {motion, AnimatePresence} from "framer-motion";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = usePathname();
    const currentRoute = router.split('/')[1];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false); // Close the menu when the route changes
    }, [currentRoute]);

    return (
        <nav
            className="w-full sticky z-20 top-0 start-0 bg-white"
        >
            <div className="container max-w-7xl">
                <div className="flex flex-wrap items-center justify-between py-2">
                    <Link href="/" passHref className="flex items-center">
                            <Image src={logo} alt="Vinny Bromo Logo Tour" width={58} height={58} className="cursor-pointer"/>
                    </Link>

                    <div className={`hidden sm:flex items-center justify-end gap-7 ${isMenuOpen ? 'hidden' : ''}`}>
                        {NAVIGATION_DATA.map((item, index) => (
                            <Link key={index} href={item.link} passHref className={`text-sm font-normal ${currentRoute === item.link.replace('/', '') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
                                >
                                    {item.title}
                            </Link>
                        ))}
                    </div>

                    <div className="sm:hidden flex items-center justify-end">
                        <button
                            className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-gray-900 hover:border-gray-900 focus:outline-none"
                            aria-label="Menu"
                            onClick={toggleMenu}
                        >
                            <BiMenu className="text-3xl"/>
                        </button>
                    </div>
                </div>

                {/* Responsive Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="sm:hidden flex flex-col items-start gap-2 mt-2 py-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {NAVIGATION_DATA.map((item, index) => (
                                <Link key={index} href={item.link} passHref className={`p-2 bg-cyan-100 w-full rounded-md text-sm font-normal ${currentRoute === item.link.replace('/', '') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
                                        {item.title}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Header;

// Other code remains unchanged
