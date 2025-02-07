"use client";
import { Card, CardHeader, CardFooter, Button, Chip, CardBody } from "@nextui-org/react";
import { useState } from "react";
import Gallery from "./Gallery";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const projectDetails = {
    projectName: ["DriveShift Savvy", "siteQL", "BingeBot"],
    projectLinks: [
        "https://github.com/asbedb/Drive-ShiftSavvy",
        "https://github.com/asbedb/siteQL",
        "#",
    ],
    projectTechnologies: [
        "Pure Javascript, NodeJS, HTML, CSS",
        "NextJS, React, TypeScript, SQL, HTML, CSS",
        "Google Gemini, TypeScript, NextJS, API, Python, Flask",
    ],
    projectDescription: [
        `DriveShift Savvy provides an intuitive interface to input vehicle details, 
        select shift parameters, and calculate various metrics such as total earnings, 
        expenses, and travel distances. Whether you're a driver trying to optimize your 
        work schedule or a vehicle owner curious about fuel consumption, this tool 
        offers valuable insights to help you make informed decisions.`,
        `siteQL is my first major full-stack web application, built using Next.js, 
        TypeScript, and various supporting libraries. It is designed as a modular SQL 
        database and website installer, providing a seamless setup process. The guided 
        form helps users set up the database and securely hashes credentials for the 
        initial user login.`,
        `BingeBot is an AI assistant powered by Google Gemini, designed to help you 
        discover your next media experience. Using TMDB's API, it guides users through 
        a questionnaire and generates a prompt for Gemini to recommend the perfect 
        viewing experience. It features a Flask-based Python backend and a Next.js/React frontend.`,
    ],
    projectKey: ["dssavy", "sitesql", "bingebot"] as const,
};

type GalleryProps = (typeof projectDetails.projectKey)[number];

export default function ProjectCard() {
    const [index, setIndex] = useState(0);
    const projectCount = projectDetails.projectName.length;

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % projectCount);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + projectCount) % projectCount);
    };

    const openLink = () => {
        window.open(projectDetails.projectLinks[index], "_blank");
    };

    // Swipeable handlers using react-swipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextCard,
        onSwipedRight: prevCard,
        trackMouse: true, // Enable mouse tracking for desktop
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                className="hover:cursor-pointer hover:select-none"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                {...swipeHandlers}
            >
                <Card className="flex bg-primary-600">
                    <CardHeader className="flex flex-col items-start">
                        <h4 className="text-2xl font-bold text-primary-foreground">
                            {projectDetails.projectName[index]}
                        </h4>
                        <div className="flex flex-wrap p-2 gap-2">
                            {projectDetails.projectTechnologies[index]
                                .split(/\s*,\s*/) // Trims unnecessary spaces
                                .map((subTech, subIndex) => (
                                    <Chip
                                        key={`${index}-${subIndex}`}
                                        classNames={{
                                            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                            content: "drop-shadow shadow-black text-white",
                                        }}
                                        variant="shadow"
                                    >
                                        {subTech}
                                    </Chip>
                                ))}
                        </div>
                    </CardHeader>
                    <CardBody>
                        <motion.button
                            onClick={prevCard}
                            className="absolute top-1/2 left-2 p-3 bg-black/40 hover:bg-black/60 transition rounded-full z-20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous project"
                        >
                            <ArrowLeft className="text-white w-8 h-8" />
                        </motion.button>
                        <motion.button
                            onClick={nextCard}
                            className="absolute top-1/2 right-2 p-3 bg-black/40 hover:bg-black/60 transition rounded-full z-40"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next project"
                        >
                            <ArrowRight className="text-white w-8 h-8" />
                        </motion.button>
                        <Gallery keyProp={projectDetails.projectKey[index]} />
                    </CardBody>
                    <CardFooter className="flex bg-primary-500 justify-between text-primary-foreground">
                        <div>
                            <p className="text-md">{projectDetails.projectDescription[index]}</p>
                        </div>
                        <Button
                            className="text-tiny"
                            color="primary"
                            radius="full"
                            size="sm"
                            onClick={openLink}
                        >
                            GitHub
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
