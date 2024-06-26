import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface GalleryTourSectionProps {
    images: string[];
}

const GalleryTourSection: React.FC<GalleryTourSectionProps> = ({ images }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 4500, stopOnInteraction: true })
    )

    return (
        <section>
            <div>
                <Carousel
                    className="w-full"
                    opts={{
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div>
                                    {image && (
                                        <div className={'relative'}>
                                            <span className={'absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purple-700 to-purple-900 opacity-20 rounded-md'}/>
                                            <Image
                                                src={image}
                                                alt={`Gallery Image ${index + 1}`}
                                                className="rounded-md object-cover w-full h-96"
                                                width={1080}
                                                height={1080}
                                                priority={true}
                                                unoptimized={true}
                                                loading={"eager"}
                                                id={`gallery-image-${index + 1}`}
                                            />
                                        </div>
                                    )}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default GalleryTourSection;
