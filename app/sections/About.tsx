"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PraisePhoto from "@/public/images/Praise-Photo.jpeg";

const StarsBackground = dynamic(() => import("../components/StarsBackground"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".about-card, .about-image", { autoAlpha: 1, y: 0 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(".about-card, .about-image", { autoAlpha: 0, y: 56 });

      gsap.to(".about-image", {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 82%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.to(".about-card", {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 82%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    gsap.fromTo(
      ".glow-border",
      { backgroundPosition: "0% center" },
      {
        backgroundPosition: "200% center",
        duration: 4,
        repeat: -1,
        ease: "linear",
      }
    );

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-16 md:py-28 lg:px-24"
    >
      <div className="absolute inset-0 opacity-25">
        <StarsBackground />
      </div>

      <div className="absolute right-0 top-0 h-75 w-75 max-w-full rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="glow-border relative z-10 mx-auto w-full max-w-7xl rounded-[1.75rem] bg-[linear-gradient(90deg,rgba(34,211,238,0.2),rgba(255,255,255,0.08),rgba(34,211,238,0.2))] bg-size-[200%_100%] p-px sm:rounded-[2.5rem]">
        <div className="grid min-w-0 items-center gap-10 rounded-[1.75rem] bg-[#050816]/90 p-4 backdrop-blur-md sm:rounded-[2.5rem] sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-12 xl:gap-20">
          <div className="about-image relative mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-full border border-cyan-400/20 bg-slate-900/50 shadow-2xl shadow-cyan-500/10 sm:max-w-95 lg:ml-12 lg:max-w-105">
            <Image
              src={PraisePhoto}
              alt="Praise Innocent"
              fill
              sizes="(max-width: 639px) calc(100vw - 4rem), (max-width: 1023px) 380px, 420px"
              className="object-cover"
            />
          </div>

          <div className="about-card min-w-0 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              About Me
            </p>

            <h2 className="text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
              A software engineering student passionate about building
              futuristic digital experiences.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:mt-8 sm:leading-8">
              My journey into technology started from curiosity - wanting to
              understand how websites, applications, and digital systems
              actually work behind the scenes. Over time, that curiosity became
              a strong passion for software engineering, frontend development,
              and artificial intelligence.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:leading-8">
              I enjoy building modern and interactive web experiences using
              foundation technologies like HTML, CSS, JavaScript, and
              TypeScript, then bringing them to life with React, Next.js,
              TailwindCSS, GSAP, and Three.js.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:leading-8">
              Currently, I&apos;m focused on growing as an engineer, learning
              deeply, and building projects that combine creativity, software,
              and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
