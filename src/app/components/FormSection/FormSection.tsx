"use client";

import { useState } from "react";
import Image from "next/image";
import "./FormSection.css";
import { toast } from "sonner";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Thanks for reaching out! We'll get back to you soon.", {
          duration: 4000,
        });
        
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          description: "",
        });
        setIsSubmitted(true);
      } else {
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h2 className="contact-title">
            Let&apos;s build your vision together!
          </h2>
          <div className="contact-image">
            <picture>
              <source
                srcSet="/images/form/form-small.png"
                media="(max-width: 768px)"
              />
              <Image
                src="/images/form/form.png"
                alt="People meeting"
                width={400}
                height={300}
                priority
              />
            </picture>
          </div>
          <p className="contact-description">
            Do you have a project idea or need guidance? Fill out the form
            below, and our team will get back to you within 2 business days.
          </p>
        </div>

        <div className="form-container">
          <div className="thank-you-message" style={{ display: isSubmitted ? "flex" : "none" }}>
            <h3>Thank you!</h3>
            <p>
              A member from our will contact you soon. You can also reach us at{" "}
              <Link href="mailto:hello.digitecinnovation@gmail.com">
                hello.digitecinnovation@gmail.com
              </Link>
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} style={{ display: isSubmitted ? "none" : "block" }}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">What describes what you do?</label>
            <select
              id="description"
              required
              value={formData.description}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Business Owner">Business Owner</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        </div>
        
      </div>
    </section>
  );
}
