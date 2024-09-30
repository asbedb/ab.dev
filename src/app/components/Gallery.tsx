"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Gallery({ keyProp }) {
    const galleryLinks = {
        dssavy: ["/image/screen_dss_1.png", "/image/screen_dss_2.png"],
        sql: ["/image/screen_sql_1.png", "/image/screen_sql_2.png"],
        disctcg: ["", ""]
    };

    // Get images based on the passed key
    const images = galleryLinks[keyProp] || [];

    // State for the currently displayed large image
    const [showcaseImage, setShowcaseImage] = useState(images[0]);

    // Function to handle the click event on small images
    const handleImageClick = (src) => {
        setShowcaseImage(src);
    };

    const openImageInNewTab = () => {
        if (showcaseImage) {
            window.open(showcaseImage, "_blank");
        }
    };

    return (
        <>
            <div className="grid grid-cols-5 row-span-2 gap-4">
                {/* Large showcase image */}
                <div className="col-span-5 row-span-2 rounded-md cursor-pointer hover:animate-pulse " onClick={openImageInNewTab}>
                    <Image 
                        src={showcaseImage} 
                        alt="Showcase Image" 
                        width={1920}
                        height={1080}
                        className="object-cover"
                    />
                </div>
                
                {/* Small images */}
                {images.map((src, index) => (
                    src && (
                        <div 
                            key={index} 
                            className="col-span-1 cursor-pointer border-primary-50 border-solid border-4 hover:animate-pulse" 
                            onClick={() => handleImageClick(src)} // Update showcase image on click
                        >
                            <Image 
                                src={src} 
                                alt={`Screenshot ${index + 1}`} 
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                    )
                ))}
            </div>
        </>
    );
}
