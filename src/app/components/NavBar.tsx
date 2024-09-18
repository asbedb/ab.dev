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
            <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-primary-50 text-primary-foreground p-2"> 
                <NavbarContent className="sm:flex gap-5" justify="center">
                <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="md:hidden"
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