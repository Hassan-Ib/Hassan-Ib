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
    <div className="fixed inset-0 flex flex-col bg-main-light-200 dark:bg-main-dark dark:bg-gradient-br dark:from-main-dark dark:to-main-dark text-primary-black dark:text-primary-white">
      <Navigation />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;

// background-color: #f9d29d;
// background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);
