import Navbar from "../components/Navbar/Navbar";
import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero";
import Section from "../components/Section/Section";
import SecondSection from "../components/BlackSection/BlackSection";
import ThirdSection from "../components/Marketer/ThirdSection/ThirdSection";

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

const sectionMarketerHero = {
    classNameSection: "section-marketer-hero",
    children: <MarketerHero {...marketerHero} />
}

const secondSection = {
    title: "What's AI Marketing?",
    description: "AI marketing is the use of artificial intelligence technologies to analyze data, predict trends, and optimize marketing strategies. It leverages tools like machine learning, natural language processing, and automation to create more efficient and personalized marketing efforts.",
}

const sectionMarketerSecond = {
    classNameSection: "section-marketer-second",
    children: <SecondSection {...secondSection} />
}


const thirdSectionCards = [
    {
        title: "Personalized Marketing",
        description: "Tailor your marketing messages, offers, and experiences to individual customers based on their preferences, behaviours, and interactions.",
        image: "/images/marketer/third-section/card1.png",
        type: "style1" as const,
    },
    {
        title: "Creative Prototypes",
        description: "Create content, visuals, or strategies quickly, allowing you to refine and optimize your creative approach before full-scale implementation.",
        image: "/images/marketer/third-section/card2.png",
        type: "style1" as const,
    },
    {
        title: "360° Business Insights",
        description: "Leverage AI tools and insights to identify opportunities and optimize strategies accross different facets of your operations.",
        image: "/images/marketer/third-section/card3.png",
        type: "style1" as const,
    },
];

const thirdSection = {
    title: "What can your team do with us?",
    cards: thirdSectionCards,
}

const sectionMarketerThird = {
    classNameSection: "section-marketer-third",
    children: <ThirdSection {...thirdSection} />
}

export default function Page() {
    return (
        <div>           
            <Section {...sectionMarketerHero} />
            <Section {...sectionMarketerSecond} />
            <Section {...sectionMarketerThird} />
        </div>
    )
}