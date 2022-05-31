import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`container styled-scroll m-auto flex-1 overflow-auto bg-inherit `}
    >
      {children}
    </section>
  );
};

export default Container;
