import type { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import {
  Layout,
  Meta,
  HassanProfile,
  Navigation,
  Footer,
  Container,
} from "../components";
import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  // const { pathname } = useRouter();
  // console.log(pathname);

  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <Container>
        <main className="h-[700px] md:h-[600px]  py-6 px-4 flex flex-col justify-around md:flex-row md:items-center md:justify-around ">
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

          <section className="text-3xl font-normal md:font-medium text-right md:text-4xl flex flex-col self-end md:self-auto gap-4 lg:text-5xl md:gap-8 ">
            <span className="underline decoration-wavy">
              <Link href="/about">Web developer </Link>
            </span>
            <span className="underline decoration-wavy">
              <Link href="/dowload-cv"> Download Resume </Link>
            </span>
            {/* <span className="underline">Blogger</span> */}

            <span className=""> Book Worm</span>
            <span className=""> Chess enthusiast</span>
          </section>
        </main>
      </Container>

      <Footer />
    </div>
  );
};

// Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
