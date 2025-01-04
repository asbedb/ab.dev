import React from "react";
import AboutCard from "./AboutCard";
import LatestPosts from "./LatestPosts";
import Skills from "./Skills";
import Showcase from "./Showcase";
import PostContainer from "./PostContainer";

export default function BentoBox(){
    return(
    <>
        <div className="grid h-screen gap-4 p-4 mx-4 grid-flow-col md:col-span-1">
            <div className="flex rounded-lg h-fit col-start-1">
                <AboutCard />
            </div>
            
            {/* Post Container: 30% of rows (spans 2 rows, 2 columns) */}
            <div className="flex rounded-lg h-fit col-start-1">
                <PostContainer>
                    <LatestPosts />
                </PostContainer>
            </div>

            {/* Showcase Section: Shares 70% with Skills (spans 2 rows, 1 column) */}
            <div className="flex rounded-lg h-fit col-start-2">
                <Showcase />
            </div>
            
            {/* Skills Section: Shares 70% with Showcase (spans 2 rows, 1 column) */}
            <div className="flex rounded-lg h-1/2">
                <Skills />
            </div>
        </div>
    </>
    )
}