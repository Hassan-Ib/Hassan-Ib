import NetFlixClone from "../public/img/netflix-clone.png";
import GithubUser from "../public/img/Github-User.png";
import ComfyApp from "../public/img/Comfy-App.png";

export type IProject = {
  name: string;
  desc: string;
  live_url: URL;
  screenshot: StaticImageData;
  repo: string;
  repo_url?: string;
  toolsTags?: string[];
  // live_url?: string;
};

const BaseRepoUrl = "https://github.com/Hassan-Ib/";

const projects: IProject[] = [
  {
    screenshot: NetFlixClone,
    live_url: new URL("https://netflix-clone-9bf8c.web.app"),
    name: "netflix-clone",
    desc: "Netflix clone built with React, Axios and TMDB API",
    repo: "Netflix-Clone",
    repo_url: BaseRepoUrl + "Netflix-Clone",
    toolsTags: ["React", "Axios", "TMDB API", "react-router-dom"],
  },
  {
    screenshot: ComfyApp,
    live_url: new URL("https://silva-comfy.netlify.app"),
    name: "comfy-funiture",
    desc: "Ecommerce built with React, data fetching with Graph-ql from",
    repo: "comfy-with-react",
    repo_url: BaseRepoUrl + "comfy-with-react",
    toolsTags: ["React", "GraphQL", "Styled-components", "Contentful"],
  },
  {
    screenshot: GithubUser,
    live_url: new URL("https://silva-search-github-user.netlify.app"),
    name: "github-user-search app",
    desc: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories.",
    repo: "gitbub-user-bornicles",
    repo_url: BaseRepoUrl + "gitbub-user-bornicles",
    toolsTags: ["React", "GitHub API", "Chart.js", "Styled Components"],
  },
];

export default projects;
