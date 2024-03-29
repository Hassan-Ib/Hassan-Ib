import React from "react";
import SectionHeader from "./SectionHeader";
import NextLink from "next/link";
import { SiMinutemailer } from "react-icons/si";

const About = () => {
  return (
    <section
      aria-label="About Hassan Ibrahim | web developer"
      className=" flex flex-col xl:flex-row lg:gap-20 items-center lg:px-10 leading-loose"
    >
      {/* <HassanProfile /> */}
      <section className="max-w-3xl mx-auto" id="about">
        <SectionHeader index={1}>About me </SectionHeader>
        <section>
          <h3 className="my-3  font-bold text-xl">
            <span className="wave"> 👋 </span> Hey There!{" "}
          </h3>
          <div className="tracking-wide opacity-90">
            <p className="my-5">
              <span className="text-2xl">M</span>y name is{" "}
              <span className="name-color inline-block text-lg font-semibold font-barlow">
                Ibrahim.
              </span>{" "}
              A{" "}
              <span className="name-color inline-block text-xl font-semibold font-barlow">
                {" "}
                Frontend Engineer{" "}
              </span>{" "}
              from Nigeria. I love to build things that live on the internet. My
              main focus is to develop performant web applications and solving
              problems relating to the web by collaborating with other
              developers.
            </p>
            <p className="my-3">
              I am very enthusiastic about developing accessible web
              applications.
            </p>
            <p className="my-3">
              I am looking to be part of Engineering teams in Agile and
              Innovative companies, accessible web applications, ally type
              accessibility, I am a proactive team player who likes challenges,
              achieving goals, and learning.
            </p>

            <p>
              Have got any exciting opportunities?, You can reach or catch up
              with me on{" "}
              <NextLink href="https://twitter.com/Azanebrahim" passHref>
                <a
                  className="underline decoration-wavy name-color font-barlow text-lg"
                  target="_blank"
                  rel="onopener noreferrer"
                >
                  Twitter
                </a>
              </NextLink>
              ,{" "}
              <NextLink
                href="https://facebook.com/profile.php?id=100050198353049"
                passHref
              >
                <a
                  className="underline decoration-wavy name-color font-barlow text-lg"
                  target="_blank"
                  rel="onopener noreferrer"
                >
                  Facebook
                </a>
              </NextLink>{" "}
              and{" "}
              <NextLink href="https:/instagram.com/darealazan" passHref>
                <a
                  className="underline decoration-wavy name-color font-barlow text-lg"
                  target="_blank"
                  rel="onopener noreferrer"
                >
                  Instagram
                </a>
              </NextLink>
              . or you can just mail me directly
              <a
                href="mailto:azanebrahim@gmail.com"
                className="font-barlow my-4 px-4 py-1 rounded-lg bg-[#88380d] text-white flex items-center gap-2 w-fit"
              >
                <SiMinutemailer className="text-[#ffdd00] text-2xl" /> send
                e-mail
              </a>
            </p>
            <p className="py-3">
              In my free time, I try to keep up with new technologies and work
              on side projects to better under the technologies that I use.
              below are the side projects that i’ve built while learning .
            </p>
            <p className="">Here are few technologies I have used:</p>

            <ul className="grid grid-cols-2 px-6 py-3  max-w-xs">
              <li className="c-list-style">JavaScript</li>
              <li className="c-list-style">React.js</li>
              <li className="c-list-style">Node.js</li>
              <li className="c-list-style">Typescript</li>
              <li className="c-list-style">Vue.js</li>
              {/* <li className="c-list-style"></li> */}
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
