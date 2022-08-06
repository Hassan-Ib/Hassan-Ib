import React from "react";
import Image, { ImageProps } from "next/image";
import NextLink from "next/link";
import Link from "./Link";
import type { IProject } from "../utils/projects";
import { FiGithub, FiLink } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import ToolTiped from "./ToolTiped";
import { FaGithubAlt } from "react-icons/fa";
const Project = ({ src, name, children, ...props }: ImageProps & IProject) => {
  return (
    <section className=" shadow-xl min-h-[350px] max-w-[320px] mx-auto dark:shadow-2xl relative transition-transform md:hover:-translate-y-1 rounded-lg  border border-blue-700">
      {/* <section className="absolute w-full h-full -z-10 rounded-lg overflow-clip">
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={`${name}`}
            layout="fill"
            className=""
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section> */}
      <article className="flex flex-col py-6 px-4 rounded-md  relative h-full  dark:bg-opacity-90 dark:bg-[#112240]/95">
        <div className="flex justify-between items-center text-blue-700 pb-8">
          <BsFolder className="text-5xl " />
          <div className="text-xl flex items-center gap-3">
            {props?.repo_url && (
              <ToolTiped tip="repository">
                <Link
                  ariaLabel="my github repository link for this project"
                  href={props.repo_url}>
                  <FaGithubAlt />
                </Link>
              </ToolTiped>
            )}
            {props?.live_url && (
              <ToolTiped tip="live site ">
                <Link
                  ariaLabel="live site link for this project"
                  href={props.live_url}>
                  <AiOutlineLink />
                </Link>
              </ToolTiped>
            )}
          </div>
        </div>
        <p className="capitalize font-barlow font-medium tracking-wider text-sm opacity-70">
          Featured Project
        </p>
        <h3>
          <NextLink href={props.live_url} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline capitalize block text-2xl tracking-wide font-semibold my-4 text-blue-700">
              {name}
            </a>
          </NextLink>
        </h3>
        <p className="opacity-80 text-[0.95rem] leading-relaxed flex-1 ">
          {children}
        </p>
        <ul className="text-xs pt-8 flex gap-1 opacity-70 flex-wrap font-semibold capitalize">
          {props?.topics &&
            props.topics.map((tag, index) => (
              <li
                key={index}
                className=" transition-all duration-200 px-1 hover:skew-y-6 hover:bg-blue-700 hover:text-white  cursor-text">
                <span>{tag} </span>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
};

export default Project;
