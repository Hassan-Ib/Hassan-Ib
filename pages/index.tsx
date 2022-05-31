import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import { Layout, Meta, HassanProfile, Navigation } from "../components";
import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  // const { pathname } = useRouter();
  // console.log(pathname);

  return (
    <main className=" h-full py-6 px-4 flex flex-col justify-around md:flex-row md:items-center md:justify-around ">
      <Meta title="Hassan Ibrahim Ayomide" />
      <section className=" flex flex-col self-start md:self-auto items-start">
        <HassanProfile />
        <div className="my-8  md:my-10 font-barlow tracking-widest">
          <h1 className="text-2xl font-semibold tracking-wide">
            Hi <span className=" wave ">👋</span>, my name is <br />
            <span className="text-7xl text-[#0a192f] dark:text-main-light">
              Hassan Ibrahim.
            </span>
          </h1>
        </div>
        <button className="btn px-2 py-4 text-xl">Resume</button>
      </section>

      <section className="text-4xl font-medium text-right md:text-4xl flex flex-col self-end md:self-auto gap-4 lg:text-5xl md:gap-8 ">
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
