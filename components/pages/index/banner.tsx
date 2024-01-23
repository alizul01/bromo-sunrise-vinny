import React from "react";
import Image from "next/image";
import BannerImage from "@/public/assets/banner/banner-1.png";

const Banner: React.FC = () => {
    return (
        <div className={'flex flex-col'}>
            <div className="relative h-28 sm:h-[32rem] w-full overflow-hidden">
                <Image
                    src={BannerImage}
                    alt={'Banner'}
                    layout={'fill'}
                    objectFit={'cover'}
                    quality={100}
                    priority={true}
                />
                <div className="absolute inset-0 opacity-15 bg-gradient-to-t from-black to-transparent"/>

            </div>
        </div>
    )
}

export default Banner;
