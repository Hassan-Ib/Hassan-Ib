import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import { Container, Layout, Meta } from "../components";
import Image from "next/image";
import HassanImage from "./../public/img/profile 1.jpg";
import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  return (
    <main className="flex flex-col gap-6 py-8 px-2  md:flex-row">
      <Meta title="Hassan Ibrahim Ayomide" />
      {/* image and name*/}

      <section className=" flex flex-col self-start items-center ">
        <div className="relative ">
          <div className="w-36 h-36 md:w-44 md:h-44 border-2 border-main-dark dark:border-main absolute left-6 top-2 transform rotate-45"></div>
          <div className="relative rounded-full w-40  h-40 md:w-48 md:h-48 overflow-hidden">
            <Image
              src={HassanImage}
              alt="Hassan Ibrahim"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        <div className="my-8 md:my-10">
          <h2 className="text-lg lg:text-2xl md:font-medium tracking-wide">
            Hi, my name is Ibrahim.
          </h2>
        </div>
      </section>

      {/* links */}

      <section className="text-3xl text-right flex flex-col self-end gap-4  lg:text-5xl md:gap-8 ">
        <span className="underline pr-8 lg:pr-16">
          <Link href="/about">Web developer </Link>
        </span>
        <span className="underline pr-4 lg:pr-8">
          <Link href="/dowload-cv"> Download CV </Link>
        </span>
        {/* <span className="underline">Blogger</span> */}

        <span className="pr-4 lg:pr-8"> Book Worm</span>
        <span className="pr-8 lg:pr-16"> Chess enthusiast</span>
      </section>
    </main>
  );
};

Home.getLayout = (page: React.ReactElement) => (
  <Layout>
    <Container>{page}</Container>
  </Layout>
);

export default Home;
