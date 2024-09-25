import React from "react";
import AboutCard from "./AboutCard";
import GitCard from "./GitCard";
import Skills from "./Skills";
import SocialUpdates from "./SocialUpdates";

export default function BentoBox(){
    return(
        <>
            <div className="
                grid 
                grid-rows-3 
                grid-cols-1 
                grid-flow-row 
                gap-4 
                py-4 
                mx-auto 
                lg:grid-flow-col 
                lg:grid-cols-3
                lg:px-44">
                    <div className="px-4 w-full row-span-3 lg:col-span-1"><AboutCard/></div>
                    <div className="flex flex-col px-4 w-full row-span-1 lg:col-span-2"><Skills/></div>
                    <div className="flex px-4 w-full row-span-2 lg:col-span-1"><GitCard/></div>
                    <div className="flex px-4 w-full row-span-2 lg:col-span-1"><SocialUpdates/></div>
            </div>
        </>
    )
}