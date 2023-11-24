import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const [token, owner] = [process.env.GITHUB_TOKEN, process.env.GITHUB_OWNER];
console.log("TOKEN", token);
console.log("OWNER", owner);

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
