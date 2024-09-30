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
                            max-w-[250px]
                            max-h-[250px]
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
                        <strong className="text-medium">🌏 Melbourne, Australia</strong><br/>
                        <h6 className="text-lg leading-loose px-2 bg-success-100 rounded-xl text-center">Full Stack Developer Open to Work</h6> <br/>Bringing a wealth of knowledge and maturity across multiple disciplines.
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