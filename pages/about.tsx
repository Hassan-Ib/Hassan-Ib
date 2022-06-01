import type { NextPage } from "next";
import NextLink from "next/link";
import React, { ReactElement, ReactNode } from "react";
import {
  Layout,
  Meta,
  HassanProfile,
  SectionHeader,
  Project,
  ToolsBadge,
} from "../components";
import tools from "../utils/tools";
import projects from "../utils/projects";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const About: NextPageWithLayout = () => {
  return (
    <main className="py-20 xl:py-2 px-4 md:px-16 lg:px-36">
      <Meta title="About Hassan Ibrahim Ayomide | Developer | Bookworm | chess enthusiast" />
      <section
        aria-label="About Hassan Ibrahim | web developer"
        className=" flex flex-col xl:flex-row lg:gap-20 items-center lg:px-10 leading-loose"
      >
        <HassanProfile />
        <section>
          <SectionHeader>A bit about me </SectionHeader>
          <h5 className="my-3  font-bold text-xl">
            <span className="wave"> 👋 </span> Hey There!{" "}
          </h5>
          <div className="tracking-wide">
            <p className="my-5">
              <span className="text-2xl">M</span>y name is{" "}
              <span className="name-color inline-block text-xl font-semibold font-barlow">
                Hassan Ibrahim A.
              </span>{" "}
              and I welcome to my personal website. I’m a Web Developer from
              Nigeria and a Computer Science graduate. I’d like to be a
              Fullstack Developer but i currrently specialize in Frontend
              Development. I’m a lifetime code hobbyist passionate about
              learning, leading, and collaborating with other developers to help
              solve problems with code.
            </p>
            <p className="my-3">
              I’m Looking to be part of Engineering teams in Agile and
              Innovative Technology companies,I’m a proactive team player, who
              likes challenges, achieving goals and learning new things.
            </p>
            <p className="py-3">
              In my limited free time, i try to keep up with new technologies
              and work on side projects to better under the technologies that i
              use. below are the side projects that i’ve built while learning .
            </p>
          </div>

          <p>
            Got any exciting opportunities?, You can reach or catch up with me
            on{" "}
            <NextLink href="https://twitter.com/Azanebrahim" passHref>
              <a
                className="underline decoration-wavy name-color font-barlow text-lg"
                target="_blank"
                rel="onopener noreferrer"
              >
                Twitter
              </a>
            </NextLink>
            ,{" "}
            <NextLink
              href="https://facebook.com/profile.php?id=100050198353049"
              passHref
            >
              <a
                className="underline decoration-wavy name-color font-barlow text-lg"
                target="_blank"
                rel="onopener noreferrer"
              >
                Facebook
              </a>
            </NextLink>{" "}
            and{" "}
            <NextLink href="https:/instagram.com/darealazan" passHref>
              <a
                className="underline decoration-wavy name-color font-barlow text-lg"
                target="_blank"
                rel="onopener noreferrer"
              >
                Instagram
              </a>
            </NextLink>
            .
          </p>
        </section>
      </section>

      <section aria-label="Hassan Ibrahim projects" className="mt-16">
        <section
          aria-label="Hassan Ibrahim development tools || web developer"
          className="flex justify-center items-center gap-3"
        >
          {tools.map((el, index) => (
            <ToolsBadge key={index} src={el.src} toolName={el.toolName} />
          ))}
        </section>

        <SectionHeader>My projects</SectionHeader>
        <section className="project-grid">
          {projects.map((el, index) => (
            <Project
              key={index}
              href={el.href}
              src={el.screenshot}
              name={el.name}
            >
              {el.desc}
            </Project>
          ))}
        </section>
      </section>
    </main>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
