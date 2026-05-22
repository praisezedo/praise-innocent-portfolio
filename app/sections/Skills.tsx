"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    level: 95,
    group: "Foundation",
    icon: FaHtml5,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description:
      "HTML structures web content using semantic elements and clean document architecture.",
  },

  {
    name: "CSS",
    level: 90,
    group: "Foundation",
    icon: FaCss3Alt,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "CSS controls styling, layouts, responsiveness, spacing, and visual presentation.",
  },

  {
    name: "JavaScript",
    level: 95,
    group: "Foundation",
    icon: FaJs,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "JavaScript powers interactivity, logic, animations, and dynamic frontend behavior.",
  },

  {
    name: "TypeScript",
    level:  70,
    group: "Foundation",
    icon: SiTypescript,
    docs: "https://www.typescriptlang.org/docs/",
    description:
      "TypeScript adds static typing to JavaScript for better scalability and maintainability.",
  },

  {
    name: "React",
    level: 70,
    group: "Frontend",
    icon: FaReact,
    docs: "https://react.dev/",
    description:
      "React enables reusable component-based frontend engineering and interactive UI systems.",
  },

  {
    name: "Next.js",
    level: 65,
    group: "Frontend",
    icon: SiNextdotjs,
    docs: "https://nextjs.org/docs",
    description:
      "Next.js provides routing, layouts, optimization, SSR, and full-stack React capabilities.",
  },

  {
    name: "TailwindCSS",
    level: 75,
    group: "Styling",
    icon: SiTailwindcss,
    docs: "https://tailwindcss.com/docs",
    description:
      "TailwindCSS speeds up modern UI development with utility-first styling architecture.",
  },

  {
    name: "GSAP",
    level: 55,
    group: "Animation",
    icon: SiGreensock,
    docs: "https://gsap.com/docs/v3/",
    description:
      "GSAP powers premium animations, motion systems, and scroll-triggered interactions.",
  },

  {
    name: "Three.js",
    level: 45,
    group: "3D Web",
    icon: SiThreedotjs,
    docs: "https://threejs.org/docs/",
    description:
      "Three.js enables interactive 3D graphics and futuristic visual experiences in browsers.",
  },

  {
    name: "TensorFlow.js",
    level: 25,
    group: "AI Beginner",
    icon: SiTensorflow,
    docs: "https://www.tensorflow.org/js",
    description:
      "TensorFlow.js enables machine learning directly inside JavaScript applications.",
  },
];

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
