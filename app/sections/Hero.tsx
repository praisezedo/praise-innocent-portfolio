"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PraiseAvatar from "@/public/images/Praise - avatar.jpeg";
import { Download } from "lucide-react";

const HeroScene = dynamic(() => import("../components/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".hero-text, .hero-avatar", { autoAlpha: 1, y: 0 });
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((stat) => {
        const target = Number(stat.dataset.value);
        stat.innerText = `${target}+`;
      });
      return;
    }

    gsap.fromTo(
      ".hero-text",
      {
        y: 56,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
      }
    );

    gsap.fromTo(
      ".hero-avatar",
      {
        y: 56,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
        clearProps: "transform",
      }
    );

    gsap.utils.toArray<HTMLElement>(".stat-number").forEach((stat) => {
      const target = Number(stat.dataset.value);

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.5,
          delay: 0.8,
          snap: { innerText: 1 },
          ease: "power2.out",
          onUpdate: function () {
            stat.innerText = `${Math.floor(Number(stat.innerText))}+`;
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 md:px-16 lg:px-24">
      <div className="absolute inset-0 opacity-40">
        <HeroScene />s
      </div>

      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="hero-text mb-4 text-cyan-400" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>Hello, I&apos;m</p>

          <h1 className="hero-text text-5xl font-bold tracking-tight md:text-7xl" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>
            Praise Innocent
          </h1>

          <h2 className="hero-text mt-4 text-2xl font-semibold text-slate-300 md:text-4xl" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>
            Frontend Developer & AI Enthusiast
          </h2>

          <p className="hero-text mt-6 max-w-2xl leading-8 text-slate-400" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>
            I build clean, futuristic web experiences with modern frontend
            technologies, and I&apos;m deeply interested in combining software
            with artificial intelligence to solve real problems.
          </p>

          <div className="hero-text mt-8 flex flex-wrap gap-4" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>

            <a
               href="/resume/Praise-Innocent-resume.pdf"
              download="Praise-Innocent-CV.pdf"
              className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <Download className="mr-1 inline-block h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="hero-text mt-12 flex flex-wrap gap-8" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>
            <div>
              <h3 className="stat-number text-3xl font-bold text-cyan-400" data-value="10">
                0+
              </h3>
              <p className="mt-1 text-sm text-slate-400">Projects Built</p>
            </div>

            <div>
              <h3 className="stat-number text-3xl font-bold text-cyan-400" data-value="8">
                0+
              </h3>
              <p className="mt-1 text-sm text-slate-400">Technologies</p>
            </div>

            <div>
              <h3 className="stat-number text-3xl font-bold text-cyan-400" data-value="1">
                0+
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Years Learning & Building
              </p>
            </div>
          </div>
        </div>

        <div className="hero-avatar order-1 flex justify-center lg:order-2 lg:justify-end" style={{ opacity: 0, visibility: "hidden", transform: "translate3d(0, 56px, 0)" }}>
          <div className="relative h-80 w-[320px] overflow-hidden rounded-4xl border border-cyan-400/30 bg-slate-900/60 shadow-2xl shadow-cyan-500/20 md:h-105 md:w-105">
            <Image
              src={PraiseAvatar}
              alt="Avatar illustration of Praise Innocent"
              fill
              priority
              sizes="(max-width: 767px) 320px, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
