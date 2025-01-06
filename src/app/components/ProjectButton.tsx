"use client"
import {Card, CardHeader, CardFooter, Button} from "@nextui-org/react";
import { useState } from "react";
import Gallery from "./Gallery";

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
            Pure Javascript
            NodeJS
            HTML 
            CSS`,
            `
            Pure Javascript
            NodeJS
            PHP
            SQL
            HTML 
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

    const updateIndex = () => {
        setIndex((prevIndex) =>
            prevIndex < ProjectDetails.projectKey.length - 1 ? prevIndex + 1 : 0
        );
    }

    return (
        <>
            <Card className="flex bg-primary-600" key={index}>
                <CardHeader>
                    <h4 className="text-2xl font-bold text-primary-foreground">{ProjectDetails.projectName[index]}</h4>
                    <p></p>
                </CardHeader>
                <Gallery keyProp={ProjectDetails.projectKey[index]}></Gallery>
                <CardFooter className="flex bg-primary-500 justify-between text-primary-foreground">
                    <div>
                        <p className="text-large">{ProjectDetails.projectDescription[index]}</p>
                    </div>
                    <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={updateIndex}>
                        GitHub
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
