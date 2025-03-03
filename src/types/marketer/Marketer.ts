export type MarketerHeroProps = {
    classNameSecondHero: string;
    title: string;
    description: string;
    buttonText: string;
    buttonClassname: string;
}

export type SectionCardProps = {
    image: string;
    title: string;
    link?: string;
    description?: string;
    type: "style1" | "style2" | "style3" | "style4" | "style5" | "style6" | "style7" | "style8" | "style9" | "style10";
}

export type ThirdSectionProps = {
    title: string;
    subtitle?: string;
    cards: SectionCardProps[];
}

export type FourthSectionProps = {
    title: string;
    description: string;
    cards: SectionCardProps[];
}

export type FifthSectionProps = {
    title: string;
    image: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonClassname: string;
}

export type SixthSectionProps = {
    title: string;
    cards: {
        title: string;
        content: string;
    }[];
}