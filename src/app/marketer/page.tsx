import Navbar from "../components/Navbar/Navbar";

export default function Marketer() {
    return (
        <div>
            <Navbar logo="/logos/digitec.png" links={["Service", "Case study", "About us", "Career", "Blog"]} buttonText="Book a consultation" />
        </div>
    )
}