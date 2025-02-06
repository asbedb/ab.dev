"use client";
import Gradient from "./Gradient";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ExperienceAccordion from './ExperienceAccordion'

export default function Career() {


    return (
        <>
            <Card className="flex flex-col p-4 bg-primary-100 ">
                <CardHeader>
                    <h1 className="flex
                                    w-auto
                                    h-auto
                                    text-[7vh]"
                    >
                        <Gradient>
                            Career
                        </Gradient>
                    </h1>
                </CardHeader>
                <CardBody>
                    <ExperienceAccordion/>
                </CardBody>
            </Card>
            
        </>
    );
}
