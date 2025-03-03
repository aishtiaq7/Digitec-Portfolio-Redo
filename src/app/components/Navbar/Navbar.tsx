"use client";

import { NavbarProps } from "@/types/Navbar";
import Button from "../Button/Button";
import Image from "next/image";
import "./Navbar.css";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar({
  logo,
  links,
  buttonText,
  buttonClassname,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  /* Resetting the links passed as props */
  const camelCaseLinks = links.map(
    (link) =>
      link
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) =>
          index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, "")
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="w-auto h-8 md:h-10 lg:h-12"
          />
        </Link>
      </div>
      <div className="block sm:hidden w-1/4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black shadow-md sm:hidden">
          <ul className="flex flex-col p-4">
            {camelCaseLinks.map((camelCaseLink, index) => (
              <li key={index} className="py-2">
                <Link
                  href={`/${camelCaseLink}`}
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {links[index]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="navbar-links sm:block hidden">
        <ul className="flex gap-4">
          {links.map((link, index) =>{ 
            return(
            <li key={index}>
              <Link
                href={`/${camelCaseLinks[index]}`}
                className="hover:text-gray-600 transition-colors text-white"
              >
                {link}
              </Link>
            </li>
          )})}
        </ul>
      </div>
      <div className="navbar-button">
        <Button text={buttonText} classname={buttonClassname} />
      </div>
    </nav>
  );
}
