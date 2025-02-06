"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBorderProps {
    children: ReactNode;
    animationDuration?: number;
}

export default function AnimatedBorder({
    children,
    animationDuration = 4
}: AnimatedBorderProps) {
    return (
        <div className="relative p-1 rounded-xl overflow-hidden ">

            {/* Rotating Background Gradient (Clipped) */}
            <motion.div
                className="absolute -inset-[50%] scale-150 z-0"
                style={{
                    background: `conic-gradient(
                        #ff66b2, #e066ff, #c080ff, #9966ff, #7f66ff, #b380ff, #ff66b2, #ff80b2, #ff66b2
                    )`
                }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: animationDuration,
                    ease: "linear"
                }}
            />
            
            {/* Subtle Glow Effect */}
            
            {children}
        </div>
    );
}
