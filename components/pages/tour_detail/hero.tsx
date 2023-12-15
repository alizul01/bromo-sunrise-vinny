import Image from "next/image";
import React from "react";

const Hero = ({imageUrl}: { imageUrl: string }) => {
    return (
        <section>
            <div className="w-full h-[42rem] relative">
                <Image
                    src={imageUrl}
                    alt={'hero'}
                    fill
                    sizes={'100%'}
                    style={{objectFit: "cover"}}
                />
            </div>
        </section>
    );
};

export default Hero;
