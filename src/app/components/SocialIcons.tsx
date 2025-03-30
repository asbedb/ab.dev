import React from "react";
import { Button, Link } from "@nextui-org/react";
import { FaGithub , FaLinkedin, FaMedium, FaBluesky, FaNoteSticky  } from 'react-icons/fa6';

export default function SocialIcons(){
    return(
        <>
        <div className="flex flex-wrap gap-1 justify-center p-2">
                <Link href="https://www.github.com/asbedb" target="_blank">
                    <Button color="secondary" radius="full" variant="bordered" startContent={<FaGithub className="text-3xl"/>}>
                        
                    </Button>
                </Link>
            <Link href="https://www.linkedin.com/in/asbed" target="_blank">
                <Button color="secondary" radius="full" variant="bordered" startContent={<FaLinkedin className="text-3xl"/>}>
                    
                </Button>
            </Link>
            <Link href="https://docs.asbedb.com" target="_blank">
                <Button color="secondary" radius="full" variant="bordered" startContent={<FaNoteSticky className="text-3xl"/>}>
                    
                </Button>
            </Link>
            <Link href="https://www.medium.com/asbedb" target="_blank">
                <Button color="secondary" radius="full" variant="bordered" startContent={<FaMedium className="text-3xl"/>}>
                    
                </Button>
            </Link>
            <Link href="https://bsky.app/profile/asbedb.bsky.social" target="_blank">
                <Button color="secondary" radius="full" variant="bordered" startContent={<FaBluesky className="text-3xl"/>}>
                    
                </Button>
            </Link>
        </div>
        </>
    )
}