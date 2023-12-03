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
        <div className={'flex w-full gap-16 rounded-lg p-2 items-center' + (isEven ? ' flex-row' : ' flex-row-reverse')}>
            <div className="relative w-[72rem] h-[26rem] rounded-lg">
                <Image
                    src={`/assets/image/products/${image}/1.png`}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className={'rounded-lg mr-4'}
                />
            </div>
            <div className={'flex flex-col items-start w-full py-8 gap-2'}>
                <h2 className={'text-xl xl:text-3xl font-bold text-gray-900'}>
                    {title}
                </h2>
                <p className={'text-gray-500 font-light text-lg text-start tracking-tight leading-8'}>
                    {description}
                </p>
                <div className={'flex flex-row gap-4 mt-4'}>
                    <IconText icon={<BiSolidUser className={'text-2xl text-orange-400'} />} text={'Private Tour'} />
                    <IconText icon={<BiSolidGroup className={'text-2xl text-orange-400'} />} text={'Group Tour'} />
                </div>
                <div className={'container w-full h-0.5 bg-gray-200 rounded-full'}/>
                <div className={'flex flex-row gap-4 justify-around w-full items-start'}>
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="relative w-40 h-40">
                            <Image
                                src={`/assets/image/products/${image}/${index + 2}.png`}
                                alt={title}
                                layout="fill"
                                objectFit="cover"
                                className={'rounded-lg'}
                            />
                        </div>
                    ))}
                </div>
                <div className={'container w-full h-0.5 bg-gray-200 rounded-full'}/>
                <div className={'flex flex-row justify-between w-full items-center'}>
                    <div className={'flex flex-col gap-2'}>
                        <div>
                            <p className={'text-gray-500 font-light text-lg text-start tracking-tight leading-8'}>
                                Start from
                            </p>
                        </div>
                        <div>
                            <p className={'text-gray-900 font-medium text-lg text-start tracking-tight leading-8'}>
                                {formatToRupiah(lowestDomesticPrice)}
                            </p>
                        </div>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <Link className={'flex flex-row gap-2 items-center'} href={`/tour/${slug}`}>
                            <div>
                                <p className={'text-gray-500 font-light text-lg text-start tracking-tight leading-8'}>
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
