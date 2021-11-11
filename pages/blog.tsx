import React from "react";
import { NextPage } from "next";
import { Layout, Container } from "../components";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const Blog: NextPageWithLayout = () => {
  return (
    <div className="w-full h-full flex place-items-center place-content-center">
      <div className="flex flex-col gap-4 items-center justify-center text-xl  w-96 h-52  rounded-md bg-main-dark dark:bg-main-light text-primary-white dark:text-primary-black  bg-opacity-40 backdrop-filter backdrop-blur-lg bg-clip-padding border border-main-light shadow-xl">
        <p className="text-2xl capitalize">sorry ! 👀</p>
        <p>blog post under development</p>
      </div>
    </div>
  );
};

Blog.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      <Container>{page}</Container>
    </Layout>
  );
};

export default Blog;
