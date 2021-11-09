import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import {
  Container,
  Layout,
  Meta,
  HassanProfile,
  SectionHeader,
  Project,
} from "../components";
import JavaScriptSvg from "../public/icons8-javascript.svg";
import TypeScriptSvg from "../public/icons8-typescript.svg";
import ReduxSvg from "../public/icons8-redux.svg";
import SassSvg from "../public/icons8-sass.svg";
import ReactSvg from "../public/icons8-react.svg";
import NodeSvg from "../public/icons8-nodejs.svg";
import Image, { ImageProps } from "next/image";
import NetFlixClone from "../public/img/netflix-clone.png";
import GithubUser from "../public/img/Github-User.png";
import ComfyApp from "../public/img/Comfy-App.png";

type tool = ImageProps & { toolName: string };

const tools: tool[] = [
  {
    src: JavaScriptSvg,
    toolName: "javascript",
  },
  {
    src: TypeScriptSvg,
    toolName: "typeScript",
  },
  {
    src: ReactSvg,
    toolName: "react js",
  },
  {
    src: NodeSvg,
    toolName: "node js",
  },
  {
    src: ReduxSvg,
    toolName: "redux",
  },
  {
    src: SassSvg,
    toolName: "Scss",
  },
];

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type ToolsBadgeProps = ImageProps & {
  toolName: string;
};

const ToolsBadge = (props: ToolsBadgeProps) => {
  return (
    <div className="relative w-14 h-14">
      <Image
        src={props.src}
        alt={`${props.toolName} icons`}
        layout="responsive"
      />
    </div>
  );
};

const About: NextPageWithLayout = () => {
  return (
    <main className="styled-scroll h-full py-20 md:py-2 md:border border-main-dark dark:border-white px-4 md:px-16 lg:px-36 overflow-y-auto">
      <Meta title="About Hassan Ibrahim Ayomide | Developer | Bookworm | chess enthusiast" />
      <section
        aria-label="About Hassan Ibrahim | web developer"
        className=" md:text-lg flex flex-col md:flex-row md:gap-20 items-center">
        <HassanProfile />
        <section>
          <SectionHeader>A bit about me </SectionHeader>
          <h5 className="my-3"> Hey there! 🧡</h5>
          <p className="my-3">
            👋 My name is Hassan Ibrahim and welcome to my personal website. I’m
            a Web Developer from Nigeria and a Computer Science graduate. I’d
            like to be a Fullstack Developer but i currrently specialize in
            Frontend Development. I’m a lifetime code hobbyist passionate about
            learning, leading, and collaborating with other developers to help
            solve problems with code.
          </p>
          <p className="my-3">
            I’m Looking to be part of Engineering teams in Agile and Innovative
            Technology companies. Got any exciting opportunities? kindley
            contact me 😎 .
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
          <ToolsBadge src={JavaScriptSvg} toolName="javascript" />
          <ToolsBadge src={TypeScriptSvg} toolName="typescript" />
          <ToolsBadge src={ReactSvg} toolName="react js" />
          <ToolsBadge src={NodeSvg} toolName="node js" />
          <ToolsBadge src={ReduxSvg} toolName="redux" />
          <ToolsBadge src={SassSvg} toolName="sass" />
        </section>

        <SectionHeader>My projects</SectionHeader>
        <section className="project-grid">
          <Project src={NetFlixClone} name="netflix-clone">
            Ecommerce demo built with React, data fetching with Graph-ql from
            headless CMS Contentful
          </Project>
          <Project src={ComfyApp} name="comfy-funiture">
            Ecommerce demo built with React, data fetching with Graph-ql from
            headless CMS Contentful
          </Project>
          <Project src={GithubUser} name="github-user-search app">
            Ecommerce demo built with React, data fetching with Graph-ql from
            headless CMS Contentful
          </Project>
        </section>
      </section>
    </main>
  );
};

About.getLayout = (page) => (
  <Layout>
    <Container>{page}</Container>
  </Layout>
);

export default About;
