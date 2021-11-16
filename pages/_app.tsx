import "../styles/globals.css";
// import "../styles/about.css";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
