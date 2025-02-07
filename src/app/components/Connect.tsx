"use client";
import { useState, useRef } from "react";
import { Card, CardHeader, CardBody, Input, Textarea, Button } from "@nextui-org/react";
import SocialIcons from "./SocialIcons";
import Gradient from "./Gradient";

function Connect() {
    const [result, setResult] = useState("");
    const formRef = useRef<HTMLFormElement | null>(null); // Create a ref for the form

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Access the form elements and cast them to the correct types
        const name = (event.currentTarget.elements.namedItem("name") as HTMLInputElement)?.value;
        const email = (event.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
        const message = (event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement)?.value;

        // Check if any required fields are empty
        if (!name || !email || !message) {
            setResult("Please fill in all required fields.");
            return;
        }

        setResult("Sending....");
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "b0db9ef2-4fb3-4d77-a8ca-ed449e56089c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();

        if (data.success) {
            setResult("Your message has been sent!");
            if (formRef.current) {
                formRef.current.reset(); // Safely reset the form
            }
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <Card className="flex flex-col p-4 bg-background shadow-none ">
                <CardHeader>
                    <h1 className="flex w-full h-auto justify-center text-[7vh]">
                        <Gradient>Contact </Gradient>✉️
                    </h1>
                </CardHeader>
                <CardBody className="flex w-full h-auto items-center gap-4 text-[4vh]">
                    <form ref={formRef} onSubmit={onSubmit} className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col w-full gap-4 justify-center">
                                <Input
                                    isRequired
                                    name="name"
                                    label="Name"
                                    type="text"
                                    className="flex w-full"
                                />
                                <Input
                                    isRequired
                                    label="Email"
                                    type="email"
                                    name="email"
                                    className="flex w-full"
                                />
                                <Textarea
                                    isRequired
                                    className="flex w-full"
                                    name="message"
                                    label="Message"
                                />
                                <div
                                    className={`flex w-full text-sm justify-center ${
                                        result === "Your message has been sent!" ? "text-success-400" : "text-danger-400"
                                    } text-secondary-100`}
                                >
                                    {result}
                                </div>
                            </div>
                            <Button
                                size="md"
                                className="mx-auto"
                                type="submit"
                                isDisabled={result === "Your message has been sent!"}
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                    <SocialIcons/>
                </CardBody>
            </Card>
        </>
    );
}

export default Connect;
