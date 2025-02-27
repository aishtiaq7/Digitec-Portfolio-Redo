import Navbar from "../components/Navbar/Navbar";
import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero";
import Section from "../components/Section/Section";
import SecondSection from "../components/BlackSection/BlackSection";
import MissionSection from "../components/About/MissionSection/MissionSection";
import FourthSection from "../components/About/FourthSection/FourthSection";
import TestimonialSection from "../components/About/Testimonials/Testimonial";

const navbar = {
    logo: "/logos/digitec.png",
    links: ["Service", "Case study", "About us", "Career", "Blog"],
    buttonText: "Book a consultation",
    buttonClassname: "button-primary lg:w-60",
};
// Hero Section

const aboutHero = {
    classNameSecondHero: "second-hero-content",
    title: "About Us",
    description:
        "Our expert team combines creativity with technical expertise to build secure, scalable, and impactful online experiences tailored to your needs.",
    buttonText: "Book a consultation",
    buttonClassname: "button-secondary text-black lg:w-60",
};

const sectionAboutHero = {
    classNameSection: "section-about-hero",
    children: <MarketerHero {...aboutHero} />,
};
const secondSection = {
    title: "Who We Are and What We Stand for",
    description:
        "At DigiTech, we are a team of passionate and skilled professionals who thrive in a collaborative and innovative environment. Our culture is built on openness, creativity, and the pursuit of excellence in everything we do. We believe in fostering a workspace where ideas flow freely, teamwork is valued, and individual growth is supported. By blending our collective expertise in branding, web development, cybersecurity, and digital strategy, we create tailored solutions that meet the unique needs of our clients. With a shared commitment to delivering exceptional results, we cultivate a positive, dynamic atmosphere where both our clients and team members succeed and evolve together.",
};
const sectionAboutSecond = {
    classNameSection: "section-about-second",
    children: <SecondSection {...secondSection} />,
};

const missionData = {
    title: "Our Mission",
    description:
        "Our mission is to empower small and medium-sized businesses by providing comprehensive, tailor-made digital solutions. Through cutting-edge technology and personalized service, we aim to transform businesses' online presence, ensuring they thrive in the digital era.",
    buttonText: "Free consulting",
    buttonClassname: "button-primary  lg:w-60",
    image: "/images/about/third-section/third-section.png",
};

const missionSection = {
    classNameSection: "mission-section",
    children: <MissionSection {...missionData} />,
};

const fourthSectionCards = [
    {
        image: "/images/about/fourth-section/fourth-section1.png",
        description: "Existing clients",
    },
    {
        image: "/images/about/fourth-section/fourth-section2.png",
        description: "Developed websites",
    },
    {
        image: "/images/about/fourth-section/fourth-section3.png",
        description: "Growth in XXX",
    },
];

const fourthSection = {
    title: "Our Company Growth",
    cards: fourthSectionCards,
};

const sectionAboutFourth = {
    classNameSection: "section-about-fourth",
    children: <FourthSection {...fourthSection} />,
};

const testimonialSectionCards = [
    {
        image: "/images/about/testimonials/testimonials1.png",
        name: "Emily Gemmell",
        title: "PhD, School of Population and Public Health, UBC",
        description:
            "Working with Digitec Innovation has been an absolute game-changer for our business. Their IT wizardry has turned complex challenges into seamless solutions. They're not just a service provider; they're an extension of our team.",
    },
    {
        image: "/images/about/testimonials/testimonials2.png",
        name: "Liam Daviees",
        title: "CEO of VirtuTech Ventures",
        description:
            "Digitech Innovation streamlined our operations with their strategic digital transformation. Their professionalism, attention to detail, and ability to meet tight deadlines are exceptional. We endorse them wholeheartedly.",
    },
    {
        image: "/images/about/testimonials/testimonials3.png",
        name: "Shamsul H. Shanto",
        title: "Head of Brand - HUH",
        description:
            "These are succinct versions of the previous recommendations, focusing on key points while maintaining a formal and professional tone.",
    },
];

const testimonialSection = {
    title: "Testimonials",
    description:
        "Reknown Industry professionals have complimented Digitec Innovation.Digitec Innovation has received accolades from renowned industry professionals. We wholeheartedly appreciate their positive feedback and kind words!",
    cards: testimonialSectionCards,
};

const sectionAboutTestimonial = {
    classNameSection: "section-about-testimonial",
    children: <TestimonialSection {...testimonialSection} />,
};

export default function Page() {
    return (
        <div>
            <Navbar {...navbar} />
            <Section {...sectionAboutHero} />
            <Section {...sectionAboutSecond} />
            <Section {...missionSection} />
            <Section {...sectionAboutFourth} />
            <Section {...sectionAboutTestimonial} />
        </div>
    );
}
