import "../styles/globals.css";
// import "../styles/about.css";
import "@fontsource/barlow-condensed/100.css";
import "@fontsource/barlow-condensed/200.css";
import "@fontsource/barlow-condensed/300.css";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "@fontsource/barlow-condensed/900.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import DarkModeProvider from "../context/DarkModeCtx";
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <DarkModeProvider>
      {" "}
      {getLayout(<Component {...pageProps} />)}
    </DarkModeProvider>
  );
}
export default MyApp;
