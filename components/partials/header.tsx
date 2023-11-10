'use client'

import {Button, Navbar} from "flowbite-react";
import React from "react";
import logo from '@/public/assets/image/logo/logo.png';
import Image from "next/image";
import {HiPhone} from "react-icons/hi";
import {usePathname} from "next/navigation";

const Header: React.FC = () => {
    // Get the current route using useRouter
    const router = usePathname();
    const currentRoute = router.split('/')[1];

    const isRouteActive = (route: string) => {
        return currentRoute === route;
    };

    return (
        <Navbar fluid rounded className={'bg-transparent z-20'}>
            <Navbar.Brand href="/">
                <Image src={logo} alt={'Vinny Bromo Logo Tour'} width={50} height={50}/>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={isRouteActive('')}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    href="/tours"
                    active={isRouteActive('tours')}
                >
                    Tours
                </Navbar.Link>
                <Navbar.Link
                    href="/destinations"
                    active={isRouteActive('destinations')}
                >
                    Destinations
                </Navbar.Link>
                <Navbar.Link
                    href="/contact"
                    active={isRouteActive('contact')}
                >
                    Contact
                </Navbar.Link>
                <Button outline className={'md:hidden block'} >
                    Book Now
                    <HiPhone className={'ml-2'} />
                </Button>
            </Navbar.Collapse>
            <Button className={'hidden md:block'}>
                Book Now
                <HiPhone className={'ml-2'} />
            </Button>
        </Navbar>
    )
}

export default Header