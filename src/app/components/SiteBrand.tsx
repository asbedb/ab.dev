"use client"
import {useState, useEffect} from "react";
import Gradient from "./Gradient";

export default function SiteBrand() {
    const [text, setText] = useState("asbedb.dev/")

    useEffect(() =>{
        const updateText = () => {
            setText(window.innerWidth >= 768 ? "asbedb.dev/" : "ab.dev/")
        }
        updateText()
        window.addEventListener("resize", updateText)
        return () => window.removeEventListener("resize", updateText)
    }, [])
    return(
        <>
        <div className="flex w-full items-center">
            <span className="
                hidden
                w-full
                text-center
                md:flex
                md:text-[2vw]
                hover:cursor-default">
                    <Gradient>
                        {text}
                    </Gradient>
            </span>
        </div>
        </>
    )
}