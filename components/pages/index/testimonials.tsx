'use client'

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from "flowbite-react";
import '@/data/testimonials_data';
import TESTIMONIALS_DATA from "@/data/testimonials_data";
import StarIcon from '@/public/assets/image/svg/star.svg';
import Link from "next/link";

const Testimonials: React.FC = () => {
    return (
        <motion.section className={'mt-2'}>
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5}}
                className={"px-6 xl:px-0 xl:max-w-[82rem] container mx-auto"}
            >
                <div className={"flex flex-col gap-2 items-center justify-center "}>
                    <div className="py-20">
                        <div className="container">
                            <div className={'flex flex-col items-center gap-4 py-4 mb-12'}>
                                <div>
                                    <h2 className={'text-xl xl:text-2xl font-medium text-gray-900'}>
                                        Testimonials
                                    </h2>
                                </div>
                                <div>
                                    <p className={'text-gray-600 font-light text-lg text-center'}>
                                        See what our customers have to say about us.
                                    </p>
                                </div>
                            </div>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={TESTIMONIALS_DATA.length}
                                autoplay={true}
                                loop={true}
                            >
                                {TESTIMONIALS_DATA.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <Card className={'max-w-sm'}>
                                            <p className={'text-gray-600 font-light text-lg text-left'}>
                                                {testimonial.content}
                                            </p>
                                            <div className={'flex flex-row gap-1 mt-4'}>
                                                {[...Array(Math.floor(testimonial.rating))].map((e, i) => (
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                    </svg>
                                                ))}
                                                {testimonial.rating % 1 !== 0 && (
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                    </svg>
                                                )}
                                            </div>
                                            <div className={'flex flex-row gap-1 mt-4'}>
                                                <div className={'flex flex-row gap-1'}>
                                                    <img src={testimonial.imageUrl} className={'w-8 h-8 rounded-full'}/>
                                                    <div className={'flex flex-col'}>
                                                        <div className={'text-gray-900 font-medium text-sm'}>
                                                            {testimonial.name}
                                                        </div>
                                                        <div className={'text-gray-600 font-light text-xs'}>
                                                            {testimonial.position}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Testimonials;