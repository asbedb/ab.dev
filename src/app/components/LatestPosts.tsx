"use client"
import { Card, CardBody, CardHeader, Spinner, Link} from "@nextui-org/react";
import { useEffect, useState} from "react";
import { FaGithubSquare, FaMediumM } from "react-icons/fa";

interface PostTypes{
    pulledFrom:  string,
    title: string,
    link: string,
    category: string,
    description: string
    updated_at: string,
}

type FetchError = Error | null;


export default function LatestPosts(){
    const [postContent, setPostContent] = useState<PostTypes[]>([])
    const [error, setError] = useState<FetchError>(null);


    useEffect(() => {
        async function fetchGit() {
            try {
                const response = await fetch("/api/gitProfile/");
                if (!response.ok) {
                    throw new Error(`HTTP ERROR! status: ${response.status}`);
                }
                const data = await response.json();
                setPostContent(data)
            } catch (err) {
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
                {postContent.length > 0 ? (
                    postContent.map((post, index) => (
                        <Link key={index} href={post.link} target="_blank">
                            <Card className={`bg-primary-200 text-primary-foreground h-60 w-full flex-grow hover:cursor-pointer hover:animate-pulse hover:bg-primary-50`}>
                                <CardHeader className="flex flex-col items-start align-middle gap-2 content-evenly">
                                        {post.pulledFrom == "GitHub"? <FaGithubSquare className="text-secondary-400 text-lg md:text-2xl"/> : <FaMediumM className="text-secondary-400 text-lg md:text-2xl"/>}
                                        <span className="whitespace-normal truncate line-clamp-1 text-xl md:text-3xl"> {post.pulledFrom == "GitHub"? "🖥️": "📰"}{post.title}</span>
                                        <h4 className="flex font-bold text-md text-secondary-400 break-words">{post.category || 'None'}</h4>
                                        <h5>{post.updated_at}</h5>
                                </CardHeader>
                                <CardBody className="px-2 text-md text-foreground items-center bg-primary-600">
                                    <p className="text-primary-foreground px-2 w-full">{post.description}</p>
                                </CardBody>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <Spinner color="secondary"/>
                )}
    </>)
}