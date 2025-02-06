"use client";
import Gradient from "./Gradient";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {


    return (
        <>

            <Card className="flex flex-col p-4 bg-background shadow-none ">
                <CardHeader>
                    <h1 className="flex
                                    w-full
                                    h-auto
                                    justify-center
                                    text-[7vh]"
                    >
                        <Gradient>
                            Projects
                        </Gradient>
                    </h1>
                </CardHeader>
                <CardBody>
                        <ProjectCard/>
                </CardBody>
            </Card>

        </>
    );
}
