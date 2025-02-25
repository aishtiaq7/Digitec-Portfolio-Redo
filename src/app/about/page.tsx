import Navbar from "../components/Navbar/Navbar";
import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero";
import Section from "../components/Section/Section";
import SecondSection from "../components/BlackSection/BlackSection";
import MissionSection from "../components/About/MissionSection/MissionSection";

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

export default function Page() {
    return (
        <div>
            <Navbar {...navbar} />
            <Section {...sectionAboutHero} />
            <Section {...sectionAboutSecond} />
            <Section {...missionSection} />
        </div>
    );
}
