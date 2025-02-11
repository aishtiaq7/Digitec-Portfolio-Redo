export type MarketerHeroProps = {
    classNameSecondHero: string;
    title: string;
    description: string;
    buttonText: string;
    buttonClassname: string;
}

export type ThirdSectionCardProps = {
    image: string;
    title: string;
    description: string;
    type: "style1" | "style2" | "style3" | "style4" | "style5" | "style6" | "style7" | "style8" | "style9" | "style10";
}

export type ThirdSectionProps = {
    title: string;
    cards: ThirdSectionCardProps[];
}