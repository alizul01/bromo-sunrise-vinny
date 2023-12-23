import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryTourSectionProps {
    images: string[];
}

const GalleryTourSection: React.FC<GalleryTourSectionProps> = ({ images }) => {
    return (
        <section>
            <div className={'mt-4'}>
                <div className={"grid grid-cols-2 gap-4"}>
                    {images.map((image, index) => (
                        <div key={index}>
                            {image ? (
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="rounded-md object-cover w-full h-52"
                                />
                            ) : (
                                <Skeleton
                                    style={{
                                        aspectRatio: "4/3",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryTourSection;
