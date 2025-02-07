"use client";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

// Predefined experience object
const experienceObject = {
    company: ["", "Lenovo", "Dell"],
    borderColor: ["secondary", "danger", "success"] as const,
    logoSource: ["/image/pfp.jpg/", "image/lenovo_logo.jpeg", "/image/dell.jpeg"],
    title: ["Software Developer and Consultant", "Sales Leader", "Technical Advocate"],
    experienceYears: ["Present", "8 Years", "3 Years"],
    experienceMonths: ["February 2019 - Present", "September 2015 - June 2024 (Multiple Roles)", "May 2013 - September 2015"],
    roleDescription: [
        `I offer business-to-business consulting, leveraging a strong foundation in both sales and technical expertise. ### 
        I’ve successfully developed and sold a range of solutions, including an online e-commerce platform, a learning management system, 
        and a content management system, all powered by subscription-based services. In addition to my product development experience, 
        I’ve built custom full-stack web applications using a variety of technologies, including SQL, JavaScript, and Python. ###
        I work closely with clients to develop solutions that solve complex challenges, streamline operations, and foster sustainable growth.`,
        `As a Services Sales Leader, I led and managed Business Development teams focused on delivering service solutions 
        to government agencies, educational institutions, and large enterprise clients. ###
        I specialized in driving sales for Managed Services, Helpdesk, Cloud, and Security solutions, with a strong understanding of financial models, including 
        "as a Service" offerings. My teams' expertise aligned to modern technology management practices, with a proven track record of helping 
        organizations transition to Modern Management. ### 
        Throughout my career, I’ve been instrumental in driving growth across multiple technology disciplines, achieving top-line revenue increases of up to 400% 
        and consistently maintaining profitability levels between 35-40%. With a focus on strategic business development, I combine technical knowledge 
        with a passion for creating solutions that help organizations achieve long-term success. ### 
        I’m committed to driving transformation while empowering the team alongside me to reach the same results.`,
        `As a Technology Advocate, I led strategic initiatives driving modern technology adoption across Enterprise, Government, and Education sectors. ###
        I specialized in delivering transformative solutions, resulting in significant client outcomes and revenue growth. I focused on architecting and implementing virtualization solutions, 
        notably securing one of Asia Pacific's largest VMware deployments that modernized client infrastructure and improved operational efficiency by 40%. 
        Through strategic leadership in end-user computing implementations, I expanded our client footprint by 200% while driving the adoption of modern SCCM practices that reduced IT management overhead by 35%.
        I consistently delivered projects that achieved 98% Net Promoter Score rates while maintaining project profitability at 30%. ###
        I'm passionate about enabling organizations to leverage innovative technologies that drive measurable business outcomes and sustainable growth.`
    ]
};

export default function App() {
    return (
        <Accordion selectionMode="multiple" className="bg-primary-100 text-primary-foreground rounded-3xl overflow-hidden">
            {experienceObject.company.map((company, index) => {
                const roleDesc = experienceObject.roleDescription[index].split('###');
                return (
                    <AccordionItem
                        key={index}
                        aria-label={company}
                        startContent={
                            <Avatar
                                isBordered
                                color={experienceObject.borderColor[index]}
                                radius="lg"
                                src={experienceObject.logoSource[index]}
                            />
                        }
                        subtitle={
                            <motion.span 
                                className="text-secondary-200 text-sm"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.2 }}
                            >
                                {company}
                            </motion.span>
                        }
                        title={
                            <motion.span 
                                className="font-bold text-primary-foreground text-lg"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.3 }}
                            >
                                {experienceObject.title[index]}
                            </motion.span>
                        }
                    >
                        <div className="overflow-hidden">
                            <strong className="text-lg">
                                <span className="text-secondary">{experienceObject.experienceYears[index]}: </span>{experienceObject.experienceMonths[index]}
                            </strong>
                            <br />
                            <div className="md:text-[calc(1vw + 1em)] py-2 text-wrap leading-snug">
                                {roleDesc.map((paragraph, idx) => (
                                    <p key={idx} className="mb-4">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
