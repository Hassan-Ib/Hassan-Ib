import React, { ReactElement } from "react";
import { Layout, Meta, Experience } from "../components";

const ExperiencePage = () => {
  return (
    <main className="py-20 xl:py-2 px-4 md:px-16 lg:px-20">
      <Meta title="Experience | Hassan Ibrahim Ayomide" />
      <Experience />
    </main>
  );
};

ExperiencePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ExperiencePage;
