import React from "react";
import { useRouter } from "next/router";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <div className="md:container m-auto h-full w-full overflow-y-auto ">
      {children}
    </div>
  );
};

export default Container;
