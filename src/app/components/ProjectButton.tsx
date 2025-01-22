"use client"
import {Card, CardHeader, CardFooter, Button, Chip} from "@nextui-org/react";
import { useState } from "react";
import Gallery from "./Gallery";

type GalleryProps = 'dssavy' |  'sql' |  'disctcg'

export default function ProjectButton({}) {
    const [index, setIndex] = useState(0)
    const ProjectDetails = {
        projectName: ["DriveShift Savvy", "siteQL", "BingeBot"],
        projectLinks: [
            "https://github.com/asbedb/Drive-ShiftSavvy", 
            "https://github.com/asbedb/siteQL", 
            "#"],
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
            NextJS,
            API,
            Python,
            Flask`
        ],
        projectDescription: [
            `
            DriveShift Savvy provides an intuitive interface to input vehicle details, 
            select shift parameters, and calculate various metrics such as total earnings, 
            expenses, and travel distances. 
            Whether you're a driver trying to optimize your work schedule or a vehicle owner 
            curious about fuel consumption, this tool offers valuable insights to help you make informed decisions.
            `,
            `
            siteQL is my first major full-stack web application, built using Next.js, TypeScript, and various supporting 
            libraries. The application is designed as a modular SQL database and website installer, providing a seamless 
            setup process.
            It features a guided form that walks users through the installation steps, creating and securely hashing 
            credentials for the initial user login. Upon completion, the installer configures the database and redirects 
            users to finalize the setup.
            `,
            `
            BingeBot is an AI assistant powered by Google Gemini, designed to help you discover your next media experience. By leveraging APIs connected 
            to the TMDB media platform, it guides users through a simple questionnaire, generating a prompt for Gemini to recommend the perfect viewing 
            experience.
            The project features a Flask-based Python backend and a Next.js/React frontend for seamless performance and user experience.
            `
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
