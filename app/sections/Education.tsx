
export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-16 md:py-28 lg:px-24"
    >
      <div className="absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          Education
        </p>

        <h2 className="text-xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Academic foundation and growth
        </h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/4 p-4 backdrop-blur-md sm:mt-10 sm:p-6 md:p-8 md:rounded-[1.75rem]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300 sm:text-xs">
                Institution
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                Federal University of Technology, Owerri (FUTO)
              </h3>
            </div>

            <span className="inline-flex w-fit items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-200 lg:text-sm">
              300 Level
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:mt-8 lg:grid-cols-[1.1fr_0.9fr] md:gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                Degree
              </p>
              <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                B.Eng. in Software Engineering
              </p>

              <p className="mt-5 leading-7 text-sm text-slate-300 sm:mt-6 sm:leading-8 sm:text-base">
                I am currently building a solid foundation in software engineering,
                problem-solving, system design, programming, and real-world product
                thinking. My learning is centered around understanding how software is
                designed, built, and improved to solve meaningful problems.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300 sm:text-xs">
                Focus areas
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300 sm:space-y-3 sm:text-base">
                <li>• Software engineering fundamentals</li>
                <li>• Data structures and algorithms</li>
                <li>• Web development and frontend engineering</li>
                <li>• Problem solving and system design</li>
                <li>• Building practical projects</li>
                <li>• AI enabled softwares</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
