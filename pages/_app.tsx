import "../styles/globals.css";
import "../styles/about.css";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <div className="bg-main dark:bg-main-dark text-primary-black dark:text-primary-white w-full flex flex-col h-screen overflow-hidden">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
export default MyApp;
