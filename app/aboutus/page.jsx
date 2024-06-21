import Row from "../../components/Row";

const AboutUs = () => {
    return (
        <section className="h-full" style={{display: "flex", flexDirection: "column", gap: 30, padding: "30px 0"}}>
            <Row title={"About Us"} subtitle={"Carsi"} img={"/assets/photoo.png"}/>
            <Row title={"About Us"} subtitle={"Carsi"} img={"/assets/photoo.png"} reversed={true}/>
            <Row title={"About Us"} subtitle={"Carsi"} img={"/hero.svg"}/>
            <Row title={"SAbout Us"} subtitle={"Carsi"} img={"/hero.svg"} reversed={true}/>
        </section>
    )
}

export default AboutUs