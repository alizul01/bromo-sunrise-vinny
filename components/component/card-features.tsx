import React, {Fragment} from "react";
import {Button, Card} from "flowbite-react";
import Link from "next/link";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {HiArrowRight} from "react-icons/hi";

interface CardFeaturesProps {
    title: string;
    slug: string;
    description: string;
    price: Record<number, { domestic: number; foreign: number }>; // Adjust the type based on your data structure
    image: string;
}

const CardFeatures: React.FC<CardFeaturesProps> = ({ title, slug, description, price, image }) => {
    const lowestDomesticPrice = price[6]?.domestic || 0;
    const formatToRupiah = (amount: number) => {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);
    };

    return (
        <Fragment>
            <Card
                className="max-w-sm"
                imgAlt={`${title} image`}
                imgSrc={`assets/image/products/${image}`}
            >
                <Link href={`/tours/${slug}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </Link>
                <p className="font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-gray-900 dark:text-white">{`${formatToRupiah(lowestDomesticPrice)}`}</span>
                    <Button size={''}
                        href={`/tours/${slug}`}
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                        Detail
                        <HiArrowRight className={'ml-2'} />
                    </Button>
                </div>
            </Card>
        </Fragment>
    );
};

export default CardFeatures;
