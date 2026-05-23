"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import StarsBackground from "../components/StarsBackground";
import { skills } from "../constants/skills";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const targetLevels = useMemo(() => skills.map((skill) => skill.level), []);
  const [confidenceLevels, setConfidenceLevels] = useState(() =>
    skills.map(() => 0)
  );
  const [cardsEntered, setCardsEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let animationFrame = 0;
    let started = false;

    const animateConfidence = () => {
      const duration = 900;
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setConfidenceLevels(
          targetLevels.map((level) => Math.round(level * easedProgress))
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;
        setCardsEntered(true);
        animateConfidence();
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [targetLevels]);

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
                className={`flex h-full flex-col rounded-4xl border border-white/10 bg-white/3 p-6 opacity-100 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 ${
                  cardsEntered
                    ? "motion-safe:animate-[skill-card-enter_600ms_ease-out_both]"
                    : ""
                }`}
                style={{ animationDelay: `${index * 70}ms` }}
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
                      className="h-full rounded-full bg-cyan-400 transition-[width] duration-700 ease-out"
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
