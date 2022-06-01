import React from "react";
import type { ReactElement } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Container from "./Container";
interface Props {
  children: ReactElement;
}

const Layout = (props: Props) => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <Navigation />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;

export const NavigationLayout = (props: Props) => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <Navigation />
      <Container>{props.children}</Container>
    </div>
  );
};

// background-color: #f9d29d;
// background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);
