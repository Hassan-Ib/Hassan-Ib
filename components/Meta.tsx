import React from "react";
import Head from "next/head";
interface Props {
  title: string;
}

const Meta = (props: Props) => {
  return (
    <Head>
      <title> {props.title}</title>
      {/* <meta name="viewport" content="inital-scale=1.0, width=devic-width" /> */}
    </Head>
  );
};

export default Meta;
