"use client"
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
//import NavLinks from "./NavLinks";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    //NavbarMenuToggle,
    //NavbarMenu,
    //NavbarMenuItem
} from "@nextui-org/navbar";
import SiteBrand from "./SiteBrand";
//import NavMenuLinks from "./NavMenuLinks";

export default function NavBar(){
    return (
            <Navbar className="bg-primary-200 p-2 overflow-hidden"> 
                <NavbarContent>
                    <NavbarBrand className="flex flex-col">
                        <SiteBrand/>
                    </NavbarBrand>
                        <NavbarItem>
                            <ThemeSwitcher/>
                        </NavbarItem>
                </NavbarContent>
            </Navbar>
    );
};