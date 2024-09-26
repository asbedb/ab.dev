import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { RiNextjsFill } from "react-icons/ri";
import { FaJsSquare, FaHtml5, FaPython, FaMicrosoft, FaReact, FaNodeJs } from "react-icons/fa";
import CodeBlock from "./CodeBlock";

export default function Skills(){
    return(
        <>
            <Card className="bg-primary-100 text-primary-foreground ">
                <CardHeader className="flex flex-col text-center">
                    <h4 className="font-bold text-xl text-secondary">Skills and Certifications</h4>
                </CardHeader>
                <CardBody className="text-primary-foreground gap-2">
                    <CodeBlock/>
                    <p className="text-2xl flex flex-row gap-2 m-auto ">
                        <FaJsSquare className="hover:animate-pulse hover:cursor-pointer"/>
                        <FaHtml5 className="hover:animate-pulse hover:cursor-pointer"/>
                        <FaPython className="hover:animate-pulse hover:cursor-pointer"/>
                        <FaMicrosoft className="hover:animate-pulse hover:cursor-pointer"/>
                        <FaReact className="hover:animate-pulse hover:cursor-pointer"/>
                        <FaNodeJs className="hover:animate-pulse hover:cursor-pointer"/>
                        <RiNextjsFill className="hover:animate-pulse hover:cursor-pointer"/>
                    </p>
                </CardBody>
            </Card>
        </>
    )
}