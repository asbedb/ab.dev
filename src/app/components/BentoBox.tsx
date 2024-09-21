import React from "react";
import AboutCard from "./AboutCard";
import ExperienceAccordion from "./ExperienceAccordion";
import GitCard from "./GitCard";

export default function BentoBox(){
    return(
        <>
        <div className="grid grid-rows-3 grid-flow-row gap-4 px-4 py-4 leading-10 md:grid-flow-col">
            <div className="p-4 w-full rounded-xl row-span-3"><AboutCard/></div>
            <div className="p-4 w-full rounded-xl col-span-2"><GitCard/></div>
            <div className="p-4 w-full rounded-xl row-span-2 col-span-2">a</div>
            <div className="p-4 w-full rounded-xl row-span-3"><GitCard/></div>
        </div>
        </>
    )
}