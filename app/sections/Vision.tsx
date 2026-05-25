"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StarsBackground from "../components/StarsBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  useGSAP(() => {
    gsap.from(".vision-content", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: "#vision",
        start: "top 75%",
      },
    });

    gsap.from(".vision-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".vision-grid",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="vision"
      className="relative overflow-hidden px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 opacity-20">
        <StarsBackground />
      </div>

      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="vision-content relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Vision
        </p>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          I believe the future of software will feel more intelligent, immersive,
          and human-centered.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-400">
          I see modern software evolving beyond static interfaces into systems
          that are more interactive, adaptive, and deeply integrated into
          everyday life. The future of technology is not just about writing code
          — it&apos;s about creating digital experiences that feel natural,
          responsive, and meaningful to people.
        </p>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
          I&apos;m especially interested in the intersection of frontend
          engineering, artificial intelligence, animation, and immersive web
          experiences. I believe software will increasingly combine intelligent
          systems with beautiful interfaces to create products that are both
          functional and emotionally engaging.
        </p>
      </div>

      <div className="vision-grid relative z-10 mx-auto mt-20 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="vision-card rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white">
            Human-Centered Software
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Future software should feel intuitive and natural, helping people
            interact with technology more seamlessly.
          </p>
        </div>

        <div className="vision-card rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white">
            Intelligent Interfaces
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            AI will increasingly become part of user experiences, helping
            systems become more adaptive, personalized, and responsive.
          </p>
        </div>

        <div className="vision-card rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white">
            Immersive Web Experiences
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Modern web experiences will continue evolving through animation,
            motion systems, 3D interaction, and real-time visual experiences.
          </p>
        </div>
      </div>
    </section>
  );
}