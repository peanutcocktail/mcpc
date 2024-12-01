module.exports = (options) => {
  return {
    "mcpServers": {
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
}
