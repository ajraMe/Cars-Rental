import Row from "../../components/Row";
import Container from "../../components/Container";

const AboutUs = () => {
    return (
        <section className="h-full" style={{display: "flex", flexDirection: "column", gap: 30, padding: "30px 0"}}>
            <Container>
                <Row
                    title={"About Us"}
                    subtitle={
                        <ul className={"about-us__item"}>
                            <li>Welcome to Carsi, Australia’s premier destination for luxury car rentals. We pride
                                ourselves
                                on offering an unparalleled selection of high-end vehicles, providing our customers with
                                the
                                ultimate driving experience. Whether you're seeking the thrill of a sports car, the
                                elegance
                                of a classic luxury sedan, or the versatility of an upscale SUV, Carsi has the perfect
                                vehicle to match your style and needs.
                            </li>
                        </ul>
                    }
                    img={"/assets/carsi.png"}
                    reversed={false}
                />

                <Row
                    title={"Our Mission"}
                    subtitle={
                        <ul className={"about-us__item"}>
                            <li>At Carsi, our mission is simple: to deliver exceptional service and premium vehicles
                                that
                                transform every journey into an unforgettable experience.
                            </li>
                            <li>We are committed to exceeding your expectations with our meticulously maintained fleet,
                                personalized customer service, and seamless rental process.
                            </li>
                        </ul>
                    }
                    img={"/assets/miss.png"}
                    reversed={true}
                />

                <Row title={"Why Choose Carsi?"}
                     subtitle={
                         <ul className={"about-us__item"}>
                             <li><strong>Luxury Fleet:</strong> Our extensive collection features the latest models from
                                 top-tier brands, ensuring you drive only the best.
                             </li>
                             <li><strong>Exceptional Service:</strong> From booking to return, our dedicated team is
                                 here to
                                 provide you with a smooth and enjoyable rental experience.
                             </li>
                             <li><strong>Flexibility:</strong> Whether it's a short-term rental for a special occasion
                                 or a
                                 long-term hire for an extended stay, we offer flexible rental options to suit your
                                 needs.
                             </li>
                             <li><strong>Convenience:</strong> With multiple locations across Australia, picking up and
                                 dropping off your rental is always convenient and hassle-free.
                             </li>
                         </ul>
                     }
                     img={"/assets/our.png"}/>
                <Row
                    title={"Our Commitment to Excellence"}
                    subtitle={
                        <ul className={"about-us__item"}>
                            <li>We understand that renting a luxury car is more than just about transportation; it's
                                about
                                experiencing the finest things in life.
                            </li>
                            <li>That's why we go the extra mile to ensure every detail of your rental is perfect. From
                                the
                                moment you contact us to the time you return your vehicle, you can expect nothing but
                                the
                                highest standards of quality and professionalism.
                            </li>
                        </ul>
                    }
                    img={"/hero.svg"}
                    reversed={true}
                />

                <Row
                    title={"Experience Carsi"}
                    subtitle={
                        <ul className={"about-us__item"}>
                            <li>Discover the difference with Carsi. Whether you're cruising along Australia’s
                                picturesque
                                coastal roads, attending a business meeting in style, or celebrating a special occasion,
                                our
                                premium cars and exceptional service are here to elevate your experience.
                            </li>
                            <li>Join the Carsi community today and embark on a journey like no other. Drive luxury,
                                drive
                                Carsi.
                            </li>
                        </ul>
                    }
                    img={"/assets/Car-Hero.png"}
                    reversed={false}
                />
            </Container>
        </section>
    )
}

export default AboutUs