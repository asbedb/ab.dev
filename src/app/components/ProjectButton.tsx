"use client"
import {Card, CardHeader, CardFooter, Button, Chip} from "@nextui-org/react";
import { useState } from "react";
import Gallery from "./Gallery";

type GalleryProps = 'dssavy' |  'sql' |  'disctcg'

export default function ProjectButton({}) {
    const [index, setIndex] = useState(0)
    const ProjectDetails = {
        projectName: ["DriveShift Savvy", "siteQL", "DiscPyTCG"],
        projectLinks: [
            "https://github.com/asbedb/Drive-ShiftSavvy", 
            "https://github.com/asbedb/siteQL", 
            "#"],
        projectImages: ["/image/btn-driveshift.png", "/image/btn-siteql.png", "/image/btn-disctcg.png"],
        projectTechnologies:[`
            Pure Javascript,
            NodeJS,
            HTML, 
            CSS`,
            `
            NextJS,
            React,
            TypeScript,
            SQL,
            HTML, 
            CSS`,
            `Google Gemini,
            TypeScript,
            Python,
            Flask`
        ],
        projectDescription: [
            `
            This application provides an intuitive interface to input vehicle details, 
            select shift parameters, and calculate various metrics such as total earnings, 
            expenses, and travel distances. 
            Whether you're a driver trying to optimize your work schedule or a vehicle owner 
            curious about fuel consumption, this tool offers valuable insights to help you make informed decisions.
            `,
            `
            siteQL is my first major undertaking to build a full-stack web application using NextJS, TypeScript and various libraries associated.
            The application is built to be a modular SQL database/website aplication installer with credentials created and hashed for first user login.
            The installer goes through a guided form and finalises with a database configuration and reroute.`,
            "Description of DiscPyTCG"
        ],
        projectKey: ["dssavy", "sql", "disctcg"]
    };

    const updateIndexNext = () => {
        setIndex((prevIndex) =>
            prevIndex < ProjectDetails.projectKey.length - 1 ? prevIndex + 1 : 0
        );
    }

    const updateIndexPrev = () => {
        setIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : ProjectDetails.projectKey.length - 1
        );
    };
    
    const openLink = () => {
        window.open(ProjectDetails.projectLinks[index], '_blank');
    }
    return (
        <> 
            <Card className="flex bg-primary-600" key={index}>
                <CardHeader className="flex flex-col items-start">
                    <h4 className="text-2xl font-bold text-primary-foreground">{ProjectDetails.projectName[index]}</h4>
                    <div className="flex flex-wrap p-2 gap-2">
                        {ProjectDetails.projectTechnologies[index].split(',').map((subTech, subIndex) => (
                                <Chip 
                                    key={`${index}-${subIndex}`} 
                                    classNames={{
                                        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                        content: "drop-shadow shadow-black text-white",
                                    }}
                                    variant="shadow"
                                >
                                    {subTech.trim()}
                                </Chip>
                            ))
                        }
                    </div>


                </CardHeader>
                <Gallery keyProp={ProjectDetails.projectKey[index] as GalleryProps}></Gallery>
                <div className="grid grid-cols-2 justify-between 2xl:gap-96 p-4">
                    <Button className="bg-gradient-to-b from-primary-500 to-primary-50 text-medium font-bold text-secondary" radius="full" size="sm" onClick={updateIndexPrev}>
                            Previous
                        </Button>
                    <Button className="bg-gradient-to-b from-primary-500 to-primary-50 text-medium font-bold text-secondary" radius="full" size="sm" onClick={updateIndexNext}>
                        Next
                    </Button>
                </div>

                <CardFooter className="flex bg-primary-500 justify-between text-primary-foreground">

                    <div>
                        <p className="text-large">{ProjectDetails.projectDescription[index]}</p>
                    </div>
                    <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={openLink}>
                        GitHub
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
