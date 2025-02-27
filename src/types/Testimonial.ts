export type TestimonialCardProps = {
    image: string;
    name: string;
    title: string;
    description: string;
};

export type TestimonialSectionProps = {
    title: string;
    description: string;
    cards: TestimonialCardProps[];
};
