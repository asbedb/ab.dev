"use client"
import React from "react";
import Gradient from "./Gradient";
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import SocialIcons from "./SocialIcons";
import ExperienceAccordion from './ExperienceAccordion';

export default function AboutCard(){
    return(
        <>
        <Card className="bg-primary-100 text-primary-foreground">
            <CardHeader className="justify-between p-9">
                <div className="flex gap-3">
                    <Avatar isBordered radius="full" className="
                        flex
                        w-auto
                        max-w-[200px]
                        min-w-[52px]
                        h-auto  
                        text-large" 
                    src="/image/pfp.jpg" />
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h4 className="
                            flex
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
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-2 text-lg">
                    <ExperienceAccordion/>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="mx-auto"><SocialIcons/></div>
            </CardFooter>
        </Card>
        </>
    )
}