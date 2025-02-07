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
                    <strong className="text-md text-secondary md:text-2xl">Current <br/>👶 - 2024</strong>
                    <span className="text-primary-foreground text-sm md:text-xl">
                        <p>
                            {`I have always had a passion for code, At 11 years old I was building my first HTML website using notepad! 🗒️`}
                        </p><br/>
                        <p>
                            {`In late 2024 I wanted to rekindle my passion and bring myself back to my first true love!`}</p><br/>
                        <p>
                            {`Since then, I have been learning and building full stack applications using`} 
                        </p><br/>
                        <p className="italic font-bold leading-snug">{`TypeScript, JavaScript, Python, SQL, PHP, HTML and CSS`}</p><br/>
                        <p>
                            {`I build applications to solve, and I build them out of love for the art. `}</p>
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
                            {`As a Services Sales Leader, I led and managed Business Development teams focused on delivering technology solutions to clients across Australia and New Zealand. `}
                        </p><br/>
                        <p>
                            {`I specialized in leading a sales team proposing Managed Services, Helpdesk, Cloud, and Security solutions. My teams' expertise aligned to modern practices, 
                            with a proven track record of helping organizations in meeting new standards and obligations.`}
                        </p><br/>
                        <p>
                            {`At the same time as a people manager, I made it my mission to ensure I was supporting my team 
                            in personal development goals and aspirations.`}
                        </p><br/>
                        {`I collaborate and empower the team alongside me in bringing out the best within.`}
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
                        {`As a Technology Advocate, I led strategic initiatives driving modern technology adoption across large clients in Australia and New Zealand`}
                        </p><br/>
                        <p>
                        {`
                        I focused on architecting and implementing virtualization solutions, notably securing one of Asia Pacific's largest VMware deployments 
                        that modernized client infrastructure and improved operational efficiency by 40%.`}
                        </p><br/> 
                        <p>
                        {`I'm passionate about enabling organizations to adopt, modernize and scale with a high level of attention to detail.`}
                        </p>
                    </span>
                </div> 
            </div>
        </div>
        </>
    );
}
