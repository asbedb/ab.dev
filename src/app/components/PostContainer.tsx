import React from "react";
import Gradient from "./Gradient";

type PostContainerProps = {
    children: React.ReactNode;
}

const PostContainer: React.FC<PostContainerProps> = ({children}) => {
    return(
        <>
            <div className="align-top 
                            grid 
                            grid-cols-3 
                            grid-flow-row
                            gap-3
                            bg-primary-100
                            p-4 
                            rounded-xl
                            w-full  
                            ">
                <div className="text-center text-2xl row-span-1 col-span-3"><Gradient>Latest Updates</Gradient></div>
                {children}
            </div>
        </>
    )
}

export default PostContainer