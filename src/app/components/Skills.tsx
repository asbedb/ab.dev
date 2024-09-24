import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { RiNextjsFill } from "react-icons/ri";
import { FaJsSquare, FaHtml5, FaPython, FaMicrosoft, FaReact, FaNodeJs } from "react-icons/fa";

export default function Skills(){
    return(
        <>
            <Card className="bg-primary-100 text-primary-foreground ">
                <CardHeader className="flex flex-col text-center">
                    <h4 className="font-bold text-xl text-secondary">Skills and Certifications</h4>
                </CardHeader>
                <CardBody className="flex text-5xl md:text-8xl text-primary-foreground text-center gap-2">
                    <p className="flex flex-row gap-2 m-auto"><FaJsSquare/><FaHtml5/><FaPython/><FaMicrosoft/><FaReact/><FaNodeJs/><RiNextjsFill/></p>
                    <p className="text-2xl text-primary-foreground bg-primary-300 px-2">
                        1<br/>
                        1<br/>
                        1<br/>
                        1<br/>
                        1<br/>
                    </p>
                </CardBody>
            </Card>
        </>
    )
}