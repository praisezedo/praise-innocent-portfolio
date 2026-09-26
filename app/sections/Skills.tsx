"use client";

import StarsBackground from "../components/StarsBackground";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <section
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

          <h2 className="text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Technologies I use to build modern digital experiences.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            These are the technologies I currently use and study while growing
            as a frontend engineer and future AI-focused developer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                className="skill-card flex h-full flex-col rounded-4xl border border-white/10 bg-white/3 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
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
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
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
