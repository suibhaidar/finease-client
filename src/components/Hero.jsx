import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const Hero = () => {
    const slides = [
        {
            tagline: "Master Your Money, Master Your Life",
            subtitle: "Take control of your finances and turn your dreams into reality.",
            image: "https://i.ibb.co/jv5kTWtS/soncoy.jpg",

        },
        {
            tagline: "Save Today, Secure Tomorrow",
            subtitle: "Your journey to financial freedom starts now.",
            image: "https://i.ibb.co/nqyWd3Lg/mony.webp",

        },
        {
            tagline: "Invest Smartly, Live Freely",
            subtitle: "Grow your wealth with confidence and ease.",
            image: "https://i.ibb.co/j9kV3yq4/austin-distel-jp-Hw8ndw-J-Q-unsplash.jpg",

        }
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            
            className="w-full min-h-screen"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <section
                        className={`w-full min-h-screen flex items-center bg-[#678b9e]`}
                    >
                        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 relative">

                            {/* Left: Text */}

                            <div className="w-full md:w-1/2 md:mb-0 text-center ml-10" >

                                <h1
                                    className={`text-4xl md:text-6xl font-bold mb-5 text-[#1C352D]`}
                                >
                                    {slide.tagline}
                                </h1>
                                {/* <p className="text-white/90 text-[18px] mb-5">{slide.subtitle}</p> */}
                                <Link className="bg-gradient-to-r from-[#1C352D] to-[#6AA97B] text-white font-semibold px-6 py-3 rounded-lg transition duration-300">Get Started</Link>
                            </div>

                            {/* Right: Image */}
                            <div className="w-full md:w-1/2 justify-center hidden md:flex">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full max-w-md object-contain rounded-xl shadow-2xl"
                                />
                                {/* overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl flex items-center md:max-w-11/12 mx-auto" >

                                </div>
                            </div>


                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;
