// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";
import { repos, IProject } from "../../utils/projects";
type Data = {
  name?: string;
  error?: { message: string };
  data?: { live_url: string; repo_url: string }[];
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const [token, owner] = [process.env.GITHUB_TOKEN, process.env.GITHUB_OWNER];
    console.log("TOKEN", token);
    console.log("OWNER", owner);
    const fetchRepos = () =>
      Promise.all(
        repos.map(({ repo }) =>
          octokit.rest.repos.get({
            owner: process.env.GITHUB_OWNER!,
            repo,
          })
        )
      );
    let reposData = await fetchRepos();

    const data = reposData.map((repo) => {
      const { data } = repo;

      return {
        repo_url: data.html_url!,
        live_url: data.homepage!,
        tools: data.topics!,
        desc: data.description!,
      };
    });

    console.log("REPOS", data);

    res.status(200).json({ data: data });
  } catch (error) {
    const [token, owner] = [process.env.GITHUB_TOKEN, process.env.GITHUB_OWNER];
    console.log("TOKEN", token);
    console.log("OWNER", owner);
    // const err = error as Error;
    // console.log("repo fetch error", err.message);
    // return { notFound: true };
    res.status(404).json({});
  }
}
