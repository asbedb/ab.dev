"use client";
import { useState, useEffect, useMemo } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Gradient from "./Gradient";
import { ArrowLeft, ArrowRight } from "lucide-react";

const staticFrontPage = {
    about: {
        title: `I build modern full stack applications with exciting frameworks.`,
        emoji: `🚀`,
    },
    slide1: {
        title: `I'm passionate about building solutions for the world around us.`,
        emoji: `🌍`,
    },
    slide2: {
        title: `I prioritize the human element in every challenge I undertake.`,
        emoji: `🤝`,
    },
    slide3: {
        title: `I develop with a clear objective mapping routes to success`,
        emoji: `🗺️`,
    },
    slide4: {
        title: `I am a strong advocate for community growth and collaboration.`,
        emoji: `🌱`,
    },
};

type SlideKeyProps = keyof typeof staticFrontPage;

interface ShowCaseSliderProps {
    onProjectChange: (SlideKeyProps: SlideKeyProps) => void;
}

const FactsSlider: React.FC<ShowCaseSliderProps> = ({ onProjectChange }) => {
    const [index, setIndex] = useState(0);

    const slides = useMemo(() => Object.keys(staticFrontPage) as SlideKeyProps[], []);
    const currentSlide = staticFrontPage[slides[index]];

    useEffect(() => {
        onProjectChange(slides[index]); 
    }, [index, onProjectChange, slides]);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Swipeable handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextCard(),
        onSwipedRight: () => prevCard(),
        trackMouse: true,
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: index % 2 === 0 ? 90 : -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: index % 2 === 0 ? 90 : -90 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                {...swipeHandlers}
            >
                <Card className="w-full bg-primary-100 text-primary-foreground md:min-h-[620px] md:max-h-[620px] hover:cursor-grabbing select-none">
                    <CardHeader className="gap-2">
                        <div className="gap-1 p-4">
                            <h4 className="text-[1.7rem] md:text-[3rem] font-bold leading-tight line-clamp-4 md:line-clamp-3 text-primary-foreground break-words tracking-tight max-w-[20ch] md:max-h-[calc(1.2em*5)]">
                                <Gradient>{currentSlide.title || "No Title"}</Gradient>
                            </h4>
                        </div>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4 items-center w-full h-full">
                        <div className="flex w-auto h-auto bg-primary-400 items-center justify-evenly rounded-full border-solid border-primary-500 border-4 text-[6rem]">
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
                            {currentSlide.emoji}
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
};

export default FactsSlider;
