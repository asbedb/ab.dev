"use client"
import {Card, CardHeader, CardFooter, Button, Chip} from "@nextui-org/react";
import { useState } from "react";
import Gallery from "./Gallery";

type GalleryProps = 'dssavy' |  'sql' |  'disctcg'

export default function ProjectButton({}) {
    const [index, setIndex] = useState(0)
    const ProjectDetails = {
        projectName: ["DriveShift Savvy", "SiteQL", "DiscPyTCG"],
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
            Pure Javascript,
            NodeJS,
            PHP,
            SQL,
            HTML, 
            CSS`,
            `Technologies for disctcg`
        ],
        projectDescription: [
            `
            The application provides an intuitive interface to input vehicle details, select shift parameters, and calculate 
            various metrics such as total earnings, expenses, and travel distances.
            All fuel consumptions and estimates rely on the US Government service for fuel utilising the API from 
            https://www.fueleconomy.gov/
            `,
            `
            siteQL is my first major undertaking to build a full-stack web application. This stack is built to be a modular SQL 
            database/website installer with credentials created and hashed for first user login. The installer goes through a guided 
            form and finalises with a database configuration and www root directory.`,
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
    
    return (
        <> 
            <Card className="flex bg-primary-600" key={index}>
                <CardHeader className="flex flex-col items-start 2xl:flex-row gap-2">
                    <h4 className="text-2xl font-bold text-primary-foreground">{ProjectDetails.projectName[index]}</h4>
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

                </CardHeader>
                <Gallery keyProp={ProjectDetails.projectKey[index] as GalleryProps}></Gallery>
                <div className="grid grid-cols-2 justify-between 2xl:gap-96 p-4">
                    <Button className="bg-gradient-to-br from-primary-500 to-secondary-500 border-small text-tiny" color="primary" radius="full" size="sm" onClick={updateIndexPrev}>
                            Previous
                        </Button>
                    <Button className="bg-gradient-to-br from-primary-500 to-secondary-500 border-small text-tiny" color="primary" radius="full" size="sm" onClick={updateIndexNext}>
                        Next
                    </Button>
                </div>

                <CardFooter className="flex bg-primary-500 justify-between text-primary-foreground">

                    <div>
                        <p className="text-large">{ProjectDetails.projectDescription[index]}</p>
                    </div>
                    <Button className="text-tiny" color="primary" radius="full" size="sm" >
                        GitHub
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
