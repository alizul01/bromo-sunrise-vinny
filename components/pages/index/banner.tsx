import React from "react";
import Image from "next/image";
import BannerImage from "@/public/assets/banner/banner-1.png";

const Banner: React.FC = () => {
    return (
        <div>
            <Image src={BannerImage} alt={'Banner'} width={970} height={250} quality={75} layout={'responsive'} />
        </div>
    )
}

export default Banner