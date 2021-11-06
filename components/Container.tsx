import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container m-auto h-full  overflow-y-auto">{children}</div>
  );
};

export default Container;
