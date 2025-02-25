"use client"

import { StyleFourCardProps } from "@/types/Card";
import { useState } from "react";
import "./StyleFourCard.css";

export default function StyleFourCard({ title, cards }: StyleFourCardProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="accordion">
                {cards.map((card, index) => (
                    <div key={index} className="accordion-item">
                        <button
                            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{card.title}</span>
                            <span className={`accordion-icon ${activeIndex === index ? 'rotated' : ''}`}>
                                <img src="/icons/arrow-vector.png" alt="arrow" />
                            </span>
                        </button>
                        <div 
                            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
                        >
                            <p>{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}