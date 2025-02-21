import "./CardsSection.css";
import Card from "@/app/components/Card/Card";
import {  ThirdSectionProps } from "@/types/marketer/Marketer";

export default function CardsSection({ title, cards }: ThirdSectionProps) {
  return (
    <>
      <div className="cards-section">
        <h2 className="cards-section-title">{title}</h2>
        <div className="cards-section-cards">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
              type={card.type as "style2"}
            />
          ))}
        </div>
      </div>
    </>
  );
}
