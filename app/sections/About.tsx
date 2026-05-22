"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PraisePhoto from "@/public/images/Praise-Photo.jpeg";

const StarsBackground = dynamic(() => import("../components/StarsBackground"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);


export default function About() {
  useGSAP(() => {
    gsap.from(".about-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: ".about-card",
    });

    gsap.from(".about-image", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: ".about-image",
    });

    gsap.to(".glow-border", {
      backgroundPosition: "200% center",
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 opacity-25">
        <StarsBackground />
      </div>

      <div className="absolute right-0 top-0 h-75 w-75 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="glow-border relative z-10 mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(90deg,rgba(34,211,238,0.2),rgba(255,255,255,0.08),rgba(34,211,238,0.2))] bg-size-[200%_100%] p-px">
        <div className="grid items-center gap-12 rounded-[2.5rem] bg-[#050816]/90 p-6 backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr] lg:p-12 xl:gap-20">
          <div className="about-image relative mx-auto h-80 w-[320px] overflow-hidden rounded-full border border-cyan-400/20 bg-slate-900/50 shadow-2xl shadow-cyan-500/10 sm:h-95 sm:w-95 lg:ml-12 lg:h-105 lg:w-105">
            <Image
              src={PraisePhoto}
              alt="Praise Innocent"
              fill
              sizes="(max-width: 767px) 320px, 420px"
              className="object-cover"
            />
          </div>

          <div className="about-card max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              A software engineering student passionate about building
              futuristic digital experiences.
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              My journey into technology started from curiosity — wanting to
              understand how websites, applications, and digital systems
              actually work behind the scenes. Over time, that curiosity became
              a strong passion for software engineering, frontend development,
              and artificial intelligence.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I enjoy building modern and interactive web experiences using
              foundation technologies like HTML, CSS, JavaScript, and
              TypeScript, then bringing them to life with React, Next.js,
              TailwindCSS, GSAP, and Three.js.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
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
