import { SecondHeroProps } from "@/types/marketer/Marketer";
import "./SecondHero.css";
import Button from "../../Button/Button";

export default function SecondHero({classNameSecondHero, title, description, buttonText, buttonClassname}: SecondHeroProps) {
    return (
        <div className={classNameSecondHero}>
            <div className="second-hero-content">
                <h1 className="second-hero-title">{title}</h1>
                <p className="second-hero-description">{description}</p>
                <Button text={buttonText} classname={buttonClassname} />
            </div>
        </div>
    )
}