import Navbar from "../components/Navbar/Navbar";
import SecondHero from "../components/SecondHero/SecondHero";
import Section from "../components/Section/Section";
const navbar = {
    logo: "/logos/digitec.png",
    links: ["Service", "Case study", "About us", "Career", "Blog"],
    buttonText: "Book a consultation",
    buttonClassname: "button-primary lg:w-60"
}

const secondHeroMarketer = {
    classNameSecondHero: "second-hero-content",
    title: "You are a marketer",
    description: "AI marketing empowers marketers to automate tasks, analyze data, and uncover unique creative opportunities and digital strategies that drive engagement and conversions.",
    buttonText: "Book a consultation",
    buttonClassname: "button-secondary text-black lg:w-60"
}

const sectionMarketerHero = {
    classNameSection: "section-marketer-hero",
    children: <SecondHero {...secondHeroMarketer} />
}

export default function Marketer() {
    return (
        <div>
            <Navbar {...navbar} />            
            <Section {...sectionMarketerHero} />
        </div>
    )
}