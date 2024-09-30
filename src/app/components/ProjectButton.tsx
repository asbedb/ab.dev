"use client"
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useState } from "react";
import Gradient from "./Gradient";
import Gallery from "./Gallery";

export default function ProjectButton({}) {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null); // Manage selected project index
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const ProjectDetails = {
        projectName: ["DriveShift Savvy", "SiteQL", "DiscPyTCG"],
        projectLinks: [
            "https://github.com/asbedb/Drive-ShiftSavvy", 
            "https://github.com/asbedb/siteQL", 
            "#"],
        projectImages: ["/image/btn-driveshift.png", "/image/btn-siteql.png", "/image/btn-disctcg.png"],
        projectDescription: [
            `
            This Application was developed using: 
            <li>Pure Javascript</li>
            <li>NodeJS</li>
            <li>HTML</li> 
            <li>CSS</li><br/>
            <p>
            The application provides an intuitive interface to input vehicle details, select shift parameters, and calculate 
            various metrics such as total earnings, expenses, and travel distances.</p><br/>
            <p> All fuel consumptions and estimates rely on the US Government service for fuel utilising the API from 
            <a href="All fuel consumptions and estimates rely on the US Government service for fuel utilising the API from https://www.fueleconomy.gov/">https://www.fueleconomy.gov/</a>
            </p>
            `,
            `
            This Application was developed using: 
            <li>Pure Javascript</li>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>HTML</li> 
            <li>CSS</li><br/>
            <p>siteQL is my first major undertaking to build a full-stack web application. This stack is built to be a modular SQL 
            database/website installer with credentials created and hashed for first user login. The installer goes through a guided 
            form and finalises with a database configuration and www root directory.</p>`,
            "Description of DiscPyTCG"
        ],
        projectKey: ["dssavy", "sql", "disctcg"]
    };
    const handleOpenModal = (index: number) => {
        setSelectedProjectIndex(index);
        onOpen();
    };

    return (
        <>
            {/* Button */}
            {ProjectDetails.projectName.map((name, index) => (
                <div key={index} className="relative w-full my-4 hover:animate-pulse text-primary-foreground">
                    <Button onPress={() => handleOpenModal(index)} className="h-fit w-full p-0">
                        {/* Dynamic image for each project */}
                        <Image 
                            src={ProjectDetails.projectImages[index]} 
                            alt={name} 
                            width={500}
                            height={300}
                            className="w-full h-auto"
                        />
                        {/* Overlay text */}
                        <div className="absolute inset-0 flex items-center justify-end bg-primary-200 rounded-xl bg-opacity-50 pr-4">
                            <p className="text-xl font-bold">{name}</p>
                        </div>
                    </Button>
                </div>
            ))}
            {/* Modal */}
            {selectedProjectIndex !== null && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}  size="3xl">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 text-4xl text-center">
                                    <Gradient>{ProjectDetails.projectName[selectedProjectIndex]}</Gradient>
                                </ModalHeader>
                                <ModalBody>
                                    <Gallery keyProp={ProjectDetails.projectKey[selectedProjectIndex]} />
                                    <p className="text-medium leading-snug text-primary-foreground" dangerouslySetInnerHTML={{ __html: ProjectDetails.projectDescription[selectedProjectIndex]}}></p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button as="a" color="primary" href={ProjectDetails.projectLinks[selectedProjectIndex]} target="_blank" >
                                        GitHub
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}
