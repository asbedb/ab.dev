'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import { FaFloppyDisk, FaSun, FaMoon, FaPaintbrush } from "react-icons/fa6";

import { Button } from "@nextui-org/react";


export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme()

    useEffect(()=>{
        setMounted(true);
    }, [])
    if(!mounted) return null
    return(
        <>
            <Dropdown>
                <NavbarItem>
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-5 bg-transparent data-[hover=true]:bg-transparent text-3xl text-primary-foreground"
                            endContent="\/"
                            radius="sm"
                            variant="light"
                        >
                            <FaPaintbrush/>
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                    aria-label="Themes"
                    className="w-[340px]"
                    itemClasses={{
                    base: "gap-4",
                    }}
                >
                    <DropdownItem
                    key="dark"
                    description="Dark Mode Theme"
                    startContent={<FaMoon/>}
                    onClick={()=> setTheme('dark')}
                    >
                        Dark Mode
                    </DropdownItem>
                    <DropdownItem
                    key="light"
                    description="Light Mode Theme"
                    startContent={<FaSun/>}
                    onClick={()=> setTheme('light')}
                    >
                        Light Mode
                    </DropdownItem>
                    <DropdownItem
                    key="Modern"
                    description="Dark Mode Theme"
                    startContent={<FaFloppyDisk/>}
                    onClick={()=> setTheme('modern')}
                    >
                        Modern Mode
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}