import { Octokit } from "@octokit/rest";
console.log("GITHUB_TOKEN:", process.env.GITHUB_TOKEN);
console.log("GITHUB_OWNER:", process.env.GITHUB_OWNER);
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getRepos = (repoList: string[]) => {
  return Promise.all(
    repoList.map((repo) =>
      octokit.rest.repos.get({
        owner: process.env.GITHUB_OWNER!,
        repo,
      }),
    ),
  )
    .then((reposData) => reposData)
    .catch((err) => {
      throw err;
    });
};
