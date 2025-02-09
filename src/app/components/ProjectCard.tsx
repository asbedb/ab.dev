"use client";
import { Card, CardHeader, CardFooter, Button, Chip, CardBody } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineFullscreen,  } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const projectDetails = {
    driveShiftSavvy: {
        projectName: "DriveShift Savvy",
        gitHubLink: "https://github.com/asbedb/Drive-ShiftSavvy",
        demoLink: "https://asbedb.github.io/Drive-ShiftSavvy/",
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
        demoLink: "https://site-ql.vercel.app",
        projectTechnologies: "NextJS, React, TypeScript, SQL, Tailwind, JavaScript, HTML, CSS",
        projectChallengeStatement: "Automate the deployment of CRUD Applications using a SQL Backend with dynamic enviromental variables.",
        projectDescrption: `siteQL is my first major full-stack web application, built using Next.js, 
        TypeScript, and various supporting libraries. It is designed as a modular SQL 
        database and website installer, providing a seamless setup process. The guided 
        form helps users set up the database and securely hashes credentials for the 
        initial user login.`,
        animLink: "/image/projectanims/siteqlanim.webm"
    },
    OrgaPy: {
        projectName: "OrgaPy",
        gitHubLink: "https://github.com/asbedb/OrgaPy",
        demoLink: "",
        projectTechnologies: "Python, Windows Filesystem, Linux, macOS, CLI Tools, Automation",
        projectChallengeStatement: "Using a CLI/Command Line Interface to simplify multiple steps in organising files.",
        projectDescrption: `OrgaPy is a command-line file organization tool that helps you manage and analyze your files 
        and directories. It provides basic file system navigation, file analysis, and automatic file sorting capabilities.
        The tool features
        Directory navigation and file system exploration, 
        File system analysis (file count and total size), 
        Automatic file sorting by extension, and 
        Cross-platform compatibility (Windows, Linux, and macOS)`,
        animLink: "/image/projectanims/orgapyanim.webm"
    },
    PyPlant: {
        projectName: "PyPlant (Coming soon!)",
        gitHubLink: "https://github.com/asbedb/PyPlant",
        demoLink: "",
        projectTechnologies: "Python",
        projectChallengeStatement: "Procedurally generate plant properties, climate and growing conditions and observe interactions between properties.",
        projectDescrption: `This project is a work-in-progress Python-based simulation system for generating and managing fictional plant species in a dynamic environment. 
        It utilizes enum to classify various biological attributes such as lifespan, root system, water requirements, and pollination type. The simulation includes a 
        time-scaling mechanism where in-game time progresses significantly faster than real-world time.`,
        animLink: "/image/projectanims/pyplantanim.webm"
    },
    bingeBot: {
        projectName: "BingeBot (Coming soon!)",
        gitHubLink: "",
        demoLink: "",
        projectTechnologies: "Google Gemini, TypeScript, NextJS, API, Python, Flask",
        projectChallengeStatement: "Help recommend a TV/Show movie based on a series of questions to help determine preferences. ",
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
                        <div className="flex w-full gap-2 justify-end">
                            <Button
                            className={`text-md font-bold ${currentProject.gitHubLink? "" : "hidden"}`}
                            color="primary"
                            radius="full"
                            size="md"
                            onClick={currentProject.gitHubLink? () => openLink(currentProject.gitHubLink) : () => console.log("coming soon")}
                            
                            >
                                GitHub
                            </Button>
                            <Button
                            className={`text-md font-bold ${currentProject.demoLink? "" : "hidden"}`}
                            color="success"
                            radius="full"
                            size="md"
                            onClick={currentProject.demoLink? () => openLink(currentProject.demoLink) : () => console.log("coming soon")}
                            >
                                Demo
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
