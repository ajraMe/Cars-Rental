import {Button} from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import React from "react";

const page = () => {
    return (
        <section className="h-full">
            <div>
                <div className="container mx-auto h-full">
                    <div className="flex flex-col xl:flex-row items-center justify-between
                xl:pt-8 xl:pb-24 text-white">
                        {/* text*/}
                        <div className="text-center xl:text-left order-2 xl:order-none">
                            <span className="text-xl"> Car Rental</span>
                            <h1 className="h1 mb6">
                                Hallo World
                                <br/>
                                <span className="text-red-600">Carsi</span>
                            </h1>
                            <p className="max-w-[500px] mb-9 text-white/80">
                                I excel at creaft test for text
                            </p>
                            {/* btn and socials*/}
                            <div className="flex flex-col xl:flex-row items-center gap-8">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-2 hover:bg-red-600 p-2 rounded-full text-white"
                                >
                                    <a href="/home"
                                       className="hover:bg-red-600 p-2 rounded-full text-white border-2 border-white hover:border-red-600 transition duration-200">Explore
                                        Cars</a>


                                </Button>
                                <div className="mb-8 xl:mb-0">
                                    <Social
                                        containerStyles="flex gap-6"
                                        iconStyles="w-9 h-9 border border-text-white rounded-full flex
                                justify-center items-center text-text-white text-base hover:bg-red-600
                                hover:transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* text*/}
                        <div className="order-1 xl:order-none mb-8 xl:mb-0">
                            <Photo img={"/assets/photoo.png"}/>
                        </div>

                    </div>
                </div>
                <Stats/>
            </div>
        </section>
    )
}

export default page