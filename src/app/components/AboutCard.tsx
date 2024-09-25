"use client"
import React from "react";
import Gradient from "./Gradient";
import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import SocialIcons from "./SocialIcons";
import ExperienceAccordion from './ExperienceAccordion';
import CodeBlock from "./CodeBlock";

export default function AboutCard(){
    return(
        <>
        <Card className="bg-primary-100 text-primary-foreground w-full">
            <CardHeader className="justify-between px-4">
                <div className="flex flex-col 2xl:flex-row gap-3">
                    <Avatar src="/image/pfp.jpg" isBordered radius="full" className="
                        flex
                        w-auto
                        h-auto
                        max-h-[400px]
                        max-w-[350px]"/>
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h4 className="
                            text-4xl
                            sm:text-3xl
                            font-bold 
                            leading-none 
                            text-primary-foreground
                            ">
                                Hello!👋
                        </h4>
                        <h3 className="
                            text-4xl
                            sm:text-3xl
                            font-bold 
                            leading-snug ">
                                I{`'`}m 
                                <Gradient>
                                &nbsp;Asbed
                                </Gradient>
                        </h3>
                        <h5 className="text-xl font-semibold tracking-tight">@asbedb</h5>
                        <strong className="text-medium">🌏 Melbourne, Australia</strong>
                        <CodeBlock/>
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