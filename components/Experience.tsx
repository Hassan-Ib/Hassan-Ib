import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { experiences } from "../utils/experiences";

const Experience = () => {
  const [openCompany, setOpenCompany] = useState(0);
  const [activeProjectByCompany, setActiveProjectByCompany] = useState<
    Record<number, number>
  >({});

  const activeExperience = experiences[openCompany];

  const renderExperienceDetails = (
    experience: (typeof experiences)[number],
    companyIndex: number,
  ) => {
    const projectIndex = activeProjectByCompany[companyIndex] ?? 0;
    const contribution = experience.contributions[projectIndex];

    return (
      <>
        <header>
          <h3 className="font-barlow text-2xl font-semibold">
            {experience.role}
          </h3>
          <p className="opacity-80 mt-1">
            {experience.company}
            <span className="mx-2">|</span>
            {experience.location}
          </p>
          <p className="opacity-60 text-sm mt-1">{experience.period}</p>
        </header>

        <div className="w-full max-w-full min-w-0 mt-6 border-b border-main-dark/15 dark:border-white/10 overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] styled-scroll">
          <div className="flex w-full min-w-0 flex-wrap xl:flex-nowrap items-center gap-2 pb-3 pr-1">
            {experience.contributions.map((item, contributionIndex) => {
              const isActive = projectIndex === contributionIndex;
              return (
                <button
                  key={item.title}
                  onClick={() =>
                    setActiveProjectByCompany((current) => ({
                      ...current,
                      [companyIndex]: contributionIndex,
                    }))
                  }
                  className={`shrink-0 snap-start px-3 py-2 rounded-md text-sm whitespace-nowrap border transition-colors ${
                    isActive
                      ? "bg-main-dark text-white dark:bg-main-light dark:text-main-dark border-main-dark dark:border-main-light"
                      : "border-main-dark/20 dark:border-white/20 hover:bg-blue-200/20 dark:hover:bg-white/5"
                  }`}>
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {contribution && (
          <section className="pt-5">
            <ul className="space-y-3 pl-5">
              {contribution.points.map((point) => (
                <li
                  key={point}
                  className="c-list-style opacity-90 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            {contribution.technologies && (
              <div className="mt-6 flex flex-wrap gap-2">
                {contribution.technologies.map((tech) => (
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
    );
  };

  return (
    <section aria-label="Work experience" className="my-16 max-w-full">
      <SectionHeader>My Experience</SectionHeader>

      <section className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 w-full max-w-full">
        <aside className="space-y-2">
          {experiences.map((experience, companyIndex) => {
            const isOpen = openCompany === companyIndex;
            return (
              <div key={experience.company}>
                <button
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

                {isOpen && (
                  <article className="lg:hidden min-w-0 mt-2 rounded-xl border border-main-dark/15 dark:border-white/10 p-5 md:p-6 !overflow-x-hidden max-w-full">
                    {renderExperienceDetails(experience, companyIndex)}
                  </article>
                )}
              </div>
            );
          })}
        </aside>

        <article className="hidden lg:block min-w-0 rounded-xl border border-main-dark/15 dark:border-white/10 p-5 md:p-6 min-h-[360px]">
          {activeExperience &&
            renderExperienceDetails(activeExperience, openCompany)}
        </article>
      </section>
    </section>
  );
};

export default Experience;
