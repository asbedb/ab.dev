import React from "react";
import AboutCard from "./AboutCard";
import GitCard from "./GitCard";
import Skills from "./Skills";
import SocialUpdates from "./SocialUpdates";
import PostContainer from "./PostContainer";

export default function BentoBox(){
    return(
        <>
            <div className="
                grid 
                grid-rows-1
                grid-cols-1
                gap-4 
                py-4
                xl:grid-flow-col 
                xl:grid-cols-3
                xl:px-32">
                    <div className="flex h-fit px-4 row-span-3 xl:col-span-1"><AboutCard/></div>
                    <div className="flex h-fit flex-col px-4 w-full row-span-1 xl:col-span-2"><Skills/></div>
                    <div className="flex h-fit px-4 w-full row-span-2 col-span-1"><SocialUpdates/></div>
                    <div className="flex h-fit px-4 w-full row-span-2 col-span-1"><PostContainer><GitCard/></PostContainer></div>
            </div>
        </>
    )
}