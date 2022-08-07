import NetFlixClone from "../public/img/netflix-clone.png";
import GithubUser from "../public/img/Github-User.png";
import ComfyApp from "../public/img/Comfy-App.png";
import Pokedex from "../public/img/Hassan-ib.png";
import Porfolio from "../public/img/Hassan-ib.png";
import SpaceTourism from "../public/img/space-tourism.png";
import SchoolBlog from "../public/img/school-blog.png";

export type IProject = {
  name: string;
  description: string;
  live_url: URL;
  screenshot: string;
  repo: string;
  repo_url?: string;
  topics?: string[];
  // live_url?: string;
};

export type TRepo = {
  name: string;
  repo: string;
  screenshot: string;
};
export const repos: TRepo[] = [
  {
    name: "school blog",
    repo: "school-project",
    screenshot: "/img/school-blog.png",
  },
  {
    name: "space tourism",
    repo: "space-tourism",
    screenshot: "/img/space-tourism.png",
  },
  {
    name: "pok3d3x",
    repo: "pokedex",
    screenshot: "/img/pokedex.png",
  },
  {
    name: "porfolio",
    repo: "Hassan-Ib",
    screenshot: "/img/Hassan-ib.png",
  },
  {
    repo: "Netflix-Clone",
    name: "netflix-clone",
    screenshot: "/img/netflix-clone.png",
  },
  {
    repo: "comfy-with-react",
    name: "comfy-funiture",
    screenshot: "/img/Comfy-App.png",
  },
  {
    repo: "github-user-bornicles",
    name: "github-user-search app",
    screenshot: "/img/Github-User.png",
  },
];
