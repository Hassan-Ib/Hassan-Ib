import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
}

export const PageMain = (props: Props) => {
  return <div className={`${props.className}  my-40`}>{props.children}</div>;
};

export default PageMain;
