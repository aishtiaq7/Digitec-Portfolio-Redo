import "./FifthSection.css";
import { FifthSectionProps } from "@/types/marketer/Marketer";
import Button from "../../Button/Button";

export default function FifthSection({ title, image, subtitle, description, buttonText, buttonClassname }: FifthSectionProps) {
    return (
        <div className="fifth-section">
            <h2 className="fifth-section-title">{title}</h2>
            <div className="fifth-section-content">                
                <div>
                    <img className="fifth-section-image" src={image} alt={title} />
                    <h3 className="fifth-section-subtitle">{subtitle}</h3>
                    <p className="fifth-section-description">{description}</p>
                    <div className="fifth-section-button">
                        <Button text={buttonText} classname={buttonClassname} />
                    </div>
                </div>
            </div>
        </div>
    )
}