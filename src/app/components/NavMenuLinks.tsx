import React from "react";
import Link from "next/link";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function NavMenuLinks(){

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
        
            <NavbarMenu className="md:hidden p-5">
            {navItems.map((item) => (
                <NavbarMenuItem  key={item.name} className="">
                    <Link key={item.name} href={item.href} className="w-full text-xl text-primary-800">
                        {item.name}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </>
            
    )
}