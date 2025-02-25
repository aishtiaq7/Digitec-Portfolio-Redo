import "./StyleThreeCard.css";
import { StyleThreeCardProps } from "@/types/Card";

export default function StyleThreeCard({ title, description, image }: StyleThreeCardProps) {
    return (
        <div className="marketer-card">
            <div className="marketer-card-image-container">
                <img className="marketer-card-image" src={image} alt="Marketer Card" />
            </div>
            <h1 className="marketer-card-title white min-h-6">{title}</h1>
            <hr className="marketer-card-divider" />
            <p className="marketer-card-description white">{description}</p>
        </div>
    )
}