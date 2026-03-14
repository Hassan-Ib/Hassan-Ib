import React, { useMemo, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { experiences } from "../utils/experiences";

const Experience = () => {
  const [openCompany, setOpenCompany] = useState(0);
  const [activeProjectByCompany, setActiveProjectByCompany] = useState<
    Record<number, number>
  >({});

  const activeProjectIndex = useMemo(() => {
    return activeProjectByCompany[openCompany] ?? 0;
  }, [activeProjectByCompany, openCompany]);

  const activeExperience = experiences[openCompany];
  const activeContribution =
    activeExperience?.contributions[activeProjectIndex];

  return (
    <section aria-label="Work experience" className="my-16">
      <SectionHeader>My Experience</SectionHeader>

      <section className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
        <aside className="space-y-2">
          {experiences.map((experience, companyIndex) => {
            const isOpen = openCompany === companyIndex;
            return (
              <button
                key={experience.company}
                onClick={() => setOpenCompany(companyIndex)}
                aria-expanded={isOpen}
                className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                  isOpen
                    ? "border-main-dark dark:border-main-light bg-blue-200/40 dark:bg-white/10"
                    : "border-main-dark/15 dark:border-white/10 hover:bg-blue-200/20 dark:hover:bg-white/5"
                }`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-barlow text-lg font-semibold tracking-wide">
                    {experience.company}
                  </h3>
                  <HiChevronDown
                    className={`text-lg transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <p className="opacity-75 text-sm mt-1">{experience.role}</p>
                <p className="opacity-60 text-xs mt-1 font-barlow tracking-wide">
                  {experience.period}
                </p>
              </button>
            );
          })}
        </aside>

        <article className="rounded-xl border border-main-dark/15 dark:border-white/10 p-5 md:p-6 min-h-[360px]">
          {activeExperience && (
            <>
              <header>
                <h3 className="font-barlow text-2xl font-semibold">
                  {activeExperience.role}
                </h3>
                <p className="opacity-80 mt-1">
                  {activeExperience.company}
                  <span className="mx-2">|</span>
                  {activeExperience.location}
                </p>
                <p className="opacity-60 text-sm mt-1">
                  {activeExperience.period}
                </p>
              </header>

              <div className="mt-6 border-b border-main-dark/15 dark:border-white/10">
                <div className="flex items-center gap-2 overflow-x-auto styled-scroll pb-3">
                  {activeExperience.contributions.map(
                    (contribution, contributionIndex) => {
                      const isActive = activeProjectIndex === contributionIndex;
                      return (
                        <button
                          key={contribution.title}
                          onClick={() =>
                            setActiveProjectByCompany((current) => ({
                              ...current,
                              [openCompany]: contributionIndex,
                            }))
                          }
                          className={`px-3 py-2 rounded-md text-sm whitespace-nowrap border transition-colors ${
                            isActive
                              ? "bg-main-dark text-white dark:bg-main-light dark:text-main-dark border-main-dark dark:border-main-light"
                              : "border-main-dark/20 dark:border-white/20 hover:bg-blue-200/20 dark:hover:bg-white/5"
                          }`}>
                          {contribution.title}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              {activeContribution && (
                <section className="pt-5">
                  <ul className="space-y-3 pl-5">
                    {activeContribution.points.map((point) => (
                      <li
                        key={point}
                        className="c-list-style opacity-90 leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {activeContribution.technologies && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {activeContribution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-barlow tracking-wide px-2.5 py-1 rounded-full bg-blue-200/40 dark:bg-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </section>
              )}
            </>
          )}
        </article>
      </section>
    </section>
  );
};

export default Experience;
