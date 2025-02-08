"use client";
import { Card, CardHeader, CardFooter, Button, Chip, CardBody, useDisclosure, } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineFullscreen,  } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const projectDetails = {
    driveShiftSavvy: {
        projectName: "DriveShift Savvy",
        gitHubLink: "https://github.com/asbedb/Drive-ShiftSavvy",
        projectTechnologies: "Pure Javascript, NodeJS, HTML, CSS",
        projectChallengeStatement: "Empower RideShare drivers to make informed decisions on fuel consumption expenses based on publicly available data.",
        projectDescrption: `DriveShift Savvy provides an intuitive interface to input vehicle details, 
        select shift parameters, and calculate various metrics such as total earnings, 
        expenses, and travel distances. Whether you're a driver trying to optimize your 
        work schedule or a vehicle owner curious about fuel consumption, this tool 
        offers valuable insights to help you make informed decisions.`,
        animLink: "/image/projectanims/dssanim.webm"
    },
    siteQL: {
        projectName: "siteQL",
        gitHubLink: "https://github.com/asbedb/siteQL",
        projectTechnologies: "NextJS, React, TypeScript, SQL, Tailwind, JavaScript, HTML, CSS",
        projectChallengeStatement: "Automate the deployment of CRUD Applications using a SQL Backend with dynamic enviromental variables.",
        projectDescrption: `siteQL is my first major full-stack web application, built using Next.js, 
        TypeScript, and various supporting libraries. It is designed as a modular SQL 
        database and website installer, providing a seamless setup process. The guided 
        form helps users set up the database and securely hashes credentials for the 
        initial user login.`,
        animLink: "/image/projectanims/siteqlanim.webm"
    },
    bingeBot: {
        projectName: "BingeBot (Work in progress)",
        gitHubLink: "#",
        projectTechnologies: "Google Gemini, TypeScript, NextJS, API, Python, Flask",
        projectChallengeStatement: "Help recommend a TV/Show movie based on a series of questions to help determine preferences.",
        projectDescrption: `BingeBot is an AI assistant powered by Google Gemini, designed to help you 
        discover your next media experience. Using TMDB's API, it guides users through 
        a questionnaire and generates a prompt for Gemini to recommend the perfect 
        viewing experience. It features a Flask-based Python backend and a Next.js/React frontend.`,
        animLink: "/image/projectanims/bingebotanim.webm"
    }  
};

export default function ProjectCard() {
    const [index, setIndex] = useState(0);

    const projectKeys = Object.keys(projectDetails) as (keyof typeof projectDetails)[];
    const projectCount = projectKeys.length
    const currentProject = projectDetails[projectKeys[index]]
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % projectCount);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + projectCount) % projectCount);
    };

    const openLink = (link : string) => {
        window.open(link, "_blank");
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextCard,
        onSwipedRight: prevCard,
        trackMouse: true, 
    });

    const handleVideoClick = () => {
        const videoElement = videoRef.current
        if(videoElement){
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            }
        }
    };

    const handleMobileFullscreen = () => {
        if (window.innerWidth <= 768) {
            const videoElement = videoRef.current
            if(videoElement){
                (screen.orientation as any).lock("landscape-primary");
            }
        }
    };

    const handleExitMobileFullscreen = () => {
        const videoElement = videoRef.current
        if (videoElement) {
            screen.orientation.unlock()
        }
    };

    //triggered on exiting full screen to assert portrait mode availability
    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                if (window.innerWidth <= 768) {
                    handleExitMobileFullscreen();
                }
            }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener("webkitfullscreenchange", handleFullscreenChange); 
        document.addEventListener("mozfullscreenchange", handleFullscreenChange);
        document.addEventListener("msfullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
            document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
            document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
            document.removeEventListener("msfullscreenchange", handleFullscreenChange);
        };
    }, []);
    
    //reload of source to ensure correct video is playing
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            // Manually reset the video source to reload it
            videoElement.load();
            videoElement.play();
        }
    }, [index]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.5, ease: "easeInOut"}}
                {...swipeHandlers}
            >
                <Card className="flex bg-primary-600">
                    <CardHeader className="flex flex-col items-start gap-2">
                        <h4 className="text-2xl font-bold text-primary-foreground">
                            {currentProject.projectName}
                        </h4>
                        <div className="flex flex-wrap p-2 gap-2 min-h-[4em] max-h-[4em]">
                        {currentProject.projectTechnologies
                            .split(/\s*,\s*/) // Trims unnecessary spaces
                            .map((subTech: string, subIndex: number) => (
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
                            <FaArrowLeft className="text-white w-8 h-8" />
                        </motion.button>
                        <motion.button
                        onClick={nextCard}
                        className="absolute top-1/2 right-2 p-3 bg-black/40 hover:bg-black/60 transition rounded-full z-40"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next project"
                        >
                            <FaArrowRight className="text-white w-8 h-8" />
                        </motion.button>
                        <div className="flex w-full p-10  justify-center rounded-3xl overflow-hidden hover:cursor-pointer hover:animate-pulse">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.2, 1] }} // Using smaller scale for smoother animation
                                transition={{ repeat: Infinity, repeatDelay: 2 }}
                                style={{
                                    transformOrigin: "center center", // Ensure scaling happens from the center
                                }}
                                className="absolute right-14 bottom-14 overflow-hidden w-[50px] h-[50px]"
                            >
                                <MdOutlineFullscreen className="flex 
                                    text-4xl 
                                    w-full
                                    h-full
                                    font-bold 
                                    light:text-primary-foreground 
                                    dark:text-secondary 
                                    light:bg-black/50 p-2 
                                    dark:bg-white/50 rounded-xl" 
                                />
                            </motion.div>
                            <video
                                ref={videoRef}
                                className="flex w-full max-h-[600px] rounded-3xl " 
                                autoPlay
                                loop
                                muted
                                disablePictureInPicture
                                onClick={() => {
                                    handleVideoClick();
                                    handleMobileFullscreen();
                                }}
                                >
                                
                                <source src={currentProject.animLink}/>
                            </video>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-col bg-primary-500 text-primary-foreground items-start gap-y-4">
                        <div>
                            <span className="md:text-2xl text-md font-bold text-secondary-400">Challenge Statement: </span>
                            <p className="md:text-xl text-sm italic font-bold ">{currentProject.projectChallengeStatement}</p>
                        </div>

                        <div className="text-md">
                            <span className="md:text-2xl text-md font-bold text-secondary-400">Project Description:</span>
                            <p className="md:text-xl text-sm">{currentProject.projectDescrption}</p>
                        </div>
                        <div>
                            <Button
                            className="text-tiny"
                            color="primary"
                            radius="full"
                            size="sm"
                            onClick={() => openLink(currentProject.gitHubLink)}
                            >
                                GitHub
                            </Button>
                        </div>

                    </CardFooter>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
