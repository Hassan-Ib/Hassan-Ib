import React from "react";
import type { ReactElement } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const Layout = (props: Props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
