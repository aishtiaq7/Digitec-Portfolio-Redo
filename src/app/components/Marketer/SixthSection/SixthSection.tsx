import { SixthSectionProps } from "@/types/marketer/Marketer";
import "./SixthSection.css";
import Card from "@/app/components/Card/Card";

export default function SixthSection({ title, cards }: SixthSectionProps) {
    return (
        <div className="sixth-section">
            <h2 className="sixth-section-title">{title}</h2>
            <Card type="style4" title={title} cards={cards} />
        </div>
    )
}