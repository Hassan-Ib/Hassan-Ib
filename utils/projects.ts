import NetFlixClone from "../public/img/netflix-clone.png";
import GithubUser from "../public/img/Github-User.png";
import ComfyApp from "../public/img/Comfy-App.png";

interface IProject {
  name: string;
  desc: string;
  href: URL;
  src: StaticImageData;
}

const projects: IProject[] = [
  {
    src: NetFlixClone,
    href: new URL("https://netflix-clone-9bf8c.web.app"),
    name: "netflix-clone",
    desc: "Netflix clone built with React, Axios and TMDB API",
  },
  {
    src: GithubUser,
    href: new URL("https://silva-comfy.netlify.app"),
    name: "comfy-funiture",
    desc: "Ecommerce built with React, data fetching with Graph-ql from",
  },
  {
    src: ComfyApp,
    href: new URL("https://silva-search-github-user.netlify.app"),
    name: "github-user-search app",
    desc: "Github user search app with React, github REST API and Fusion Charts",
  },
];

export default projects;
