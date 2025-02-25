import "./MissionSection.css";
import Button from "../../Button/Button";
import { MissionSectionProps } from "@/types/about/about";
import Image from "next/image";
export default function MissionSection({
    title,
    description,
    image,
    buttonText,
    buttonClassname,
}: MissionSectionProps) {
    return (
        <section className="mission-section">
            <div className="mission-content">
                <div className="text-content">
                    <h2 className="mission-title">{title}</h2>
                    <p className="mission-description">{description}</p>
                    <Button text={buttonText} classname={buttonClassname} />
                </div>
                <div className="image-content">
                    <Image src={image} alt="Mission Image" width={400} height={300} />
                </div>
            </div>
        </section>
    );
}
