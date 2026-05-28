"use client";

import { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  type TextColor = "text-red-600" | "text-green-600";
  const [status, setStatus] = useState("");
  const [textColor , setTextColor] = useState("text-green-600" as TextColor);
  
  useGSAP(() => {
    gsap.from(".contact-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
      },
    });
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setStatus("");

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      setTextColor("text-green-600" as TextColor);
      setStatus("Message sent successfully.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setTextColor("text-red-600" as TextColor);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="absolute right-0 top-20 h-75 w-75 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="contact-card relative z-10 mx-auto max-w-6xl rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-md md:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Let&apos;s build something meaningful together.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I&apos;m open to collaborations, freelance opportunities,
              internships, and frontend engineering roles. I also enjoy
              conversations around software engineering, AI, modern web
              experiences, and creative technology ideas.
            </p>

            <div className="mt-10 flex gap-5">
              <a
                href="https://github.com/praisezedo"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/praise-innocent-bb3949353?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/UObinna66464"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-400"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={6}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className={`text-sm ${textColor}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
