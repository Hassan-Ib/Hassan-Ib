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
import { SiMinutemailer } from "react-icons/si";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const About: NextPageWithLayout = () => {
  return (
    <main className="py-20 xl:py-2 px-4 md:px-16 lg:px-20">
      <Meta title="About Hassan Ibrahim Ayomide | Developer | Bookworm | chess enthusiast" />
      <section
        aria-label="About Hassan Ibrahim | web developer"
        className=" flex flex-col xl:flex-row lg:gap-20 items-center lg:px-10 leading-loose">
        <HassanProfile />
        <section>
          <SectionHeader>A bit about me </SectionHeader>
          <h5 className="my-3  font-bold text-xl">
            <span className="wave"> 👋 </span> Hey There!{" "}
          </h5>
          <div className="tracking-wide opacity-90">
            <p className="my-5">
              <span className="text-2xl">M</span>y name is{" "}
              <span className="name-color inline-block text-xl font-semibold font-barlow">
                Ibrahim.
              </span>{" "}
              and I’m a Frontend Web Developer from Nigeria. I love to build
              things that live on the internet. My main focus is building
              accessible, ally type of accessbility, web apps and collaborating
              with other developers to help solve problems.
            </p>
            <p className="my-3">
              I’m Looking to be part of Engineering teams in Agile and
              Innovative Technology companies,I’m a proactive team player, who
              likes challenges, achieving goals and learning new things.
            </p>

            <p>
              Have got any exciting opportunities?, You can reach or catch up
              with me on{" "}
              <NextLink href="https://twitter.com/Azanebrahim" passHref>
                <a
                  className="underline decoration-wavy name-color font-barlow text-lg"
                  target="_blank"
                  rel="onopener noreferrer">
                  Twitter
                </a>
              </NextLink>
              ,{" "}
              <NextLink
                href="https://facebook.com/profile.php?id=100050198353049"
                passHref>
                <a
                  className="underline decoration-wavy name-color font-barlow text-lg"
                  target="_blank"
                  rel="onopener noreferrer">
                  Facebook
                </a>
              </NextLink>{" "}
              and{" "}
              <NextLink href="https:/instagram.com/darealazan" passHref>
                <a
                  className="underline decoration-wavy name-color font-barlow text-lg"
                  target="_blank"
                  rel="onopener noreferrer">
                  Instagram
                </a>
              </NextLink>
              . or you can just mail me directly
              <a
                href="mailto:azanebrahim@gmail.com"
                className="font-barlow my-4 px-4 py-1 rounded-lg bg-[#ff813f] text-white flex items-center gap-2 w-fit">
                <SiMinutemailer className="text-[#ffdd00] text-2xl" /> send
                e-mail
              </a>
            </p>
            <p className="py-3">
              In my free time, I try to keep up with new technologies and work
              on side projects to better under the technologies that I use.
              below are the side projects that i’ve built while learning .
            </p>
            <p className="">Here are few technologies I have used:</p>

            <ul className="flex px-6 py-3 gap-8">
              <div>
                <li className="c-list-style">javaScript</li>
                <li className="c-list-style">React.js</li>
                <li className="c-list-style">Node.js</li>
              </div>
              <div>
                <li className="c-list-style">typescript</li>
                <li className="c-list-style">vue.js</li>
                {/* <li className="c-list-style"></li> */}
              </div>
            </ul>
          </div>
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
        <section className="project-grid ">
          {projects.map((el, index) => (
            <Project key={index} src={el.screenshot} {...el}>
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
