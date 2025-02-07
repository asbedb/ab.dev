"use client";
import { useState, useEffect, useRef, RefObject } from 'react';
import SiteBrand from './SiteBrand';
import SidebarLinkText from './SidebarLinkText';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes, FaHome, FaSuitcase, FaEnvelope, FaRssSquare, FaFolder } from "react-icons/fa";

interface SideBarProps {
    mainContentTarget: RefObject<HTMLDivElement>;
}

const MainSidebar: React.FC<SideBarProps> = ({ mainContentTarget }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (!mainContentTarget.current) return;
        
        
        //effect logic for target content blur when sidebar is active
        if (isOpen) {
            mainContentTarget.current.style.filter = "blur(20px)";
            mainContentTarget.current.style.pointerEvents = "none"; 
            mainContentTarget.current.style.touchAction = "none";
            mainContentTarget.current.style.overflow = "hidden" 
        } else {
            mainContentTarget.current.style.filter = "none";
            mainContentTarget.current.style.pointerEvents = "auto";
            mainContentTarget.current.style.touchAction = "auto";
            mainContentTarget.current.style.overflow = ""   
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, mainContentTarget]);
    
    

    return (
        <>
            <button
                className={isOpen ? `absolute top-4 left-64 -translate-x-full z-50 md:hidden 
                                    bg-primary-600 text-secondary-50 p-3 
                                    rounded-full hover:bg-primary-500` : `absolute top-4 left-4 z-40 md:hidden 
                                    bg-primary-600 text-secondary-50 p-3 
                                    rounded-full hover:bg-primary-500`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div
                ref={sidebarRef}
                className={`
                fixed top-0 left-0 h-screen w-fit p-2 bg-primary text-secondary-100 
                transition-transform duration-300 z-40 rounded-tr-3xl 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 md:relative md:w-full overflow-hidden
                `}
            >
                <div className="px-5">
                    <SiteBrand />
                </div>
                <hr className="hidden md:flex my-4 h-0.5 border-t-0 bg-black/20 dark:bg-white/20" />
                <div className="flex flex-col items-center md:items-start gap-y-2 md:gap-y-4 px-4 w-full h-full">
                    <SidebarLinkText link="home" text="Home" icon={<FaHome className="text-secondary-50 text-2xl md:text-3xl" />} />
                    <SidebarLinkText link="career" text="Career" icon={<FaSuitcase className="text-secondary-50 text-2xl md:text-3xl" />} />
                    <SidebarLinkText link="projects" text="Projects" icon={<FaFolder className="text-secondary-50 text-2xl md:text-3xl" />} />
                    <SidebarLinkText link="connect" text="Connect" icon={<FaEnvelope className="text-secondary-50 text-2xl md:text-3xl" />} />
                    <SidebarLinkText link="updates" text="Updates" icon={<FaRssSquare className="text-secondary-50 text-2xl md:text-3xl" />} />
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    );
}

export default MainSidebar;
