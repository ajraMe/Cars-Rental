"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 18,
        text: "Years of experience",
    },
    {
        num: 37,
        text: "Around the world",
    },
    {
        num: 600,
        text: "Customers",
    },
    {
        num: 300,
        text: "customers",
    },
];
const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pd-0">
            <div className="container mx-auto text-white">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none font-mono font-extralight"
                     style={{fontSize: "20px"}}>
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center
                        xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={2.5}
                                    delay={0.6}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p
                                    className={`${
                                        item.text.length < 15 ? "max-w-[100px]" :
                                            "max-w-[150px]"
                                    } leading-snug text-w/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
