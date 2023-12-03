import React, {ReactNode} from "react";
import Image from "next/image";
import {BiSolidGroup, BiSolidUser} from "react-icons/bi";
import {HiArrowRight} from "react-icons/hi";
import Link from "next/link";

interface CardFeaturesProps {
    title: string;
    slug: string;
    description: string;
    price: Record<number, { domestic: number; foreign: number }>; // Adjust the type based on your data structure
    image: string;
    isEven?: boolean;
}

interface IconTextProps {
    icon: ReactNode; // ReactNode allows any valid React children, including components
    text: string;
}

export const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
    return (
        <div className={'flex flex-row items-start gap-4 justify-center'}>
            {icon}
            <p className={'text-gray-900 font-medium text-lg text-center'}>{text}</p>
        </div>
    );
};

const CardFeatures: React.FC<CardFeaturesProps> = ({ title, slug, description, price, image, isEven }) => {
    const lowestDomesticPrice = price[6]?.domestic || 0;
    const formatToRupiah = (amount: number) => {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);
    };

    return (
        <div className={`flex w-full gap-4 lg:gap-16 rounded-xl p-2 items-center flex-col justify-center bg-white px-4 md:px-8 lg:px-12 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:py-8 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 hover:bg-gray-50 outline-none`}>
            <div className="relative w-full h-80 md:h-96 lg:w-[54rem] lg:h-[26rem] rounded-lg max-w-3xl">
                <Image
                    src={`/assets/image/products/${image}/1.png`}
                    alt={title}
                    fill
                    sizes={'100%'}
                    style={{ objectFit: "cover" }}
                    className={'rounded-lg'}
                />
            </div>
            <div className={'flex flex-col items-start w-full lg:py-8 gap-2'}>
                <h2 className={'text-xl md:text-3xl lg:text-4xl font-bold text-gray-900'}>
                    {title}
                </h2>
                <p className={'text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8'}>
                    {description}
                </p>
                <div className={'flex flex-row gap-2 md:gap-4 mt-4'}>
                    <IconText icon={<BiSolidUser className={'text-2xl text-orange-400'} />} text={'Private Tour'} />
                    <IconText icon={<BiSolidGroup className={'text-2xl text-orange-400'} />} text={'Group Tour'} />
                </div>
                <div className={'container w-full h-0.5 bg-gray-200 rounded-full mt-4 md:mt-6'}/>
                <div className={'flex flex-col md:flex-row gap-4 justify-around w-full items-start'}>
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="relative w-full md:w-56 h-40 md:h-56">
                            <Image
                                src={`/assets/image/products/${image}/${index + 2}.png`}
                                alt={title}
                                fill
                                sizes={'100%'}
                                style={{ objectFit: "cover" }}
                                className={'rounded-lg'}
                            />
                        </div>
                    ))}
                </div>
                <div className={'container w-full h-0.5 bg-gray-200 rounded-full mt-4 md:mt-6'}/>
                <div className={'flex flex-col md:flex-row justify-between w-full items-center'}>
                    <div className={'flex flex-row gap-2'}>
                        <div>
                            <p className={'text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8'}>
                                Start from
                            </p>
                        </div>
                        <div>
                            <p className={'text-gray-900 font-medium text-xl md:text-2xl text-start tracking-tight leading-8'}>
                                {formatToRupiah(lowestDomesticPrice)}
                            </p>
                        </div>
                    </div>
                    <div className={'flex flex-row gap-2 md:gap-4 mt-4 md:mt-0 w-full lg:w-fit'}>
                        <Link className={'bg-orange-500 p-2 px-4 rounded-lg text-white flex flex-row justify-center gap-2 items-center w-full'} href={`/tour/${slug}`}>
                            <div>
                                <p className={'text-white font-medium text-lg md:text-base tracking-tight leading-8 text-center'}>
                                    See more
                                </p>
                            </div>
                            <div>
                                <HiArrowRight />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFeatures;
