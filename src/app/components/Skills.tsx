import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import CodeBlock from "./CodeBlock";

export default function Skills(){
    return(
        <>
            <Card className="bg-primary-100 text-primary-foreground w-full flex-grow pb-4">
                <CardHeader className="flex flex-col text-center">
                    <h4 className="font-bold text-xl text-secondary">Skills and Certifications</h4>
                </CardHeader>
                <CardBody className="text-primary-foreground gap-2">
                    <CodeBlock/>
                </CardBody>
            </Card>
        </>
    )
}