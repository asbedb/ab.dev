"use client"
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    interface NavItem {
        name: string;
        href: string;
    }
    
    const navItems : NavItem[] =[    
        {name: `Home`, href:'#'},
        {name: `About`, href:'#'},
    ]
    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:flex"
                />     
                <NavbarBrand>
                    <p className="font-bold text-inherit">asbedb.dev/</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            {item.name}
                        </Link>
                        ))}
                        <NavbarItem>
                            <ThemeSwitcher/>
                        </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};
export default NavBar;