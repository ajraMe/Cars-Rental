import Link from 'next/link';
import {Button} from "./ui/button";
import {SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Container from "@/components/Container";
import React from "react";


const NavBar = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <Container className={"start__container"}>
                <div className="container mx-auto flex justify-between items-center">
                    {/* logo */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Carsi<span className="text-red-600">.</span>
                        </h1>
                    </Link>

                    {/* desktop nav */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav/>
                        <Link href="/contact">
                            <Button>Contact Us</Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-centergap-6">
                        <SignedOut>
                            <SignInButton>
                                <Button>Sign in / Sign up</Button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton/>
                        </SignedIn>
                    </div>
                    {/* mobile nav */}
                    <div className="xl:hidden">
                        <MobileNav/>
                    </div>

                </div>
            </Container>
        </header>
    );
};

export default NavBar
