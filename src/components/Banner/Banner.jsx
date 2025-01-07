import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import firstImage from "../../assets/first.jpg";
import secondImage from "../../assets/second.jpg";
import thirdImage from "../../assets/third.jpg";
import fourthImage from "../../assets/fourth.jpg";

import "./Banner.css";

const Banner = () => {
    const slides = [
        { id: 1, src: firstImage, alt: "First Slide" },
        { id: 2, src: secondImage, alt: "Second Slide" },
        { id: 3, src: thirdImage, alt: "Third Slide" },
        { id: 4, src: fourthImage, alt: "Fourth Slide" },
    ];

    return (
        <div className="banner-container">
            <div className="typewriter-container text-center py-2 text-white bg-black">
                <h1 className="text-2xl md:text-4xl font-bold">
                    <Typewriter
                        words={[
                            "Welcome to Game Warrior!",
                            "Explore the Best Reviews!",
                            "Join Our Community!",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper w-full h-[400px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
