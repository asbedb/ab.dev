"use client"
import Gradient from "./Gradient";


export default function Showcase(){
    return(        
        <>
            <div className="bg-primary-100 h-fit w-full p-4 rounded-xl">
                <div className="col-span-1 row-span-1 text-center text-2xl lg:col-span-2 2xl:col-span-3"><Gradient>Showcase</Gradient></div>
            </div>
        </>
    )
}