import React from "react";
import Gradient from "./Gradient";

type PostContainerProps = {
    children: React.ReactNode;
}

const PostContainer: React.FC<PostContainerProps> = ({children}) => {
    return(
        <>
            <div className="align-top 
                flex
                flex-col
                bg-primary-100
                p-4 
                rounded-xl
                w-full
                gap-4 
            ">
                <div className="text-center text-2xl row-span-1 2xl:col-span-3">
                    <Gradient>Latest Updates</Gradient>
                </div>
                <div className="flex flex-col md:flex-row w-full flex-wrap p-4 gap-4 justify-center  ">
                    {children}
                </div>
            </div>
        </>
    )
}

export default PostContainer