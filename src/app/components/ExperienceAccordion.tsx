"use client";
import { Avatar } from "@nextui-org/react";
import Gradient from "./Gradient";

export default function App() {
    return (
        <>
        <div className="flex flex-col w-full gap-y-7">
            {/* Current Work */}
            <div className="grid grid-flow-col w-full grid-cols-[1fr_4fr] ">
                <div className="flex w-full px-2 md: justify-center">
                    <Avatar
                        isBordered
                        className="flex w-full h-fit min-w-[50px] max-w-[150px]"
                        color="secondary"
                        radius="lg"
                        src="/image/pfp.jpg/"
                    />
                </div>
                <div className="text-left flex w-full flex-col pl-2">
                    <span className="word-wrap text-2xl font-bold leading-tight md:text-4xl"><Gradient>Software Developer and Consultant</Gradient></span>
                    <strong className="text-xl text-secondary md:text-2xl">👶 - Present</strong>
                    <span className="text-primary-foreground text-sm md:text-xl">
                        <p>
                            {`I have always had a passion for code. At 11 years old, I was building my first HTML website using Notepad! 🗒️`}
                        </p><br/>
                        <p>
                            {`What started as curiosity has turned into a means to level up, learn, and creatively express myself. I've been focused on learning and building full-stack applications, using a variety of languages such as:`} 
                        </p><br/>
                        <p className="italic font-bold leading-snug">{`TypeScript, JavaScript, Python, SQL, PHP, HTML and CSS`}</p><br/>
                        <p>
                            {`For me, crafting applications isn’t just about solving problems – it's also about the love for the craft itself. Every project is a chance to push my skills further and create something meaningful. `}</p>
                    </span>
                </div> 
            </div>
            {/* Second Work */}
            <div className="grid grid-flow-col w-full grid-cols-[1fr_4fr] ">
                <div className="flex w-full px-2 md: justify-center">
                    <Avatar
                        isBordered
                        className="flex w-full h-fit min-w-[50px] max-w-[150px]"
                        color="primary"
                        radius="lg"
                        src="/image/lenovo_logo.jpeg"
                    />
                </div>
                <div className="text-left flex w-full flex-col pl-1">
                    <span className="text-3xl font-bold leading-tight md:text-4xl"><Gradient>Lenovo</Gradient></span>
                    <span className=" text-primary-foreground text-xl font-bold md:text-3xl">Sales Leader</span>
                    <strong className="text-md text-secondary md:text-2xl">8 Years <br/>2015 - 2024</strong>
                    <span className="text-primary-foreground text-sm md:text-xl">
                        <p>
                            {`As a Services Sales Leader, I directed Business Development teams specialising in technology solutions across Australia and New Zealand.`}
                        </p><br/>
                        <p>
                            {` We excelled in delivering Managed Services, Helpdesk, Cloud, and Security solutions, maintaining modern practices and helping organisations meet evolving standards.
                            `}
                        </p><br/>
                        {`I prioritised my team's professional growth while fostering a collaborative environment that empowered each member to reach their full potential.`}
                    </span>
                </div> 
            </div>
            {/* Third Work */}
            <div className="grid grid-flow-col w-full grid-cols-[1fr_4fr] ">
                <div className="flex w-full px-2 md: justify-center">
                    <Avatar
                        isBordered
                        className="flex w-full h-fit min-w-[50px] max-w-[150px]"
                        color="primary"
                        radius="lg"
                        src="/image/dell.jpeg"
                    />
                </div>
                <div className="text-left flex w-full flex-col pl-1">
                    <span className="text-3xl font-bold leading-tight md:text-4xl"><Gradient>Dell</Gradient></span>
                    <span className=" text-primary-foreground text-xl font-bold md:text-3xl">Technical Advocate</span>
                    <strong className="text-md text-secondary md:text-2xl">3 Years <br/>2013 - 2015</strong>
                    <span className="text-primary-foreground text-sm md:text-xl">
                        <p>
                        {`As a Technology Advocate, I spearheaded strategic initiatives to drive modern technology 
                        adoption across Australia and New Zealand. I architected and implemented virtualisation solutions, 
                        notably securing Asia Pacific's largest VMware deployment - modernising client infrastructure and boosting operational efficiency by 40%.
                        `}
                        </p><br/>
                        <p>
                        {`I'm passionate about helping organisations modernise and scale, bringing meticulous attention to every project.`}
                        </p>
                    </span>
                </div> 
            </div>
        </div>
        </>
    );
}
