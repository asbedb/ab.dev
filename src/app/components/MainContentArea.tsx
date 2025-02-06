"use client";
import { useState } from "react";
import AboutCard from './AboutCard'
import Skills from './Skills'
import FactsSlider from './FactsSlider'
import Career from "./Career";
import Projects from "./Projects";
import Connect from "./Connect";
import PostContainer from "./PostContainer";
import LatestPosts from "./LatestPosts";


function MainContentArea() {
    const [, setCurrentProject] = useState<string>("");

    const handleProjectChange = (projectKey: string) => {
        setCurrentProject(projectKey);
    };
    return (
        <div className='flex flex-col gap-4 p-4 w-screen'>
            <div className='flex flex-col 0 w-full gap-4 xl:flex-row justify-between'>
                <div className="flex-1 basis-0 min-w-0" id="home"><AboutCard/></div>
                <div className="flex-1 basis-0 min-w-0"><FactsSlider onProjectChange={handleProjectChange} /></div>
            </div>
            <div className='flex flex-col gap-4 w-full pb-4'>
                <div id="career"><Career /></div>
                <div id="projects"><Projects/></div>
                <div id="connect"><Connect/></div>
                <div id="updates"><PostContainer><LatestPosts></LatestPosts></PostContainer></div>
                <div id="career"><Skills/></div>   
            </div>
        </div>
    )
}

export default MainContentArea