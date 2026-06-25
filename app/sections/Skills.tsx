"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarsBackground from "../components/StarsBackground";
import { skills } from "../constants/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const targetLevels = useMemo(() => skills.map((skill) => skill.level), []);
  const [confidenceLevels, setConfidenceLevels] = useState(() =>
    skills.map(() => 0)
  );

  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".skill-card")
    );

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      setConfidenceLevels(targetLevels);
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const confidenceProgress = { value: 0 };
      const confidenceTween = gsap.fromTo(
        confidenceProgress,
        { value: 0 },
        {
          value: 1,
          duration: 0.9,
          ease: "power3.out",
          paused: true,
          onUpdate: () => {
            setConfidenceLevels(
              targetLevels.map((level) => Math.round(level * confidenceProgress.value))
            );
          },
          onComplete: () => {
            setConfidenceLevels(targetLevels);
          },
        }
      );

      gsap.set(cards, { autoAlpha: 0, y: 56 });

      const reveal = gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
          onEnter: () => confidenceTween.play(0),
        },
      });

      return () => {
        confidenceTween.kill();
        reveal.kill();
      };
    });

    return () => mm.revert();
  }, { scope: sectionRef, dependencies: [targetLevels] });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 opacity-25">
        <StarsBackground />
      </div>
      <div className="absolute left-0 top-20 h-75 w-75 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            My Stack
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Technologies I use to build modern digital experiences.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            These are the technologies I currently use and study while growing
            as a frontend engineer and future AI-focused developer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const confidenceLevel = confidenceLevels[index] ?? 0;

            return (
              <article
                key={skill.name}
                className="skill-card flex h-full flex-col rounded-4xl border border-white/10 bg-white/3 p-6 opacity-100 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="text-3xl text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-cyan-400">
                      {skill.group}
                    </p>
                  </div>
                </div>

                <p className="mt-5 grow text-sm leading-7 text-slate-400">
                  {skill.description}
                </p>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">
                      Current confidence
                    </span>

                    <span className="text-cyan-400">
                      {confidenceLevel}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${confidenceLevel}%` }}
                    />
                  </div>
                </div>

                <a
                  href={skill.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Read Documentation &rarr;
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
