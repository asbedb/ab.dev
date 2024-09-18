import React from "react";

export default function Gradient(
    {children,}: Readonly<{ children: React.ReactNode;}>) {
    return(
        <>
            <span className="
                text-center
                font-extrabold 
                bg-gradient-to-b from-primary-100 to-primary-500 
                bg-clip-text text-transparent">
                    {children}
            </span>
        </>
    )
}