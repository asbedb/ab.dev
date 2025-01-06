"use client"
import React from "react";
import Gradient from "./Gradient";
import ProjectButton from "./ProjectButton";

export default function ShowCase() {
    return(        
        <>
            <div className="align-top bg-primary-100 p-4 rounded-xl w-full">
                <div className="col-span-1 row-span-1 text-center text-2xl"><Gradient>Showcase Projects</Gradient></div>
                <div className="row-span-1 col-span-3 py-4"><ProjectButton/></div>
            </div>
        </>
    )
}

