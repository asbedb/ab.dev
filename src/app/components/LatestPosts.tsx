"use client"
import { Card, CardBody, CardHeader, Spinner, Link} from "@nextui-org/react";
import { useEffect, useState} from "react";
import { FaGithubSquare } from "react-icons/fa";

interface Git {
    name: string;
    html_url: string;
    description: string;
    updated_at: string;
    language: string;
}

type FetchError = Error | null;

export default function LatestPosts(){
    const [profile, setProfile] = useState<Git[]>([]);
    const [error, setError] = useState<FetchError>(null);

    const getDaysAgo = (dateString : string) => {
        const givenDate = new Date(dateString);
        const currentDate = new Date();
        
        // Calculate the difference in time and convert to days
        const timeDifference = currentDate.getTime() - givenDate.getTime();
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
                const sortedData = data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
                setProfile(sortedData);
            } catch (err) {
                // Type assertion to handle unknown error type
                if (err instanceof Error) {
                    setError(err);
                    console.log(error)
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
                        <Link key={index} href={pid.html_url} target="_blank">
                            <Card className="bg-primary-200 text-primary-foreground h-60 w-full flex-grow hover:cursor-pointer hover:animate-pulse hover:bg-primary-50">
                                <CardHeader className="flex flex-col items-start align-middle justify-center ">
                                    <div className="text-lg font-bold flex gap-2 leading-tight content-evenly ">
                                        <FaGithubSquare className="text-purple-600"/>
                                        <span className="whitespace-normal truncate line-clamp-1">{pid.name}</span>
                                    </div>
                                    <h4 className="font-bold text-xl text-secondary-400">{pid.language || 'None'}</h4>
                                    <p className="text-sm pt-2">Posted: {getDaysAgo(pid.updated_at)}</p>
                                </CardHeader>
                                <CardBody className="px-2 text-md text-foreground items-center bg-primary-600">
                                    <p className="text-primary-foreground py-4 px-2 w-full">{pid.description}</p>
                                </CardBody>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <Spinner color="secondary"/>
                )}
    </>)
}