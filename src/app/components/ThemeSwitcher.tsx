import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Popover, PopoverTrigger, PopoverContent, Listbox, ListboxItem} from "@nextui-org/react";
import { FaFloppyDisk, FaSun, FaMoon, FaPaintbrush } from "react-icons/fa6";


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const [popOverOpen , setPopOverState]  = useState(false)
    const { theme, setTheme } = useTheme()



    useEffect(() => {
        setMounted(true);
    }, [theme]);

    const handleThemeChange = (newTheme : string) => {
        setTheme(newTheme);
        setPopOverState(false); // Close popover on selection
    };

    if (!mounted) return null;

    return (
        <>
            <div className="w-full">
                <Popover 
                isOpen={popOverOpen}
                onOpenChange={setPopOverState}
                placement="bottom">
                    <PopoverTrigger>
                        <div className="flex flex-row 
                                        rounded-3xl
                                        text-secondary-400
                                        px-2
                                        py-1
                                        gap-4
                                        text-lg
                                        md:bg-primary-300 
                                        md:min-w-max    
                                        md:text-xl
                                        md:hover:bg-primary-500
                                        hover:cursor-pointer
                                        hover:animate-pulse"
                                    >
                            <div className="
                                flex
                                bg-primary-600
                                rounded-full
                                w-[60px]
                                h-[60px]
                                items-center 
                                justify-evenly
                                hover:bg-primary-500
                                md:hover:bg-primary-900
                                    ">
                                <FaPaintbrush className="text-secondary-50 text-2xl md:text-3xl" />
                            </div>
                            <div className='hidden md:flex items-center leading-snug font-bold'>Theme</div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Listbox aria-label="Theme Switcher" className="text-primary-foreground">
                            <ListboxItem 
                                startContent={<FaMoon />} 
                                key="dark" 
                                onClick={() => handleThemeChange('dark')}>
                                Dark Mode 
                            </ListboxItem>
                            <ListboxItem 
                                startContent={<FaSun />} 
                                key="light" 
                                onClick={() => handleThemeChange('light')}>
                                Light Mode
                            </ListboxItem>
                            <ListboxItem 
                                startContent={<FaFloppyDisk />} 
                                key="modern" 
                                onClick={() => handleThemeChange('modern')}>
                                Modern Mode
                            </ListboxItem>
                            <ListboxItem 
                                startContent={<FaFloppyDisk />} 
                                key="terminal" 
                                onClick={() => handleThemeChange('terminal')}>
                                Terminal Mode
                            </ListboxItem>
                        </Listbox>
                    </PopoverContent>
                </Popover>
            </div>
        </>

    );
};

export default ThemeSwitcher;