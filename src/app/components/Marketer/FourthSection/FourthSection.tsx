import "./FourthSection.css";
import { FourthSectionProps } from "@/types/marketer/Marketer";
import Card from "@/app/components/Card/Card";

export default function FourthSection({title, description, cards}: FourthSectionProps) {
    return (
        <div className="fourth-section">
            <h2 className="fourth-section-title">{title}</h2>
            <div className="fourth-section-cards">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} image={card.image} type={card.type as "style3"} />
                ))}
            </div>
        </div>
    )
}