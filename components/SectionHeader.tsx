import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

const SectionHeader = (props: Props) => {
  return (
    <h2 className=" py-12 ">
      <span className="self-end mr-2  my-0 py-0">
        {props?.index ? "0" + props.index + "." : ""}
      </span>
      <span className={`font-barlow text-2xl font-medium lg:text-4xl`}>
        {props.children}
      </span>
      <span className="inline-block w-9/12  bg-main-dark dark:bg-white/80 h-[.05rem] ml-10 self-end"></span>
    </h2>
  );
};

export default SectionHeader;
