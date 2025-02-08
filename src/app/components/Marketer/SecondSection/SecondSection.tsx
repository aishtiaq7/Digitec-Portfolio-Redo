import "./SecondSection.css";
import { SecondSectionProps } from "@/types/marketer/Marketer";

export default function SecondSection({ title, description }: SecondSectionProps) {
    return (
        <div className="section-marketer-content">
            <h1 className="second-section-title">{title}</h1>
            <p className="second-section-description">{description}</p>
        </div>
    )
}