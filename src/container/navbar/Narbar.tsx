'use client'

import { BiMenu } from "react-icons/bi";
import NavbarLink from "./navbar-components/navbar-link";
import NavbarLogo from "./navbar-components/navbar-logo";
import { useState } from "react";
import NavbarMobileLink from "./navbar-components/navbar-mobile-link";
import NavbarAppearMobile from "./navbar-components/navbar-appear";

export default function Navbar() {
    const [menuClick, setMenuClick] = useState(false)

    return (
        <>
        <div className="hidden md:w-full md:flex md:items-center md:justify-center md:border md:border-white/10">
            <div className="bg-[#22202A] flex flex-row gap-10 p-2 m-10 items-center justify-center rounded-full w-fit border border-white/10">
                <NavbarLink href="#home">Home</NavbarLink>
                <NavbarLink href="#about">About</NavbarLink>
                <NavbarLink href="#habilities">Habilities</NavbarLink>
                <NavbarLogo />
                <NavbarLink href="#port">Portfolio</NavbarLink>
                <NavbarLink href="#projects">Projects</NavbarLink>
                <NavbarLink href="#contact">Contact</NavbarLink>
            </div>
        </div>
        <div className="md:hidden w-full flex items-center justify-center">
            <div className="bg-[#22202A] w-full h-15 flex flex-row gap-10 items-center p-2 m-10 rounded-full border border-white/10">
                <NavbarLogo />
                <BiMenu onClick={() => setMenuClick(!menuClick)} className="h-12 w-15 text-white cursor-pointer ml-auto" />
            </div>
        </div>
        {menuClick ?
            <NavbarAppearMobile>
                <div className="md:hidden w-full flex flex-row items-end justify-end">
                    <div className="bg-[#22202A]/10 rounded-2xl border border-white/10 w-40 h-60 mr-10">
                        <NavbarMobileLink href="#home">Home</NavbarMobileLink>
                        <NavbarMobileLink href="#hability">Ability</NavbarMobileLink>
                        <NavbarMobileLink href="#projects">Projects</NavbarMobileLink>
                        <NavbarMobileLink href="#contact">Contact</NavbarMobileLink>
                    </div>
                </div>
            </NavbarAppearMobile>
            : null
        }
        </>
    )
}
