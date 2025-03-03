import "./Card.css";
import { CardProps } from "@/types/Card";
import StyleOneCard from "./StyleOneCard/StyleOneCard";
import SecondStyleCard from "./SecondStyleCard/SecondStyleCard";
import StyleThreeCard from "./StyleThreeCard/StyleThreeCard";
import StyleFourCard from "./StyleFourCard/StyleFourCard";
import StudyCaseStyleCard from "./StudyCaseStyleCard/StudyCaseStyleCard";

export default function Card({ title, description, image, type, link, buttonText, buttonClassname, dateString, cards }: CardProps) {
    const renderCardContent = () => {
        switch (type) {
            case "style1":
                return <StyleOneCard title={title || ""} description={description || ""} image={image || ""} />
            case "style2":
                return <SecondStyleCard title={title || ""} description={description || ""} image={image || ""} link={link || ""}  />
            case "style3":
                return <StyleThreeCard title={title || ""} description={description || ""} image={image || ""} />
            case "style4":
                return <StyleFourCard title={title || ""} cards={cards || []} />
            case "style5":
                return <StudyCaseStyleCard title={title || ""} description={description || ""} image={image || ""} link={link || ""} />
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