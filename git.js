module.exports = (options) => {
  return {
    "command": "uvx",
    "args": [
      "mcp-server-git",
      "--repository",
      options.REPOSITORY_PATH
    ]
  }
}
