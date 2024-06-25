"use client";
import Photo from "./Photo";
import {useEffect, useState} from "react";

const Row = ({title, subtitle, img, imgSize, reversed}) => {
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const screenSize = useWindowSize();

    return (
        <div>
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between
                xl:pt-8 xl:pb-24 text-white"
                     style={reversed && screenSize.width > 1280 ? {
                         flexDirection: "row-reverse",
                         justifyContent: "flex-end",
                         gap: 30
                     } : {gap: 30}}>
                    <div className="text-center xl:text-left order-2 xl:order-none about-us__item-text">
                        <h2 className="h2 mb6">{title}</h2>
                        <div className="text-xl">
                            {subtitle}
                        </div>
                    </div>
                    {/* text*/}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo img={img}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Row;