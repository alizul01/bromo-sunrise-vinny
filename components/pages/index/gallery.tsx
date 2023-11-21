import React from "react";
import hero_img from '@/public/assets/image/gallery/1.jpg';
import Image from "next/image";

const Gallery: React.FC = () => {
    return (
        <section className={'mt-24 relative container mx-auto xl:max-w-7xl'}>
            <div className={'flex flex-col items-center gap-4 py-4 mb-2'}>
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
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap4">
                <Image
                    width={1080}
                    height={1080}
                    className="w-full h-full rounded-lg object-cover col-span-2 md:col-span-3 row-span-2"
                    src={hero_img}
                    alt="Borabora"
                />
                <Image
                    width={1080}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                    src={hero_img}
                    alt="Borabora2"
                />
                <Image
                    width={1080}
                    height={1080}
                    className="w-full h-full rounded-lg object-cover "
                    src={hero_img}
                    alt="Maldives"
                />
                <Image
                    width={1080}
                    height={1080}
                    className="w-full h-full rounded-lg object-cover "
                    src={hero_img}
                    alt="Maldives2"
                />
                <Image
                    width={1080}
                    height={1080}
                    className="w-full h-full rounded-lg object-cover "
                    src={hero_img}
                    alt="Keywest"
                />
            </div>
        </section>
    )
}

export default Gallery