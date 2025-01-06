"use client";
import React, { useState } from "react";
import {Image, 
    Button,
    useDisclosure,  
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,} from "@nextui-org/react";

interface GalleryProps {
    keyProp: keyof typeof galleryLinks
}
const galleryLinks = {
    dssavy: ["/image/screen_dss_1.png", "/image/screen_dss_2.png"],
    sql: ["/image/screen_sql_1.png", "/image/screen_sql_2.png"],
    disctcg: ["", ""]
};


export default function Gallery({ keyProp }: GalleryProps) {
    // Get images based on the passed key
    const images = galleryLinks[keyProp] || [];
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    // State for the currently displayed large image
    const [showcaseImage, setShowcaseImage] = useState(images[0]);

    // Function to handle the click event on small images
    const handleImageClick = (src: string) => {
        setShowcaseImage(src);
    };

    const openImageNewTab = () => {
        if (showcaseImage) {
            window.open(showcaseImage, "_blank");
        }
    };

    return (
        <>
            <div className="flex mx-auto py-2 flex-col gap-2 bg-primary-600">
                {/* Large showcase image */}
                <div className="flex rounded-md cursor-pointer hover:animate-pulse" onClick={onOpen}>
                    <Image 
                        isZoomed
                        src={showcaseImage} 
                        alt="Showcase Image" 
                        className="h-[450px] w-fit cursor-pointer"
                    />
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
                    <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1">Image</ModalHeader>
                            <ModalBody>
                                <Image 
                                    src={showcaseImage} 
                                    alt="Showcase Image" 
                                    className="flex w-screen cursor-pointer"
                                    onClick={openImageNewTab}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
                </div>
                <div className="grid grid-cols-4">
                    {images.map((src, index) => (
                        src && (
                            <div 
                                key={index} 
                                className="col-span-1 cursor-pointer hover:animate-pulse" 
                                onClick={() => handleImageClick(src)} // Update showcase image on click
                            >
                                <Image 
                                    isZoomed
                                    src={src} 
                                    alt={`Screenshot ${index + 1}`} 
                                    className="h-[100px]"
                                />
                            </div>
                        )
                    ))}
                </div>

            </div>
                {/* Small images
                
            </div> */}
        </>
    );
}
