module.exports = (options) => {
  return {
    "mcpServers": {
      "command": "uvx",
      "args": [
        "mcp-server-sqlite",
        "--db-path",
        options.DB_PATH
      ]
    }
  }
}
