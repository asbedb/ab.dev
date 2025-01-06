import React from "react";
import AboutCard from "./AboutCard";
import LatestPosts from "./LatestPosts";
import Skills from "./Skills";
import Showcase from "./Showcase";
import PostContainer from "./PostContainer";

export default function BentoBox(){
    return(
    <>
        <div className="grid 2xl:grid-cols-2 grid-flow-col 2xl:px-24 grid-cols-1">
            <div className="flex flex-col rounded-lg col-span-1 h-fit">
                <div className="flex rounded-lg h-1/4 p-4"><AboutCard /></div>
                <div className="flex rounded-lg h-1/4 p-4"> 
                <PostContainer>
                        <LatestPosts />
                </PostContainer>               
                </div>             
            </div>
            <div className="flex flex-col rounded-lg col-span-1 h-fit 2xl:row-start-1 row-start-2">
                <div className="flex rounded-lg h-fit p-4">
                    <Showcase/>
                </div>
                <div className="flex rounded-lg p-4">
                    <Skills />
                </div>
            </div>
        </div>

    </>
    )
}