"use client";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "../constants/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",

      scrollTrigger: {
        trigger: "#projects",
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-16 md:py-28 lg:px-24"
    >
      <div className="absolute right-0 top-20 h-75 w-75 max-w-full rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Some things I&apos;ve been building.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            These projects represent my journey as a software engineering
            student learning frontend engineering, UI systems, animation, and
            problem-solving through real applications.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/3 backdrop-blur-md transition hover:border-cyan-400/40 sm:rounded-4xl"
            >
              <div className="px-4 pt-4 sm:p-0">
                <div className="relative mx-auto aspect-16/10 w-full max-w-80 overflow-hidden rounded-3xl sm:h-65 sm:max-w-none sm:rounded-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 4rem), (max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-400 sm:mt-5 sm:leading-8">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-sm text-cyan-300 sm:px-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3 sm:mt-6">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-slate-400"
                    >
                      - {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:px-6"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:px-6"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
