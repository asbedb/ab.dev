"use client"
import {useRef} from 'react'
import MainSidebar from './MainSidebar'
import MainContentArea from './MainContentArea'

function MainGrid() {
    const contentRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className="w-screen h-screen m-0 p-0 overflow-hidden">
            <div className="grid grid-flow-row grid-rows-[8fr] w-full h-full">
                <div className="grid grid-flow-col md:grid-cols-[2fr_8fr] grid-cols-[auto_4fr]  overflow-hidden">
                    <div className=''><MainSidebar mainContentTarget={contentRef!}/></div>
                    <div ref={contentRef} className='flex h-full w-full min-h-0 overflow-y-auto overflow-x-hidden'><MainContentArea/></div>
                </div>
            </div>
        </div>
    )
}

export default MainGrid