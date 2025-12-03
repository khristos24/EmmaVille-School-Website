'use client';

import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import contactData from "@/content/contact.json";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            className="text-3xl md:text-5xl text-emerald-800 mb-3 md:mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We'd love to hear from you. Reach out with any questions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl text-emerald-800 mb-5 md:mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-emerald-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                    {contactData.address.lines.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Phone className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-emerald-800 mb-1">Phone</h4>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-emerald-800 mb-1">Email</h4>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-gray-600 hover:text-emerald-600 transition-colors break-all"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h4 className="text-emerald-800 mb-3">Find Us on Socials</h4>
              <div className="flex space-x-4">
                <a
                  href={contactData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={contactData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl h-56 md:h-64 flex items-center justify-center overflow-hidden">
              <iframe
                src={contactData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emmaville Academy Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl text-emerald-800 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your inquiry..."
                  className="w-full min-h-32"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 md:py-6"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-emerald-700 text-sm">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
