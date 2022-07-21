import type { GetStaticProps } from "next";
import NextLink from "next/link";
import React, { ReactElement } from "react";
import { getRepos } from "../Api/repos";
import {
  Layout,
  Meta,
  HassanProfile,
  SectionHeader,
  Project,
  ToolsBadge,
} from "../components";
import tools from "../utils/tools";
import { repos as reposInfo, IProject } from "../utils/projects";
import { SiMinutemailer } from "react-icons/si";

type Props = {
  data: string;
};
const About = ({ data }: Props) => {
  const repos: IProject[] = JSON.parse(data);
  return (
    <main className="py-20  xl:py-2 px-4 md:px-16 lg:px-20">
      <Meta title="About Hassan Ibrahim Ayomide | Developer | Bookworm | chess enthusiast" />
      <section
        aria-label="About Hassan Ibrahim | web developer"
        className=" flex flex-col xl:flex-row lg:gap-20 items-center lg:px-10 leading-loose">
        <HassanProfile />
        <section>
          <SectionHeader>A bit about me </SectionHeader>
          <section>
            <h3 className="my-3  font-bold text-xl">
              <span className="wave"> 👋 </span> Hey There!{" "}
            </h3>
            <div className="tracking-wide opacity-90">
              <p className="my-5">
                <span className="text-2xl">M</span>y name is{" "}
                <span className="name-color inline-block text-lg font-semibold font-barlow">
                  Ibrahim.
                </span>{" "}
                A{" "}
                <span className="name-color inline-block text-xl font-semibold font-barlow">
                  {" "}
                  Frontend Web Developer{" "}
                </span>{" "}
                from Nigeria. I love to build things that live on the internet.
                My main focus is to develop performant web applications and
                solving problems relating to the web by collaborating with other
                developers.
              </p>
              <p className="my-3">
                I am very enthusiastic about developing accessible web
                applications.
              </p>
              <p className="my-3">
                I am looking to be part of Engineering teams in Agile and
                Innovative companies, accessible web applications, ally type
                accessibility, I am a proactive team player who likes
                challenges, achieving goals, and learning.
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
                  className="font-barlow my-4 px-4 py-1 rounded-lg bg-[#88380d] text-white flex items-center gap-2 w-fit">
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

              <ul className="grid grid-cols-2 px-6 py-3  max-w-xs">
                <li className="c-list-style">JavaScript</li>
                <li className="c-list-style">React.js</li>
                <li className="c-list-style">Node.js</li>
                <li className="c-list-style">Typescript</li>
                <li className="c-list-style">Vue.js</li>
                {/* <li className="c-list-style"></li> */}
              </ul>
            </div>
          </section>
        </section>
      </section>

      <section aria-label="Hassan Ibrahim projects" className="my-16">
        <section
          aria-label="Hassan Ibrahim development tools || web developer"
          className="flex justify-center items-center gap-3 pt-16 my-16">
          {tools.map((el, index) => (
            <ToolsBadge key={index} src={el.src} toolName={el.toolName} />
          ))}
        </section>

        <SectionHeader>My projects</SectionHeader>
        <section className="project-grid mt-10">
          {repos.map((repo, index) => (
            <Project key={index} src={repo.screenshot} {...repo}>
              {repo.description}
            </Project>
          ))}
        </section>
      </section>
    </main>
  );
};

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const reposName = reposInfo.map((el) => el.repo);
    // console.log("reposName", reposName);
    const data = await getRepos(reposName);

    if (!data) {
      throw "Error fetching data";
    }
    const filteredData = data.map((repo, index) => {
      const { data } = repo;
      return {
        name: reposInfo[index].name,
        repo_url: data.html_url,
        live_url: data.homepage,
        topics: data.topics,
        description: data.description,
        screenshot: reposInfo[index].screenshot,
      };
    });

    // console.log("filteredData", filteredData);
    return {
      props: {
        data: JSON.stringify(filteredData),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
