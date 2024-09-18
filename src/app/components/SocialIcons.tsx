import React from "react";
import { Button, Link } from "@nextui-org/react";
import { FaGithub , FaLinkedin, FaMedium, FaSquareXTwitter, FaTwitter } from 'react-icons/fa6';

export default function SocialIcons(){
    return(
        <>
        <div className="gap-1 flex flex-row">
                <Link href="https:/www.github.com/asbedb" target="_blank">
                    <Button color="primary" radius="full" variant="bordered" startContent={<FaGithub className="text-3xl"/>}>
                        
                    </Button>
                </Link>
            <Link href="https://www.linkedin.com/in/asbed" target="_blank">
                <Button color="primary" radius="full" variant="bordered" startContent={<FaLinkedin className="text-3xl"/>}>
                    
                </Button>
            </Link>
            <Link href="https:/www.medium.com/asbedb" target="_blank">
                <Button color="primary" radius="full" variant="bordered" startContent={<FaMedium className="text-3xl"/>}>
                    
                </Button>
            </Link>
            <Link href="https:/www.twitter.com/asbedb" target="_blank">
                <Button color="primary" radius="full" variant="bordered" startContent={<FaTwitter className="text-3xl"/>}>
                    
                </Button>
            </Link>
        </div>
        </>
    )
}