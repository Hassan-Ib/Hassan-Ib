import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionHeader = (props: Props) => {
  return (
    <h2
      className={`${props.className} py-12 md:py-6 text-2xl font-medium lg:text-3xl text-center flex items-center justify-center`}
    >
      <span className="inline-block w-6 border border-main-dark dark:border-white mx-6"></span>
      {props.children}
      <span className="inline-block w-6 border border-main-dark dark:border-white mx-6"></span>
    </h2>
  );
};

export default SectionHeader;
