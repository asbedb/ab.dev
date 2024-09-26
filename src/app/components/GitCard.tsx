"use client"
import { Card, CardBody, CardHeader, Spinner} from "@nextui-org/react";
import { useEffect, useState} from "react";
import Gradient from "./Gradient";
import { FaGithubSquare } from "react-icons/fa";
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
                {profile.length > 0 ? (
                    profile.map((pid, index) => (
                            <Card key={index} className="bg-primary-100 text-primary-foreground h-64">
                                <CardHeader className="flex flex-col items-start align-middle justify-center">
                                    <div className="text-xl font-bold flex gap-2 leading-tight">
                                        <FaGithubSquare className="text-secondary-700"/>
                                        {pid.name}
                                    </div>
                                    <h4 className="font-bold text-xl text-secondary-400">{pid.language}</h4>
                                    <p className="text-sm pt-2">Last updated: {getDaysAgo(pid.updated_at)}</p>
                                </CardHeader>
                                <CardBody className="px-2 text-md text-foreground items-center bg-primary-600">
                                    <p className="text-primary-foreground py-4 px-2 w-full h-full">{pid.description}</p>
                                </CardBody>
                            </Card>
                    ))
                ) : (
                    <Spinner color="secondary"/>
                )}
    </>)
}