import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Section/Section";
import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero";
import SecondSection from "../components/BlackSection/BlackSection";
import ThirdSection from "../components/Marketer/ThirdSection/ThirdSection";
import FourthSection from "../components/Marketer/FourthSection/FourthSection";
import FifthSection from "../components/Marketer/FifthSection/FifthSection";
import SixthSection from "../components/Marketer/SixthSection/SixthSection";
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

const fourthSectionCards = [
    {
        title: "Start with a free consultation",
        description: "Understand about your business goals and explain what we can add value.",
        image: "/images/marketer/fourth-section/card1.png",
        type: "style3" as const,
    },
    {
        title: "Solution proposal",
        description: "Propose strategies tailored to your business needs  ",
        image: "/images/marketer/fourth-section/card2.png",
        type: "style3" as const,
    },
    {
        title: "Prototype",
        description: "Explain how the solutions will function  in a practical environment.",
        image: "/images/marketer/fourth-section/card3.png",
        type: "style3" as const,
    },
    {
        title: "Implementation and delivery",
        description: "Implement the solutions, deploy, and deliver to you seamlessly.",
        image: "/images/marketer/fourth-section/card4.png",
        type: "style3" as const,
    },
    {
        title: "Support and maintenance",
        description: "ongoing assistance to ensure the solutions run smoothly and optimize performance as needed.",
        image: "/images/marketer/fourth-section/card5.png",
        type: "style3" as const,
    },
];

const fourthSection = {
    title: "Steps",
    description: "Our onboarding process guides you through a seamless journey of understanding your goals, analyzing your needs, and implementing tailored AI-driven solutions to optimize your marketing strategies.",
    cards: fourthSectionCards,
}

const sectionMarketerFourth = {
    classNameSection: "section-marketer-fourth",
    children: <FourthSection {...fourthSection} />
}

const fifthSection = {
    title: "Come check our latest case study!",
    image: "/images/marketer/fifth-section/fifth-section-image.png",
    subtitle: "UX review presentations",
    description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    buttonText: "Read more",
    buttonClassname: "button-secondary button-third-color lg:w-60"
}

const sectionMarketerFifth = {
    classNameSection: "section-marketer-fifth",
    children: <FifthSection {...fifthSection} />
}

const sixthSectionCards = [
    {
        title: "How does AI benefit my marketing strategy?",
        content: "AI marketing tools and technologies can enhance your marketing strategies in several ways, including:",
        type: "style4" as const,
    },
    {
        title: "Can AI replace traditional marketing methods?",
        content: "While AI can automate many marketing tasks, it cannot fully replace human creativity and strategy development.",
        type: "style4" as const,
    },
    {
        title: "What kind of data does AI use for marketing?",
        content: "AI uses a wide range of data sources, including customer behavior data, market trends, and internal business data, to inform and optimize marketing strategies.",
        type: "style4" as const,
    },
    {
        title: "How does AI help with personalization?",
        content: "AI can analyze customer data to create personalized marketing campaigns, ensuring that each customer receives relevant and engaging content.",
        type: "style4" as const,
    },
];

const sixthSection = {
    title: "FAQ",
    cards: sixthSectionCards,
}

const sectionMarketerSixth = {
    classNameSection: "section-marketer-sixth",
    children: <SixthSection {...sixthSection} />
}

export default function Page() {
    return (
        <div>
            <Navbar {...navbar} />            
            <Section {...sectionMarketerHero} />
            <Section {...sectionMarketerSecond} />
            <Section {...sectionMarketerThird} />
            <Section {...sectionMarketerFourth} classNameSection="black-background" />
            <Section {...sectionMarketerFifth} classNameSection="white-background" />
            <Section {...sectionMarketerSixth} classNameSection="black-background" />
        </div>
    )
}