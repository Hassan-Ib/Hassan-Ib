import React from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";
import { NavLink } from "./NavLink";
import { DarkMode } from "./DarkMode";
import Link from "./Link";
import Image from "next/image";

const navlinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },

  {
    href: "/contact",
    text: "Contact",
  },
];
type Props = {
  className?: string;
};

const Navigation = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const { pathname } = useRouter();
  // console.log(darkMode, toggleDarkMode);

  const openNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  React.useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className=" py-1 bg-main-light  dark:bg-main-dark ">
      <nav className="py-4 px-4 flex items-center justify-end">
        <Link href="/" className="flex items-center gap-2 flex-1">
          <div className="relative rounded-full border-2 h-10 w-10 border-card-dark dark:border-main-light overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/53692907?s=400&u=1c19cef9caad448f9565a4b4431ab88e99baaee3&v=4"
              alt="hassan image"
              // className="rounded-full "
              layout="fill"
              // objectFit="cover"

              // objectPosition="center"
              // height="40"
              // width="40"
            />
          </div>
          {/* <span className="">🔯</span> */}
          {/* <span className="font-bold">HI </span>{" "} */}
        </Link>
        <ul
          className={` capitalize tracking-wide absolute left-0 top-0 w-full flex flex-col gap-2  py-8 px-4 bg-main-light dark:bg-main-dark ${
            isNavOpen || "hidden"
          } dark:bg-main-dark md:p-0 md:flex md:flex-1 
          z-20 md:relative md:flex-row md:gap-4 md:items-center md:justify-end`}
        >
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <NavLink href={navlink.href}>
                {" "}
                <span>0{index + 1}</span>. {navlink.text}
              </NavLink>
            </li>
          ))}

          <button
            onClick={openNav}
            className="text-3xl absolute right-4 top-0 mt-8 md:hidden"
            aria-label="menu close"
          >
            <MdClose />
          </button>
        </ul>
        <button className=" mx-6 border border-main-dark dark:border-main-light-100 px-6 py-2 rounded-md capitalize">
          resume
        </button>

        <div className="flex items-center gap-2">
          <button
            aria-label="menu open"
            className="text-3xl md:hidden"
            onClick={openNav}
          >
            <BiMenu />
          </button>

          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

Navigation.defaultProps = {
  className: "",
};
export default Navigation;
