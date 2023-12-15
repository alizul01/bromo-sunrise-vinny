'use client'
import React, {useEffect, useState} from "react";
import logo from '@/public/assets/image/logo/logo.png';
import Image from "next/image";
import {HiPhone} from "react-icons/hi";
import {usePathname} from "next/navigation";
import Link from "next/link";

const Header: React.FC = () => {
    const [isTourRoute, setIsTourRoute] = useState(false);
    const router = usePathname();
    const currentRoute = router.split('/')[1];

    useEffect(() => {
        setIsTourRoute(currentRoute === 'tours');
    }, [currentRoute]);

    return (
        <div className={'sticky top-0'}>
            <nav
                className={"absolute w-full z-20 top-0 start-0" + (isTourRoute ? ' bg-white' : 'bg-transparent')}>
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Image src={logo} alt={'Vinny Bromo Logo Tour'} width={50} height={50}/>
                    <div className="flex md:order-2 space-x-3 md:space-x-0">
                        <button type="button"
                                className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800">
                            <HiPhone className={'inline-block mr-2'}/>
                            Call Us
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                         id="navbar-sticky">
                        <ul className="flex flex-col md:p-0 rounded-lg md:space-x-8 md:flex-row">
                            <li>
                                <Link href="/"
                                      className={"block py-2 px-3 bg-orange-700 rounded md:bg-transparent md:p-0 " + (isTourRoute ? 'text-black font-extralight' : 'text-orange-400 font-medium')}
                                      aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/tours"
                                      className={"block py-2 px-3 bg-orange-700 rounded md:bg-transparent md:p-0 " + (isTourRoute ? 'text-orange-400 font-medium' : ' text-white')}
                                      aria-current="page">
                                    Tour
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header