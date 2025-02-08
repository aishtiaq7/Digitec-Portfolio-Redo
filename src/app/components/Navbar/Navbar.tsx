import { NavbarProps } from "@/types/Navbar";
import Button from "../Button/Button";
import "./Navbar.css";

export default function Navbar({ logo, links, buttonText }: NavbarProps) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-links">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>
            <div className="navbar-button">
                <Button text={buttonText} classname="primary"/>
            </div>
        </nav>
    )
}