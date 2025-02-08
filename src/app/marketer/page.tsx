import Navbar from "../components/Navbar/Navbar";
import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero";
import Section from "../components/Section/Section";
import SecondSection from "../components/Marketer/SecondSection/SecondSection";

const navbar = {
    logo: "/logos/digitec.png",
    links: ["Service", "Case study", "About us", "Career", "Blog"],
    buttonText: "Book a consultation",
    buttonClassname: "button-primary lg:w-60"
}

const marketerHero = {
    classNameSecondHero: "second-hero-content",
    title: "You are a marketer",
    description: "AI marketing empowers marketers to automate tasks, analyze data, and uncover unique creative opportunities and digital strategies that drive engagement and conversions.",
    buttonText: "Book a consultation",
    buttonClassname: "button-secondary text-black lg:w-60"
}

const secondSection = {
    title: "What's AI Marketing?",
    description: "AI marketing is the use of artificial intelligence technologies to analyze data, predict trends, and optimize marketing strategies. It leverages tools like machine learning, natural language processing, and automation to create more efficient and personalized marketing efforts.",
}

const sectionMarketerHero = {
    classNameSection: "section-marketer-hero",
    children: <MarketerHero {...marketerHero} />
}

const sectionMarketerSecond = {
    classNameSection: "section-marketer-second",
    children: <SecondSection {...secondSection} />
}

export default function Marketer() {
    return (
        <div>
            <Navbar {...navbar} />            
            <Section {...sectionMarketerHero} />
            <Section {...sectionMarketerSecond} />
        </div>
    )
}