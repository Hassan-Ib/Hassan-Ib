import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import {
  Meta,
  HassanProfile,
  Navigation,
  Footer,
  Container,
} from "../components";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { getRepos } from "../Api/repos";
import { SectionHeader, Project, ToolsBadge, AboutMe } from "../components";
import tools from "../utils/tools";
import { repos as reposInfo, IProject } from "../utils/projects";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = {
  data: string;
};

const Home = ({ data }: Props) => {
  const repos: IProject[] | [] = data ? JSON.parse(data) : [];

  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <Container>
        <header className="h-[700px] md:h-[600px]  py-6 px-4 flex flex-col justify-around md:flex-row md:items-center md:justify-around ">
          <Meta title="Hassan Ibrahim Ayomide | Frontend software developer | Software Engineer" />
          <section className=" flex flex-col self-start md:self-auto items-start">
            <HassanProfile />
            <div className="my-8  md:my-10 font-barlow tracking-widest">
              <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
                Hi <span className=" wave ">👋</span>, my name is <br />
                <span className="text-5xl md:text-7xl text-red-800 dark:text-main-light">
                  Hassan Ibrahim.
                </span>
              </h1>
            </div>
            {/* <button className="btn px-2 py-4 text-xl">Resume</button> */}
          </section>
          <section className="text-3xl font-bold md:font-medium text-right md:text-4xl flex flex-col self-end md:self-auto gap-4 lg:text-5xl  md:gap-8 ">
            <span className="underline decoration-wavy ">
              <Link href="#about" passHref>
                <a>Web developer</a>
              </Link>
            </span>
            <span className="underline decoration-wavy">
              <Link href="/api/download_resume" passHref>
                <a download>Résumé</a>
              </Link>
            </span>
            {/* <span className="underline">Blogger</span> */}
            <span className=""> Book Worm</span>
            <span className=""> Chess enthusiast</span>
          </section>
        </header>
        <main className=" pt-10 px-4 md:px-16 lg:px-20">
          <AboutMe />
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
      </Container>
      <Footer />
    </div>
  );
};

// Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;

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
