import React from "react";
import type { ReactElement } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Container from "./Container";
interface Props {
  children: ReactElement;
}

const Layout = (props: Props) => {
  return (
    <div className="bg-main-light dark:bg-main-dark text-primary-black dark:text-primary-white flex flex-col h-screen">
      <Navigation />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
