import React from "react";
import AboutCard from "./AboutCard";
import GitCard from "./GitCard";
import Skills from "./Skills";
import SocialUpdates from "./SocialUpdates";

export default function BentoBox(){
    return(
        <>
        <div className="grid grid-rows-3 grid-cols-1 grid-flow-row gap-4 sm:grid-flow-col sm:grid-cols-2 py-4 sm:px-72">
            <div className="px-4 w-full row-span-3 "><AboutCard/></div>
            <div className="flex flex-col px-4 w-full col-span-1 row-span-1 sm:col-span-2"><Skills/></div>
            <div className="flex px-4 w-full row-span-2"><GitCard/></div>
            <div className="flex px-4 w-full row-span-2"><SocialUpdates/></div>
        </div>
        </>
    )
}