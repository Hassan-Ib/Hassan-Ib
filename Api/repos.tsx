import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getRepos = (repoList: string[]) => {
  return Promise.all(
    repoList.map((repo) =>
      octokit.rest.repos.get({
        owner: process.env.GITHUB_OWNER!,
        repo,
      })
    )
  )
    .then((reposData) => reposData)
    .catch((err) => {
      throw err;
    });
};
