import { MarketerHeroProps } from "@/types/marketer/Marketer";
import "./MarketerHero.css";
import Button from "../../Button/Button";

export default function MarketerHero({classNameSecondHero, title, description, buttonText, buttonClassname}: MarketerHeroProps) {
    return (
        <div className={classNameSecondHero}>
            <div className="marketer-hero-content">
                <h1 className="marketer-hero-title">{title}</h1>
                <p className="marketer-hero-description">{description}</p>
                <Button text={buttonText} classname={buttonClassname} />
            </div>
        </div>
    )
}