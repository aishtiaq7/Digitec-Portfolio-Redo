import "./StyleOneCard.css";
import { StyleOneCardProps } from "@/types/Card";

export default function StyleOneCard({ title, description, image }: StyleOneCardProps) {
    return (
        <div className="marketer-card">
            <div className="marketer-card-image-container">
                <img className="marketer-card-image" src={image} alt="Marketer Card" />
            </div>
            <h1 className="marketer-card-title">{title}</h1>
            <p className="marketer-card-description">{description}</p>
        </div>
    )
}