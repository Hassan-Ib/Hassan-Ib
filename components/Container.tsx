import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`md:container m-auto h-full w-full overflow-y-auto `}>
      {children}
    </div>
  );
};

export default Container;
