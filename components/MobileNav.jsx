"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/Link";
import {  CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'welcome',
        path: '/'
    },
    {
        name: 'Cars',
        path: '/home'
    },

    {
        name: 'About us',
        path: '/aboutus'
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-red-600" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="text-white mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                    Carsi<span className="text-red-600">.</span>
                    </h1>
                </Link>
                </div>
                {/* nav */}
                <nav className="text-white flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname &&
                                    "text-red-600 border-b-2 border-red-600"
                            } text-xl capitalize hover:text-red-600 transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

