// npx mcpcm add cocktailpeanut/mcpc/github --GITHUB_PERSONAL_ACCESS_TOKEN <GITHUB ACCESS TOKEN>
module.exports = (options) => {
  return {
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": options.GITHUB_PERSONAL_ACCESS_TOKEN
    },
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-github"
    ],
  }
}
