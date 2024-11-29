// npx mcpcm add cocktailpeanut/mcpc/gitlab --GITLAB_PERSONAL_ACCESS_TOKEN <GITLAB ACCESS TOKEN> --GITHUB_API_URL <GITHUB_API_URL>
module.exports = (options) => {
  return {
    "env": {
      "GITLAB_PERSONAL_ACCESS_TOKEN": options.GITLAB_PERSONAL_ACCESS_TOKEN,
      "GITLAB_API_URL": options.GITLAB_API_URL
    },
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-gitlab"
    ],
  }
}
