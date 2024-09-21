"use client"
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavLinks from "./NavLinks";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    //NavbarMenu,
    //NavbarMenuItem
} from "@nextui-org/navbar";
import SiteBrand from "./SiteBrand";
import NavMenuLinks from "./NavMenuLinks";

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
            <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-primary-200 p-2 overflow-hidden"> 
                <NavbarContent className="sm:flex gap-9 justify-center content-between">
                <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="md:hidden ml-5 text-secondary-50"
                        />
                    <NavbarBrand>
                        <SiteBrand/>
                    </NavbarBrand>
                        <NavMenuLinks/>
                        <NavLinks/>
                        <NavbarItem>
                            <ThemeSwitcher/>
                        </NavbarItem>
                </NavbarContent>
            </Navbar>
    );
};