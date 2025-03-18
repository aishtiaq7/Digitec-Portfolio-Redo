"use client";

import "./FourthSection.css";
import { FourthSectionProps } from "@/types/marketer/Marketer";
import Card from "@/app/components/Card/Card";
import { Timeline } from "@/app/components/Timeline/Timeline";
import { useState, useEffect } from "react";

export default function FourthSection({title, description, cards}: FourthSectionProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const timelineData = cards.map(card => ({
        title: card.title,
        content: (
            <div className="">
                {card.image && (
                    <div className="mb-4">
                        <img src={card.image} alt={card.title} className="w-full h-auto" />
                    </div>
                )}

                <hr className="marketer-card-divider" />
                <p className="text-neutral-400">{card.description}</p>
            </div>
        )
    }));

    return (
        <div className="fourth-section">
            <h2 className="fourth-section-title">{title}</h2>
            <p className="fourth-section-description">{description}</p>
            {isMobile ? (
                <Timeline data={timelineData} />
            ) : (
                <div className="fourth-section-cards">
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} image={card.image} type={card.type as "style3"} />
                    ))}
                </div>
            )}
        </div>
    );
}