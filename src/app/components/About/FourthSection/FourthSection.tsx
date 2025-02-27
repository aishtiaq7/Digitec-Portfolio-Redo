import { FourthSectionProps } from "@/types/about/about";
import Image from "next/image";
import "./FourthSection.css";

const GrowthCard = ({ description, image }: { description: string; image: string }) => {
    return (
        <div className="cardContainer">
            <Image src={image} alt="Card Image" width={150} height={150} layout="relative" />
            <p className="card-description">{description}</p>
        </div>
    );
};

export default function FourthSectionCard({ title, cards }: FourthSectionProps) {
    return (
        <div className="fourth-section">
            <h1 className="fourth-section-title">{title}</h1>
            <div className="fourth-section-cards">
                {cards.map((card, index) => (
                    <GrowthCard key={index} description={card.description} image={card.image} />
                ))}
            </div>
        </div>
    );
}
