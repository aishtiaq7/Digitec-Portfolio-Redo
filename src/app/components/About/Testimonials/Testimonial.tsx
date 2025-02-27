import { TestimonialSectionProps } from "@/types/Testimonial";
import { TestimonialCardProps } from "@/types/Testimonial";
import Image from "next/image";
import "./Testimonial.css";

const Card: React.FC<TestimonialCardProps> = ({ image, name, title, description }) => {
    return (
        <div className="card">
            <div className="image-container">
                <Image src={image} alt={name} width={150} height={150} layout="relative" className="rounded-image" />
            </div>
            <div className="content">
                <h3 className="name">{name}</h3>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default function TestimonialSection({ title, description, cards }: TestimonialSectionProps) {
    return (
        <div className="container">
            <div className="testimonial-section">
                <h1 className="testimonial-section-title">{title}</h1>
                <p className="testimonial-section-description">{description}</p>
                <div className="testimonial-section-cards">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            name={card.name}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    ))}
                </div>
                <div className="dots-container">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </div>
            </div>
        </div>
    );
}
