import "./BlackSection.css";
import { BlackSectionProps } from "@/types/BlackSection";

export default function BlackSection({ title, description }: BlackSectionProps) {
    return (
        <div className="section-marketer-content">
            <h1 className="second-section-title">{title}</h1>
            <p className="second-section-description">{description}</p>
        </div>
    )
}