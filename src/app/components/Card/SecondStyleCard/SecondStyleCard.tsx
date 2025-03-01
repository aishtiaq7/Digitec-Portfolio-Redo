import "./SecondStyleCard.css";
import Image from "next/image";
import Link from "next/link";
import { StyleOneCardProps } from "@/types/Card";

export default function StyleOneCard({ title, description, image, link }: StyleOneCardProps) {
    return (
        <div className="service-card">
            <div className="service-card-icon">
                <Image 
                    src={image} 
                    width={48} 
                    height={48} 
                    alt="Service icon"
                    className="service-icon"
                />
            </div>
            <h2 className="service-card-title">{title}</h2>
            <p className="service-card-description">{description}</p>
            <Link href={link} className="service-card-link">
                Learn more 
                <span className="arrow">›</span>
            </Link>
        </div>
    )
}