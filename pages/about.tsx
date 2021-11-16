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
    <main className="py-20 md:py-2 px-4 md:px-16 lg:px-36">
      <Meta title="About Hassan Ibrahim Ayomide | Developer | Bookworm | chess enthusiast" />
      <section
        aria-label="About Hassan Ibrahim | web developer"
        className=" md:text-lg flex flex-col md:flex-row md:gap-20 items-center">
        <HassanProfile />
        <section>
          <SectionHeader>A bit about me </SectionHeader>
          <h5 className="my-3"> Hey there! 👋</h5>
          <p className="my-3">
            🧡 My name is Hassan Ibrahim and welcome to my personal website. I’m
            a Web Developer from Nigeria and a Computer Science graduate. I’d
            like to be a Fullstack Developer but i currrently specialize in
            Frontend Development. I’m a lifetime code hobbyist passionate about
            learning, leading, and collaborating with other developers to help
            solve problems with code.
          </p>
          <p className="my-3">
            I’m Looking to be part of Engineering teams in Agile and Innovative
            Technology companies,I’m a proactive team player, who likes
            challenges, achieving goals and learning new things. Got any
            exciting opportunities? kindley{" "}
            <NextLink href="" passHref>
              <a className="underline"> contact me 😎</a>
            </NextLink>{" "}
          </p>
          <p>
            In my limited free time, i try to keep up with new technologies and
            work on side projects to better under the technologies that i use.
            below are the side projects that i’ve built while learning .
          </p>
        </section>
      </section>

      <section aria-label="Hassan Ibrahim projects" className="mt-16">
        <section
          aria-label="Hassan Ibrahim development tools || web developer"
          className="flex justify-center items-center gap-3">
          {tools.map((el, index) => (
            <ToolsBadge key={index} src={el.src} toolName={el.toolName} />
          ))}
        </section>

        <SectionHeader>My projects</SectionHeader>
        <section className="project-grid">
          {projects.map((el, index) => (
            <Project key={index} href={el.href} src={el.src} name={el.name}>
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
