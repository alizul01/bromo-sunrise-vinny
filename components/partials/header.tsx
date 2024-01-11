'use client'
import React, {useEffect, useState} from "react";
import logo from '@/public/assets/image/logo/logo.png';
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import NAVIGATION_DATA from "@/data/navigation";

const Header: React.FC = () => {
    const [isHomePage, setIsHomePage] = useState(false);
    const router = usePathname();
    const currentRoute = router.split('/')[1];

    useEffect(() => {
        setIsHomePage(currentRoute !== '');
    }, [currentRoute]);

    return (
        <nav className={"w-full z-20 top-0 start-0 bg-white"}>
            <div className={'container'}>
                <div className="flex flex-wrap items-center justify-between py-2">
                    <Link href={`/`} className={'flex gap-1 items-center'}>
                        <Image src={logo} alt={'Vinny Bromo Logo Tour'} width={58} height={58}
                               className={'cursor-pointer'}/>
                    </Link>
                    <div className={'flex items-center justify-end gap-7'}>
                        {NAVIGATION_DATA.map((item, index) => {
                                return (
                                    <Link href={item.link} key={index}
                                          className={`text-base font-normal text-gray-700 hover:text-gray-900`}>
                                        {item.title}
                                    </Link>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header