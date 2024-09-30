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
                gap-4
                py-4
                w-full
                xl:grid-flow-col
                xl:col-span-3
                max-w-[1920px] mx-auto
                ">
                    <div className="flex h-fit w-full max-w-full 
                        col-span-1 
                        row-span-3 
                        xl:col-start-2"><AboutCard/></div>
                    <div className="flex h-full w-full max-w-full 
                        row-span-1 
                        col-span-1"><Showcase/></div>
                    <div className="flex h-fit w-full max-w-full 
                        xl:col-span-2 
                        row-span-2 
                        xl:col-start-3"><Skills/></div>
                    <div className="flex h-fit w-full max-w-full 
                        row-span-1 "><PostContainer><LatestPosts/></PostContainer></div>
            </div>
        </>
    )
}