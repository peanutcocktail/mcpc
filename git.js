// npx mcpcm add cocktailpeanut/mcpc/git --REPOSITORY <REPOSITORY>
module.exports = (options) => {
  return {
    "command": "uvx",
    "args": [
      "mcp-server-git",
      "--repository",
      options.REPOSITORY
    ]
  }
}
