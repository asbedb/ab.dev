"use client"
import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import SocialIcons from './SocialIcons';
import Gradient from './Gradient';

function Connect() {
    return (
        <>
        <Card className="flex flex-col p-4 bg-background shadow-none ">
            <CardHeader>
                <h1 className="flex
                                w-full
                                h-auto
                                justify-center
                                text-[4vh]"
                >
                    <Gradient>
                        Contact Me 
                    </Gradient>✉️
                </h1>
            </CardHeader>
            <CardBody className="flex
                                w-full
                                h-auto
                                items-center
                                text-[4vh]">
                <SocialIcons/>
            </CardBody>
        </Card>
        </>
    )
}

export default Connect