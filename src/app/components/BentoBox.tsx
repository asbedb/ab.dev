import React from "react";
import AboutCard from "./AboutCard";
import LatestPosts from "./LatestPosts";
import Skills from "./Skills";
import Showcase from "./Showcase";
import PostContainer from "./PostContainer";

export default function BentoBox(){
    return(
        <>
            <div className="
                grid 
                auto-rows-auto 
                col-span-1
                gap-1
                py-4
                xl:grid-flow-col
                xl:col-span-3
                xl:px-72
                ">
                    <div className="flex h-full px-4 col-span-1 row-span-3 xl:col-start-2"><AboutCard/></div>
                    <div className="flex h-full px-4 row-span-1 col-span-1"><Showcase/></div>
                    <div className="flex h-full px-4 row-span-1 "><PostContainer><LatestPosts/></PostContainer></div>
                    
                    <div className="flex h-full px-4 xl:col-span-2 row-span-3"><Skills/></div>
                    
                    
            </div>
        </>
    )
}