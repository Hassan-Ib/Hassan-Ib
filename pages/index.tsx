import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import { Container, Layout, Meta, HassanProfile } from "../components";
import Image from "next/image";
import HassanImage from "./../public/img/profile 1.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  // const { pathname } = useRouter();
  // console.log(pathname);

  return (
    <main className="h-full pt-12 px-4 flex flex-col md:flex-row md:items-center md:justify-around">
      <Meta title="Hassan Ibrahim Ayomide" />

      {/* image and name*/}

      <section className=" flex flex-col self-start md:self-auto items-center ">
        <HassanProfile />
        <div className="my-8  md:my-10">
          <h2 className="text-xl lg:text-2xl md:font-medium tracking-wide">
            Hi, my name is Ibrahim.
          </h2>
        </div>
      </section>

      {/* links */}

      <section className="text-3xl text-right md:text-4xl flex flex-col self-end md:self-auto gap-2 lg:text-5xl md:gap-8 ">
        <span className="underline">
          <Link href="/about">Web developer </Link>
        </span>
        <span className="underline ">
          <Link href="/dowload-cv"> Download CV </Link>
        </span>
        {/* <span className="underline">Blogger</span> */}

        <span className=""> Book Worm</span>
        <span className=""> Chess enthusiast</span>
      </section>
    </main>
  );
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
