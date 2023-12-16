import React from "react";
import Image from "next/image";
import map_gallery from "@/public/assets/image/utils/top-gallery.png";
import {Gallery} from "next-gallery";

const images = [
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16/9 },
    { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
]

const widths = [1920, 1000, 1600]
const ratios = [3, 4, 6, 8]

const GallerySection: React.FC = () => {
    return (
        <section className={'relative container mx-auto xl:max-w-7xl'}>
            <div className={'absolute top-0 left-0 opacity-70 -z-10'}>
                    <span>
                        <Image src={map_gallery} alt={'Map'}/>
                    </span>
            </div>
            <div className={'flex flex-col items-center gap-4 pb-4 pt-16 mb-2'}>
                <div>
                    <h2 className={'text-xl xl:text-2xl font-medium text-gray-900'}>
                        Gallery
                    </h2>
                    <div className={'container mx-auto w-12 h-0.5 bg-orange-400 rounded-full mt-4'}/>
                </div>
                <div>
                    <p className={'text-gray-600 font-light text-lg text-center'}>
                        Look around the beauty of East Java with us. You will be amazed by the beauty of nature.
                    </p>
                </div>
            </div>
            <div>
                <Gallery images={images} widths={widths} ratios={ratios} />
            </div>
        </section>
    )
}

// @ts-ignore
export default GallerySection