export type MissionSectionProps = {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonClassname: string;
};

export type FourthSectionCardProps = {
    image: string;
    description: string;
};

export type FourthSectionProps = {
    title: string;
    cards: FourthSectionCardProps[];
};
