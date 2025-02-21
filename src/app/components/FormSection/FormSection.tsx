"use client";

import { useState } from "react";
import Image from "next/image";
import "./FormSection.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", description: "" });
      } else {
        setStatus("Error sending message. Try again.");
      }
    } catch (error) {
      setStatus("An unexpected error occurred." + error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h2 className="contact-title">Let&apos;s build your vision together!</h2>
          <p className="contact-description">
            Do you have a project idea or need guidance? Fill out the form below, and our team will
            get back to you within 2 business days.
          </p>
          <div className="contact-image">
            <Image src="/images/form/form.png" alt="People meeting" width={400} height={300} priority />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your first name" required value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your last name" required value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email address" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="description">What describes what you do?</label>
            <select id="description" required value={formData.description} onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Submit</button>
          <p className="status-message">{status}</p>
        </form>
      </div>
    </section>
  );
}
