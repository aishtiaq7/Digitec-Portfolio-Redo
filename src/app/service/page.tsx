import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero";
import Section from "../components/Section/Section";
import CardsSection from "../components/Service/CardsSection/CardsSection";
import FormSection from "../components/FormSection/FormSection";

/* HERO SECTION*/

const servicesHero = {
  classNameSecondHero: "second-hero-content",
  title: "Discover Our Services",
  description:
    "Let us help you unlock new opportunities and drive success with solutions that fit your unique business needs.",
  buttonText: "Book a consultation",
  buttonClassname: "button-secondary text-black lg:w-60",
};

const sectionServicesHero = {
  classNameSection: "section-service-hero",
  children: <MarketerHero {...servicesHero} />,
};

/* END HERO SECTION */

/* SERVICES SECTION */

const servicesSecond = [
  {
    title: "Web Design & Development",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
    image: "/images/service/cards-section/marketing.png",
    link: "#",
    type: "style2" as const,
  },
  {
    title: "AI Marketing",
    description:
      "With AI, marketers can better understand customer behavior, predict trends, and deliver personalized experiences at scale, ultimately increasing engagement and conversions.",
    image: "/images/service/cards-section/marketing.png",
    link: "#",
    type: "style2" as const,
  },
  {
    title: "360° Brand Development",
    description:
      "We help shape your brand’s identity through comprehensive content creation and visual design to establish a strong, consistent brand presence.",
    image: "/images/service/cards-section/marketing.png",
    link: "#",
    type: "style2" as const,
  },
  {
    title: "SEO & Analytics",
    description:
      "SEO (Search Engine Optimization) and Analytics are two key areas in digital marketing that help websites increase visibility, attract traffic, and understand user behavior.",
    image: "/images/service/cards-section/seo.png",
    link: "#",
    type: "style2" as const,
  },
  {
    title: "IT Support",
    description:
      "With AI, marketers can better understand customer behavior, predict trends, and deliver personalized experiences at scale, ultimately increasing engagement and conversions.",
    image: "/images/service/cards-section/it-support.png",
    link: "#",
    type: "style2" as const,
  },
  {
    title: "Cybersecurity",
    description:
      "Our cybersecurity solutions ensure the protection of your data, providing regular security checks, policy updates, and software patches to keep your systems secure and up-to-date.",
    image: "/images/service/cards-section/data-management.png",
    link: "#",
    type: "style2" as const,
  },
  {
    title: "Data Management",
    description:
      "With AI, marketers can better understand customer behavior, predict trends, and deliver personalized experiences at scale, ultimately increasing engagement and conversions.",
    image: "/images/service/cards-section/data-management.png",
    link: "#",
    type: "style2" as const,
  },
];

const serviceSection = {
  title: "What We Offer",
  cards: servicesSecond,
};

const secondSection = {
  classNameSection: "section-services-second",
  children: <CardsSection {...serviceSection} />,
};

/* END SERVICES SECTION */

/* FORM SECTOIN */

const formSection = {
  classNameSection: "section-form",
  children: <FormSection />,
};

/* END FORM SECTION */

const services = () => {
  return (
    <>
      <Section {...sectionServicesHero} />
      <Section {...secondSection} />
      <Section {...formSection} />
    </>
  );
};

export default services;
