"use client"
import React from "react";
import Gradient from "./Gradient";
import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import SocialIcons from "./SocialIcons";
import AnimatedBorder from "./AnimatedBorder";

export default function AboutCard(){
    return(
        <>
        <AnimatedBorder>
        <Card className="flex bg-primary-100 text-primary-foreground min-h-[620px]">
            <CardHeader className=" justify-center items-center gap-2">
                <div className="flex flex-col items-center text-center  ">
                    <Avatar src="/image/pfp.jpg" isBordered radius="full" className="
                            flex
                            w-auto
                            h-auto
                            min-w-[45px]
                            min-h-[45px]
                            max-w-[200px]
                            max-h-[200px]"/>
                    <div className=" items-left gap-1 p-4">
                        <h4 className="
                            text-5xl
                            font-bold 
                            leading-none 
                            text-primary-foreground
                            ">
                                Hello!👋
                        </h4>
                        <h3 className="
                            text-5xl
                            font-bold 
                            leading-snug ">
                                I{`'`}m 
                                <Gradient>
                                &nbsp;Asbed
                                </Gradient>
                        </h3>
                        <h5 className="text-xl font-semibold tracking-tight">@asbedb</h5>
                        <strong className="text-medium">🌏 Melbourne, Australia</strong><br/>
                            <div className="text-lg text-secondary-50 leading-loose px-2 rounded-xl text-center mt-2 z-10">
                                Full Stack Developer
                            </div><br/>Bringing a wealth of knowledge and maturity across multiple disciplines.
                    </div> 
                </div>   
            </CardHeader>
            <CardBody>
                    <div className="mx-auto overflow-hidden"><SocialIcons/></div>
            </CardBody>
        </Card>
        </AnimatedBorder>
        </>
    )
}