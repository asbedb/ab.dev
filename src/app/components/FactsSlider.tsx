"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Gradient from "./Gradient";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Static data object
const staticFrontPage = {
    about: {
        title: `I build modern full stack applications with exciting frameworks.`,
        emoji: `🚀`,
        button_link: ``,
    },
    orgapy: {
        title: `I'm passionate about building solutions for the world around us.`,
        emoji: `🌍`,
        button_link: `https://github.com/asbedb/OrgaPy`,
    },
    siteql: {
        title: `I prioritize the human element in every challenge I undertake.`,
        emoji: `🤝`,
        button_link: `https://github.com/asbedb/siteQL`,
    },
    dss: {
        title: `I develop with a clear objective mapping routes to success`,
        emoji: `🗺️`,
        button_link: `https://github.com/asbedb/Drive-ShiftSavvy`,
    },
    pyplant: {
        title: `I am a strong advocate for community growth and collaboration.`,
        emoji: `🌱`,
        button_link: `https://github.com/asbedb/PyPlant`,
    },
};

type ProjectKey = keyof typeof staticFrontPage;

interface ShowCaseSliderProps {
  onProjectChange: (projectKey: ProjectKey) => void; // callback to notify parent about the current project
}

const FactsSlider: React.FC<ShowCaseSliderProps> = ({ onProjectChange }) => {
    const [index, setIndex] = useState(0);
    const [flipLeft, setFlipLeft] = useState(true);
    const projects = Object.keys(staticFrontPage) as ProjectKey[]; // Keys of staticFrontPage
    const currentProject = staticFrontPage[projects[index]];

    useEffect(() => {
        onProjectChange(projects[index]); // Notify parent of the current project
    }, [index, onProjectChange, projects]);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % projects.length); // Loop back to 0 when reaching the end
        
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);
         // Loop back to end when going backwards
    };

    // Swipeable handlers using react-swipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            nextCard(); // Go to next card when swiping left
            setFlipLeft(true)
        },
        onSwipedRight: () => {
            prevCard(); // Go to previous card when swiping right
            setFlipLeft(false)
        },
        trackMouse: true, // Enable mouse tracking for desktop
    });

    return (
            <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="hover:cursor-pointer hover:select-none"
                        initial={{ opacity: 0, rotateY: flipLeft? 90 : -90}} // Start with no opacity
                        animate={{ opacity: 1, rotateY: flipLeft? 0 : -0 }} // Fade in
                        exit={{ opacity: 0, rotateY: flipLeft? 90 : -90}} // Fade out
                        transition={{ duration: 0.4, ease: "easeOut"}}
                        {...swipeHandlers}
                    >
                        <Card className="w-full bg-primary-100 text-primary-foreground md:min-h-[620px] md:max-h-[620px]">
                            <CardHeader className=" gap-2">
                                <div className="gap-1 p-4">
                                    <h4 className="
                                        text-[8vw]
                                        md:text-[2vw]
                                        font-bold 
                                        leading-tight 
                                        line-clamp-4
                                        md:line-clamp-3
                                        text-primary-foreground
                                        break-words
                                        tracking-tight
                                        max-w-[20ch]
                                        md:max-h-[calc(1.2em*5)]
                                        ">
                                        <Gradient>{currentProject.title || "No Title"}</Gradient>
                                    </h4>
                                </div>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4 items-center w-full h-full">
                                <div className="
                                    flex
                                    w-auto
                                    h-auto
                                    bg-primary-400
                                    items-center
                                    justify-evenly
                                    rounded-full
                                    border-solid
                                    border-primary-500
                                    border-4
                                    text-[20vh]">
                                        <motion.button
                                            onClick={prevCard}
                                            className="absolute left-1 md:left-9 p-4 bg-black/40 hover:bg-black/60 transition rounded-full"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ArrowLeft className="text-white w-8 h-8" />
                                        </motion.button>
                                        <motion.button
                                                onClick={nextCard}
                                                className="absolute right-1 md:right-9 p-4 bg-black/40 hover:bg-black/60 transition rounded-full"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ArrowRight className="text-white w-8 h-8" />
                                        </motion.button>
                                        {currentProject.emoji}
                                </div>
                            </CardBody>
                        </Card>
                </motion.div>
                
            </AnimatePresence>
    );
};

export default FactsSlider;
