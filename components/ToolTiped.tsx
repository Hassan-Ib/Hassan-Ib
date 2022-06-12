import React from "react";

type Props = {
  children: React.ReactNode;
  tip: string;
};

const ToolTiped = (props: Props) => {
  return (
    <div className=" relative group z-40 flex items-center justify-center">
      <div>{props.children}</div>
      <div className="tooltip absolute hidden group-hover:flex items-center justify-center -top-[3rem] min-w-[5rem]  p-2 border border-white capitalize text-xs bg-gray-800 text-white rounded-md z-50">
        {props.tip}
      </div>
    </div>
  );
};

export default ToolTiped;
