import React from "react";
import Link from "next/link";
import { NavbarItem } from "@nextui-org/react";

export default function NavLinks(){

    interface NavItem {
        name: string;
        href: string;
    }
    
    const navItems : NavItem[] =[    
        {name: `portfolio`, href:'#'},
        {name: `career`, href:'#'},
        {name: `the-story`, href:'#'},
        {name: `connect`, href:'#'},
    ]


    return(
        <>
        
            <NavbarItem className="hidden md:block">
            {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-xl text-primary-800 p-5">
                    {item.name}
                </Link>
                ))}
            </NavbarItem>
        </>
    )
}