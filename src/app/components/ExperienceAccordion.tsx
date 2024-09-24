"use client"
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";

export default function App() {

    return (
        <>
        <div className="flex justify-between">
                <Accordion selectionMode="multiple" className="bg-primary-100 text-primary-foreground rounded-3xl">
                    <AccordionItem
                        key="1"
                        aria-label="Lenovo"
                        startContent={
                        <Avatar
                            isBordered
                            color="danger"
                            radius="lg"
                            src="/image/lenovo_logo.jpeg"
                        />
                        }
                        subtitle={<span className="text-secondary-200">Lenovo Australia and New Zealand</span>}
                        title={<span className="text-red-500">Sales Leader</span>}
                    >
                        <strong className="text-medium"><span className="text-secondary">8 Years:</span> September 2015 - June 2024</strong><br/>
                            <p className="text-small py-2">As an experienced professional in sales and services management at Lenovo, I specialized in catering to the distinct needs of government, education, and enterprise sectors. <br/><br/>
                            Leading teams and fostering innovation, I develop tailored technology solutions and nurture client relationships to drive business success. Whether strategizing service delivery or growing key accounts, I prioritize customer satisfaction and continuous improvement to exceed expectations and deliver exceptional value.
                            </p>
                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="CompTier"
                        startContent={
                        <Avatar
                            isBordered
                            color="secondary"
                            radius="lg"
                            src="/image/ct.png"
                        />
                        }
                        subtitle={<span className="text-secondary-200">CompTier PTY LTD</span>}
                        title={<span className="text-blue-500">Founder and Developer</span>}
                    >
                        <strong>1 Year: February 2019 - January 2020</strong><br/><br/>
                        In February 2019, I began a new venture aimed at leveraging my business-to-business consulting experience and technical skills. Over the course of the following year, I successfully developed and sold several businesses under the Comptier PTY LTD umbrella. <br/><br/>
                        One of these businesses was a web-based CRM designed for an overseas market, which was developed, hosted, and sold within just three months. Additionally, I established a brick-and-mortar retail store in Melbourne catering to fine food, which also included an online sales component. This online portion of the business achieved a return on investment of 125%.
                    </AccordionItem>
                    <AccordionItem
                        key="3"
                        aria-label="Zoey Lang"
                        startContent={
                        <Avatar
                            isBordered
                            color="success"
                            radius="lg"
                            src="/image/dell.jpeg"
                        />
                        }
                        subtitle={<span className="text-secondary-200">Dell Australia</span>}
                        title={<span className="text-green-500">Technical Advocate</span>}
                    >
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}