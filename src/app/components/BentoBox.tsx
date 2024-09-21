import React from "react";
import AboutCard from "./AboutCard";
import ExperienceAccordion from "./ExperienceAccordion";

export default function BentoBox(){
    return(
        <>
            <div className="w-full h-full flex flex-col">
                <div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center h-full w-full p-4 gap-5">
                    <div className="flex justify-center items-center">
                    <AboutCard />
                    </div>
                    <div className="flex justify-center items-center ">portfolio</div>
                    <div className="flex justify-center items-center">8</div>
                    <div className="flex justify-center items-center"><ExperienceAccordion/></div>
                    <div className="flex justify-center items-center">11</div>
                </div>
            </div>
        </>
    )
}