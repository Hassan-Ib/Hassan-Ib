import NetFlixClone from "../public/img/netflix-clone.png";
import GithubUser from "../public/img/Github-User.png";
import ComfyApp from "../public/img/Comfy-App.png";

interface IProject {
  name: string;
  desc: string;
  href: URL;
  screenshot: StaticImageData;
  repo: string;
  repo_url?: string;
}

const projects: IProject[] = [
  {
    screenshot: NetFlixClone,
    href: new URL("https://netflix-clone-9bf8c.web.app"),
    name: "netflix-clone",
    desc: "Netflix clone built with React, Axios and TMDB API",
    repo: "Netflix-Clone",
  },
  {
    screenshot: ComfyApp,
    href: new URL("https://silva-search-github-user.netlify.app"),
    name: "comfy-funiture",
    desc: "Ecommerce built with React, data fetching with Graph-ql from",
    repo: "comfy-with-react",
  },
  {
    screenshot: GithubUser,
    href: new URL("https://silva-comfy.netlify.app"),
    name: "github-user-search app",
    desc: "Github user search app with React, github REST API and Fusion Charts",
    repo: "gitbub-user-bornicles",
  },
];

export default projects;
