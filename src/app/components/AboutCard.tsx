"use client"
import React from "react";
import Gradient from "./Gradient";
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import SocialIcons from "./SocialIcons";

export default function AboutCard(){
    return(
        <>
            <div className="flex h-full">
                <div className="mx-auto p-4 md:p-5">
                <Card className="max-w-sm md:max-w-2xl bg-secondary-50 text-secondary-foreground">
                    <CardHeader className="justify-between p-9">
                        <div className="flex gap-3">
                            <Avatar isBordered radius="full" className="
                                w-32
                                h-auto 
                                md:w-52
                                md:h-52 
                                text-large" 
                            src="/image/pfp.jpg" />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="
                                    text-4xl
                                    md:text-7xl
                                    font-bold 
                                    leading-none 
                                    text-secondary-foreground
                                    ">
                                        Hello!👋
                                </h4>
                                <h3 className="
                                    text-4xl
                                    md:text-6xl
                                    font-bold 
                                    leading-snug 
                                    text-secondary-800">
                                        I{`'`}m 
                                        <Gradient>
                                        &nbsp;Asbed
                                        </Gradient>
                                </h3>
                                <h5 className="text-xl font-semibold tracking-tight text-primary-600">@asbedb</h5>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 py-2 text-lg">
                        <p>
                        With over 15 years experience working for world leading technology providers.
                        <br/><br/>I have a great story to tell!<br/><br/>
                        My experience in the sales, technical and management spaces has lead to me driving a unique perspective in consulting with stakeholders alongside leading teams to achieve amazing things!
                        </p>
                    </CardBody>
                    <CardFooter className="gap-3">
                        <div className="mx-auto"><SocialIcons/></div>
                    </CardFooter>
                </Card>
                </div>
            </div>
        </>
    )
}