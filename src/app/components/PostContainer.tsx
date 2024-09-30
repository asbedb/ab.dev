import React from "react";
import Gradient from "./Gradient";

type PostContainerProps = {
    children: React.ReactNode;
}

const PostContainer: React.FC<PostContainerProps> = ({children}) => {
    return(
        <>
            <div className="align-top grid grid-cols-1 grid-rows-1 grid-flow-row gap-3 bg-primary-100 p-4 rounded-xl 2xl:grid-cols-2 ">
                <div className="col-span-1 row-span-1 text-center text-2xl 2xl:col-span-3"><Gradient>Latest Updates</Gradient></div>
                {children}
            </div>
        </>
    )
}

export default PostContainer