"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const Photo = ({img}) => {
    return (

        <div className="w-full h-full relative flex items-center justify-center p">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 0.4, duration: 0.6, ease: "easeIn"},
                }}
                className="relative"
            >
                {/* image */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 0.4, duration: 2.4, ease: "easeOut"},
                    }}
                    className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] mix-blend-lighten relative"
                >
                    <Image
                        src={img}
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>
                {/* circle */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#CB2400"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 2525", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
