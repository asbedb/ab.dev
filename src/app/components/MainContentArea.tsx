"use client";
import AboutCard from './AboutCard'
import Skills from './Skills'
import Career from "./Career";
import Projects from "./Projects";
import Connect from "./Connect";
import Technologies from "./Technologies";


function MainContentArea() {
    return (
        <div className='flex flex-col gap-4 p-4 w-full'>
            <div className="flex-1 basis-0 min-w-0" id="home"><AboutCard/></div>
            <div className="flex-1 basis-0 min-w-0"><Technologies/></div>
            <div id="career"><Career /></div>
            <div id="projects"><Projects/></div>
            <div id="connect"><Connect/></div>
            <div id="career"><Skills/></div>   
        </div>
    )
}

export default MainContentArea