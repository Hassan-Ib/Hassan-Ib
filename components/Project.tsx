import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "./Link";

const Project = ({
  src,
  name,
  children,
}: ImageProps & { name: string; children: React.ReactNode }) => {
  return (
    <div className=" shadow-xl bg-card-light dark:bg-card-dark rounded overflow-hidden">
      <div className="relative block w-full h-48  overflow-hidden hover:opacity-80 transition-all">
        <Image
          src={src}
          alt={`${name}`}
          //   layout="responsive"
          //   width="600"
          //   height="400"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="py-6 px-4 text-sm">
        <Link
          href=""
          className="underline capitalize block text-xl font-medium mb-2">
          {name}
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Project;
