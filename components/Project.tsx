import React from "react";
import Image, { ImageProps } from "next/image";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

const Project = ({
  src,
  name,
  children,
  href,
}: ImageProps & NextLinkProps & { name: string }) => {
  return (
    <div className="shadow-2xl bg-card-light dark:bg-card-dark rounded-sm overflow-hidden border border-main-dark ">
      <div className="relative block w-full h-48  overflow-hidden hover:opacity-80 transition-all">
        <Image
          src={src}
          alt={`${name}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="py-4 px-4 text-sm">
        <NextLink href={href} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline capitalize block text-xl font-medium mb-2">
            {name}
          </a>
        </NextLink>
        {children}
      </div>
    </div>
  );
};

export default Project;
