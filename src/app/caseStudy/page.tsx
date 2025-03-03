import MarketerHero from "../components/Marketer/MarketerHero/MarketerHero"
import Section from "../components/Section/Section";
import FormSection from "../components/FormSection/FormSection";
import CardsSection from "../components/CaseStudy/CardsSection/CardsSection";

/* Hero section */

const caseStudyHero = {
  classNameSecondHero: "second-hero-content",
  title: "Case Study",
  description:
    "Explore our case studies to see how we’ve helped businesses like yours. Each project tells a story of innovation, collaboration, and measurable results.",
  buttonText: "Book a consultation",
  buttonClassname: "button-secondary text-black lg:w-60",
};

const sectionCaseStudyHero = {
  classNameSection: "section-caseStudy-hero",
  children: <MarketerHero {...caseStudyHero} />,
};

/* End hero section */

/* Cards section */

const cards = [
  {
    title: "Rudolph Christmas Lights",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
      image: "/images/caseStudy/card1.png",
      link: "/case-study-1",
      type: "style5" as const,
  },
  {
    title: "Prestigious",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
      image: "/images/caseStudy/card2.png",
      link: "/case-study-1",
      type: "style5" as const,
  },
  {
    title: "HUH",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
      image: "/images/caseStudy/card3.png",
      link: "/case-study-1",
      type: "style5" as const,
  },
  {
    title: "HUH",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
      image: "/images/caseStudy/card4.png",
      link: "/case-study-1",
      type: "style5" as const,
  },
  {
    title: "HUH",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
      image: "/images/caseStudy/card5.png",
      link: "/case-study-1",
      type: "style5" as const,
  },
  {
    title: "S.L.A",
    description:
      "From ideation and consultation to final delivery, we craft custom websites, offering subscription-based services or pay-per-feature models to suit your needs.",
      image: "/images/caseStudy/card6.png",
      link: "/case-study-1",
      type: "style5" as const,
  },
];

const projectsSection = {
  title: "Our Projects",
  subtitle: "Explore how we turn ideas and challenges into powerful digital solutions.",
  cards: cards,
};

const sectionProjects = {
  classNameSection: "section-projects",
  children: <CardsSection {...projectsSection} />,
};


/* End cards section */


/* FORM SECTOIN */

const formSection = {
  classNameSection: "section-form",
  children: <FormSection />,
};

/* END FORM SECTION */

export default function Page() {
    return (
        <>           
            <Section {...sectionCaseStudyHero} />
            <Section {...sectionProjects} />
            <Section {...formSection} />
        </>
    )
}