"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PraiseAvatar from "@/public/images/Praise - avatar.jpeg";

const HeroScene = dynamic(() => import("../components/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".hero-avatar", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

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
        <HeroScene />
      </div>

      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="hero-text mb-4 text-cyan-400">Hello, I&apos;m</p>
        
          <h1 className="hero-text text-5xl font-bold tracking-tight md:text-7xl">
            Praise Innocent
          </h1>

          <h2 className="hero-text mt-4 text-2xl font-semibold text-slate-300 md:text-4xl">
            Frontend Developer & AI Enthusiast
          </h2>

          <p className="hero-text mt-6 max-w-2xl leading-8 text-slate-400">
            I build clean, futuristic web experiences with modern frontend
            technologies, and I&apos;m deeply interested in combining software
            with artificial intelligence to solve real problems.
          </p>

          <div className="hero-text mt-8 flex flex-wrap gap-4">
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
              href="/resume/praise-innocent-cv.pdf"
              download
              className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Download CV
            </a>
          </div>
<div className="hero-text mt-12 flex flex-wrap gap-8">
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

        <div className="hero-avatar flex justify-center lg:justify-end">
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
