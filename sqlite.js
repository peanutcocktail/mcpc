module.exports = (options) => {
  return {
    "command": "uvx",
    "args": [
      "mcp-server-sqlite",
      "--db-path",
      options.DB_PATH
    ]
  }
}
