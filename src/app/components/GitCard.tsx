"use client"
import { Card, CardBody, CardHeader, Spinner, } from "@nextui-org/react";
import { useEffect, useState} from "react";

interface Git {
    name: string;
    html_url: string;
    description: string;
    updated_at: Date;
    language: string;
}

type FetchError = Error | null;

export default function GitCard(){
    const [profile, setProfile] = useState<Git[]>([]);
    const [error, setError] = useState<FetchError>(null);

    const getDaysAgo = (dateString : string) => {
        const givenDate = new Date(dateString);
        const currentDate = new Date();
        
        // Calculate the difference in time and convert to days
        const timeDifference = (currentDate - givenDate);
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));      
        return `${daysAgo} days ago`;
    };

    useEffect(() => {
        async function fetchGit() {
            try {
                const response = await fetch("../api/gitProfile/");
                if (!response.ok) {
                    throw new Error(`HTTP ERROR! status: ${response.status}`);
                }
                const data = await response.json();
                setProfile(data);
            } catch (err) {
                // Type assertion to handle unknown error type
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error("Unknown error occurred"));
                }
            }
        }
        fetchGit();
    }, []);

    return(<>
        <div className="flex flex-col md:flex-row gap-5">                           
            {profile.length > 0 ? (
                profile.map((pid, index) => (
                    <Card key={index} className="bg-primary-100 text-primary-foreground w-full h-64">
                        <CardHeader className="flex-col items-start">
                            <p className="text-2xl font-bold">{pid.name}</p>
                            <h4 className="font-bold text-xl text-secondary">{pid.language}</h4>
                            <p className="text-sm pt-2">Last updated: {getDaysAgo(pid.updated_at)}</p>
                        </CardHeader>
                        <CardBody className="px-3 text-md text-foreground items-center">
                            <p className="text-primary-foreground bg-primary-300 py-4 px-2 w-full h-full">{pid.description}</p>
                        </CardBody>
                    </Card>
                ))
            ) : (
                <Spinner color="secondary"/>
            )}
        </div>
    </>)
}