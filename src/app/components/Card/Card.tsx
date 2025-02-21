import "./Card.css";
import { CardProps } from "@/types/Card";
import StyleOneCard from "./StyleOneCard/StyleOneCard";
import SecondStyleCard from "./SecondStyleCard/SecondStyleCard";

export default function Card({ title, description, image, type, link, buttonText, buttonClassname, dateString }: CardProps) {
    const renderCardContent = () => {
        switch (type) {
            case "style1":
                return <StyleOneCard title={title || ""} description={description || ""} image={image || ""} />
            case "style2":
                return <SecondStyleCard title={title || ""} description={description || ""} image={image || ""} link={link || ""}  />
            default:
                return <div>Card</div>
        }
    }

    return (
        <div className={`card card-${type}`}>
            {renderCardContent()}
        </div>
    )
}