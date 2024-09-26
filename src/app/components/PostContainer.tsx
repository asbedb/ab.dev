import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import Gradient from "./Gradient";

type PostContainerProps = {
    children: React.ReactNode;
}

const PostContainer: React.FC<PostContainerProps> = ({children}) => {
    return(
        <>
            <div className="align-top grid grid-cols-3 grid-rows-1 grid-flow-row gap-3 bg-primary-400 h-fit p-4 rounded-xl">
                <div className="col-span-3 row-span-1 text-center text-2xl"><Gradient>Latest Updates</Gradient></div>
                {children}
            </div>
        </>
    )
}

export default PostContainer