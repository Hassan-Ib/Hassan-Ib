import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import { Container, Layout, Meta, HassanProfile } from "../components";
import { HiOutlineCode } from "react-icons/hi";

import Image from "next/image";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const About: NextPageWithLayout = () => {
  return (
    <main className="styled-scroll flex flex-col items-center h-full py-20 md:py-2 md:border border-white px-4 md:px-16 lg:px-36 overflow-y-auto">
      <Meta title="About Hassan Ibrahim Ayomide | Developer | Bookworm | chess enthusiast" />
      <section
        aria-label="About Hassan Ibrahim | web developer"
        className=" md:text-lg flex flex-col md:flex-row md:gap-20 items-center">
        <HassanProfile />
        <section>
          <h4 className="py-12 md:py-6 text-xl lg:text-3xl text-center flex items-center justify-center ">
            <span className="inline-block w-6 border border-main-dark dark:border-white mx-6"></span>{" "}
            A bit about me{" "}
            <span className="inline-block w-6 border border-main-dark dark:border-white mx-6"></span>
          </h4>
          <h5 className="my-3"> Hey there! 🧡</h5>
          <p className="my-2">
            👋 My name is Hassan Ibrahim and welcome to my personal website. I’m
            a Web Developer from Nigeria and a Computer Science graduate. I’d
            like to be a Fullstack Developer but i currrently specialize in
            Frontend Development. I’m a lifetime code hobbyist passionate about
            learning, leading, and collaborating with other developers to help
            solve problems with code.
          </p>
          <p>
            I’m Looking to be part of Engineering teams in Agile and Innovative
            Technology companies. Got any exciting opportunities? kindley
            contact me 😎 .
          </p>
          <p>
            In my limited free time, i learn try to keep up with new
            technologies and work on side projects to better under the
            technologies that i use. below are the side projects that i’ve built
            while learning .
          </p>
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
