import { SectionProps } from "@/types/Section";
import "./Section.css";
export default function Section({classNameSection, children}: SectionProps) {
    return (
        <section className={classNameSection + " section-padding"}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {children}
            </div>
        </section>
    )
}