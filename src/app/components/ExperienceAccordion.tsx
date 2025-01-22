"use client";
import { Accordion, AccordionItem, Avatar} from "@nextui-org/react";

export default function App() {
    type AvatarColor = "secondary" | "default" | "primary" | "success" | "warning" | "danger";
    const ExperienceObject = {
        company: ["Lenovo", "CompTier", "Dell"],
        borderColor: ["danger", "secondary", "success"] as [AvatarColor, AvatarColor, AvatarColor],
        logoSource: ["/image/lenovo_logo.jpeg", "/image/ct.png", "/image/dell.jpeg"],
        title: ["Sales Leader", "Founder and Developer", "Technical Advocate"],
        titleColor: ["text-red-500", "text-blue-500", "text-green-500"],
        experienceYears: ["8 Years", "Continued Profession", "3 Years"],
        experienceMonths: ["September 2015 - June 2024 (Multiple Roles)", "February 2019 - Present", "May 2013 - September 2015"],
        roleDescription: [
        `   <li>Managed Business Development Managers focused on services solutions to government agencies, educational institutions, and large enterprise customers</li><br/>
            <li>Specialised in Managed Services, Helpdesk, Cloud and Security with multiple financial disciplines including as a Service</li><br/>
            <li>Accute focus in Microsoft Modern Management with a drive to help organisation shift to Azure Modern Management</li><br/>
            <li>Drove growth across multiple disciplines with top line increases of up to 400% alongside average profitability of 35-40%</li>
        `,

        `   <li>Business-to-business consulting leveraging a strong established sales and technical base.</li><br/>
            <li>Developed and sold online e-commerce platform, learning management system and content management system which utilised subscription services</li><br/>
            <li>Also established a brick and mortar retail front in Melbourne Australia at the time specialising in fine foods</li>`,

        `   <li>Spearheaded initiatives aimed at educating Enterprise, Government and Education clients seeking to understand modern technologies</li><br/>
            <li>Lead initatives involved in virtualising environments and helped Dell secure one of the largest wins in Asia pacific for vmWare</li><br/>
            <li>Helped expand the end user computing client footprint and drove modern practices in SCCM</li>`
        ]
    };

return (
    <>
        <Accordion selectionMode="multiple" className="w-full h-full bg-primary-100 text-primary-foreground rounded-3xl">
            {ExperienceObject.company.map((company, index) => (
            <AccordionItem
                key={index}
                aria-label={company}
                startContent={
                <Avatar
                    isBordered
                    color={ExperienceObject.borderColor[index]}
                    radius="lg"
                    src={ExperienceObject.logoSource[index]}
                />
                }
                subtitle={
                <span className="text-secondary-200">{company}</span>
                }
                title={
                <span className={ExperienceObject.titleColor[index]}>{ExperienceObject.title[index]}</span>
                }
            >
                <div className="flex-shrink basis-auto h-fit">
                    <strong className="text-large">
                        <span className="text-secondary">{ExperienceObject.experienceYears[index]}:</span>{" "}{ExperienceObject.experienceMonths[index]}
                    </strong>
                    <br />
                    <p className="text-medium py-2 text-wrap mx-8 leading-snug" dangerouslySetInnerHTML={{ __html: ExperienceObject.roleDescription[index] }}></p>
                </div>
            </AccordionItem>
            ))}
        </Accordion>
    </>
);
}
