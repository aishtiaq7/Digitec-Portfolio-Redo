export type CardProps = {
    title?: string;
    description?: string;
    image?: string;
    type?: "style1" | "style2" | "style3" | "style4" | "style5" | "style6" | "style7" | "style8" | "style9" | "style10";
    link?: string;
    buttonText?: string;
    buttonClassname?: string;
    dateString?: string;
}

export type StyleOneCardProps = {
    title: string;
    description: string;
    image: string;
}