import NetFlixClone from "../public/img/netflix-clone.png";
import GithubUser from "../public/img/Github-User.png";
import ComfyApp from "../public/img/Comfy-App.png";
import Pokedex from "../public/img/pok3d3x.png";
import Porfolio from "../public/img/Hassan-ib.png";
import SpaceTourism from "../public/img/space-tourism.png";
import SchoolBlog from "../public/img/school-blog.png";

export type IProject = {
  name: string;
  description: string;
  live_url: URL;
  screenshot: StaticImageData;
  repo: string;
  repo_url?: string;
  topics?: string[];
  // live_url?: string;
};

export type TRepo = {
  name: string;
  repo: string;
  screenshot: StaticImageData;
};
export const repos: TRepo[] = [
  {
    name: "school blog",
    repo: "school-project",
    screenshot: SchoolBlog,
  },
  {
    name: "space tourism",
    repo: "space-tourism",
    screenshot: SpaceTourism,
  },
  {
    name: "pok3d3x",
    repo: "pokedex",
    screenshot: Pokedex,
  },
  {
    name: "porfolio",
    repo: "Hassan-Ib",
    screenshot: Porfolio,
  },
  {
    repo: "Netflix-Clone",
    name: "netflix-clone",
    screenshot: NetFlixClone,
  },
  {
    repo: "comfy-with-react",
    name: "comfy-funiture",
    screenshot: ComfyApp,
  },
  {
    repo: "github-user-bornicles",
    name: "github-user-search app",
    screenshot: GithubUser,
  },
];
