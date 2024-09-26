"use client"
import React from "react";
import Gradient from "./Gradient";
import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import SocialIcons from "./SocialIcons";
import ExperienceAccordion from './ExperienceAccordion';

export default function AboutCard(){
    return(
        <>
        <Card className="bg-primary-100 text-primary-foreground w-full">
            <CardHeader className="flex flex-col w-full justify-center items-center gap-3">
                <div className="flex flex-col w-full items-center text-center 2xl:flex-row 2xl:items-start 2xl:text-left ">
                    <Avatar src="/image/pfp.jpg" isBordered radius="full" className="
                            flex
                            w-auto
                            h-auto
                            max-w-[550px]
                            max-h-[550px]
                            min-w-[200px]
                            min-h-[50px]"/>
                    <div className="flex flex-col w-full items-left gap-1 p-4">
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
                        <strong className="text-medium">🌏 Melbourne, Australia</strong>
                    </div> 
                </div>   
            </CardHeader>
            <CardBody className="px-3 text-lg">
                    <ExperienceAccordion/>
                    <div className="mx-auto"><SocialIcons/></div>
            </CardBody>
        </Card>
        </>
    )
}