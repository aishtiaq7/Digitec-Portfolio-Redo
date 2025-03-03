import './StudyCaseStyleCard.css';
import Image from "next/image";
import Link from "next/link";
import { StyleOneCardProps } from "@/types/Card";

export default function StudyCaseStyleCard({ title, description, image, link = "/" }: StyleOneCardProps) {
    return (
        <div className="study-case-card">
            <div className="study-case-card-icon">
                <Image 
                    src={image} 
                    width={500} 
                    height={500} 
                    alt="study-case icon"
                    className="study-case-icon"
                />
            </div>
            <h2 className="study-case-card-title">{title}</h2>
            <p className="study-case-card-description">{description}</p>
            <Link href={link} className="study-case-card-link">
                Learn more 
                <span className="arrow">›</span>
            </Link>
        </div>
    )
}