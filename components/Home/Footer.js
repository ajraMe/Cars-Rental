import React from 'react';
import Container from "@/components/Container";
import Social from "@/components/Social";


const Appendix = () => (
        <footer>
            <div className="footer__appendix">
                <div className="footer__line"><span></span></div>
                <Container className="footer__appendix-container container">
                    <div className="appendix__row">
                        <div className="appendix__copyright">© CODERS.BAY Linz 2024</div>
                        <div className="mb-8 xl:mb-0">
                            <Social
                                containerStyles="flex gap-6"
                                iconStyles="w-9 h-9 border border-text-white rounded-full flex
                                justify-center items-center text-text-white text-base hover:bg-red-600
                                hover:transition-all duration-500"
                            />
                        </div>
                        <div className="appendix__origin">Designed & Developed by<br/>Ahmed Alajrami</div>
                    </div>
                </Container>
            </div>
        </footer>
    )
;

export default Appendix;