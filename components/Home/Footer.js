import React from 'react';
import Container from "@/components/Container";


const Appendix = () => (
    <footer>
        <div className="footer__appendix">
            <div className="footer__line"><span></span></div>
            <Container className="footer__appendix-container container">
                <div className="appendix__row">
                    <div className="appendix__copyright">© CODERS.BAY Linz 2024</div>
                    <div className="appendix__origin">Designed & Developed by<br/>Ahmed Alajrami</div>
                </div>
            </Container>
        </div>
    </footer>
    )
;

export default Appendix;