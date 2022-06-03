import React from "react";
import Image, { ImageProps } from "next/image";
import NextLink from "next/link";
import Link from "./Link";
import type { IProject } from "../utils/projects";
import { FiGithub, FiLink } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import ToolTiped from "./ToolTiped";
const Project = ({ src, name, children, ...props }: ImageProps & IProject) => {
  return (
    <div className="shadow-2xl relative rounded transition-transform hover:-translate-y-1 ">
      <Image
        src={src}
        alt={`${name}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="flex flex-col py-6 px-4 bg-blue-300/95 relative h-full  dark:bg-opacity-90 dark:bg-[#112240]/95">
        <div className="flex justify-between items-center pb-8">
          <BsFolder className="text-5xl" />
          <div className="text-xl flex items-center gap-3">
            {props?.repo_url && (
              <ToolTiped tip="repository">
                <Link href={props.repo_url}>
                  <FiGithub />
                </Link>
              </ToolTiped>
            )}
            {props?.live_url && (
              <ToolTiped tip="live site ">
                <Link href={props.live_url}>
                  <AiOutlineLink />
                </Link>
              </ToolTiped>
            )}
          </div>
        </div>
        <h4 className="capitalize font-barlow font-medium tracking-wider text-sm opacity-70">
          Featured Project
        </h4>
        <h1>
          <NextLink href={props.live_url} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline capitalize block text-2xl tracking-wide font-semibold my-4">
              {name}
            </a>
          </NextLink>
        </h1>
        <p className="opacity-80 text-[0.95rem] leading-relaxed flex-1">
          {children}
        </p>
        <ul className="text-xs pt-8 flex gap-3 opacity-70 flex-wrap font-semibold capitalize">
          {props?.toolsTags &&
            props.toolsTags.map((tag, index) => (
              <li key={index}>
                <span>{tag} </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
