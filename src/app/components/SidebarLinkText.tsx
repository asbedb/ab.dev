import React, { ReactNode } from 'react'

interface SidebarLinkProps{
    link: string,
    text: string,
    icon: string | ReactNode
    domainLink?: string,
}
const SidebarLinkText:  React.FC<SidebarLinkProps> = ({link, text, icon, domainLink}) =>  {

        const handleScrollToElement = (elementId: string) => {
            const element = document.getElementById(elementId);
            if (element) {
            element.scrollIntoView({
                behavior: "smooth",  
                block: "start",      
            });
            }
        };
        
        return (
            <a onClick={() => handleScrollToElement(link)} className='w-full' href={domainLink ? domainLink : "#"} target={domainLink? 'blank' : ''}>
                <div className='flex flex-row 
                                rounded-3xl
                                md:bg-primary-300 
                                text-secondary-400
                                px-2
                                py-1
                                gap-2
                                text-lg    
                                md:text-xl
                                md:hover:bg-primary-500
                                hover:cursor-pointer
                                hover:animate-pulse'>
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
                                    {icon}
                                </div>
                    <div className='flex items-center leading-snug font-bold'>{text}</div>
                </div>
            </a>
        )
    }

export default SidebarLinkText