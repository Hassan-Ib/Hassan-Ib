import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container m-auto border border-black h-full">
      {children}
    </div>
  );
};

export default Container;
