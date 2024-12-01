module.exports = (options) => {
  return {
    "mcpServers": {
      "command": "uvx",
      "args": [
        "mcp-server-git",
        "--repository",
        options.REPOSITORY_PATH
      ]
    }
  }
}
