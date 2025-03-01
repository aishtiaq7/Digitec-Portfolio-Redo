import "./ThirdSection.css";
import Card from "@/app/components/Card/Card";
import { ThirdSectionProps } from "@/types/marketer/Marketer";

export default function ThirdSection({ title, cards }: ThirdSectionProps) {

    return (
        <div className="third-section">
            <h2 className="third-section-title">{title}</h2>
            <div className="third-section-cards">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} image={card.image} type={card.type as "style1"} />
                ))}
            </div>
        </div>
    )
}