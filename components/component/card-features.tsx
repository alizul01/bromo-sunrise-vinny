import React, {ReactNode} from "react";
import Image from "next/image";
import {BiSolidGroup, BiSolidUser} from "react-icons/bi";
import {HiArrowRight} from "react-icons/hi";
import Link from "next/link";

interface CardFeaturesProps {
    title: string;
    slug: string;
    description: string;
    price: number[];
    image: string;
    isEven?: boolean;
    include?: {
        name: string;
        icon: ReactNode;
    }[];
}

interface IconTextProps {
    icon: ReactNode;
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

const CardFeatures: React.FC<CardFeaturesProps> = ({ title, slug, description, price, image, isEven, include }) => {
    const lowestDomesticPrice = Math.min(...price);
    const formatToRupiah = (amount: number) => {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);
    };

    const renderIncludeList = () => {
        if (!include || include.length === 0) {
            return null;
        }

        const itemsPerColumn = 3;
        const numberOfColumns = Math.ceil(include.length / itemsPerColumn);

        return (
            <div className={'flex flex-col md:flex-row md:gap-12'}>
                {[...Array(numberOfColumns)].map((_, columnIndex) => (
                    <ul key={columnIndex} className={'list-disc list-inside text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8 space-y-3'}>
                        {include.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn).map((item, index) => (
                            <li key={index} className={'flex flex-row gap-3 items-center'}>
                                {item.icon}
                                <p className={'text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8'}>
                                    {item.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        );
    };

    return (
        <div className={`border border-gray-200 flex w-full gap-4 lg:gap-16 rounded-xl p-2 items-center flex-col justify-center bg-white px-4 md:px-8 lg:px-12 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:py-4 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 hover:bg-gray-50 outline-none`}>
            <div className="relative w-full h-80 md:h-96 lg:w-[64rem] lg:h-[22rem] rounded-lg max-w-4xl">
                <Image
                    src={`/assets/image/products/${image}/1.webp`}
                    alt={title}
                    fill
                    sizes={'100%'}
                    style={{ objectFit: "cover" }}
                    className={'rounded-lg'}
                    priority={true}
                    loading={'eager'}
                />
            </div>
            <div className={'flex flex-col items-start w-full lg:py-8 gap-2'}>
                <div className={'lg:mb-2 flex flex-col gap-3'}>
                    <h2 className={'text-xl md:text-3xl lg:text-4xl font-bold text-gray-900'}>
                        {title}
                    </h2>
                    <p className={'text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8'}>
                        {description}
                    </p>
                    <div className={'flex flex-row gap-2 md:gap-4 my-2'}>
                        <IconText icon={<BiSolidUser className={'text-2xl text-orange-400'} />} text={'Private Tour'} />
                        <IconText icon={<BiSolidGroup className={'text-2xl text-orange-400'} />} text={'Group Tour'} />
                    </div>
                    <div>
                        <p className={'text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8'}>
                            Included:
                        </p>
                        {renderIncludeList()}
                    </div>
                </div>
                <div className={'flex flex-col md:flex-row justify-between w-full md:items-center mt-8'}>
                    <div className={'flex flex-row gap-2 align-bottom'}>
                        <div>
                            <p className={'text-gray-500 font-light text-lg md:text-base text-start tracking-tight leading-8'}>
                                Start from
                            </p>
                        </div>
                        <div>
                            <p className={'text-gray-900 font-medium text-xl md:text-base text-start tracking-tight leading-8'}>
                                {formatToRupiah(lowestDomesticPrice)}
                            </p>
                        </div>
                    </div>
                    <div className={'flex flex-row gap-2 md:gap-4 mt-4 md:mt-0 w-full md:w-fit'}>
                        <Link className={'bg-orange-500 p-2 px-4 rounded-lg text-white flex flex-row justify-center gap-2 items-center w-full'} href={`/tours/${slug}`}>
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
