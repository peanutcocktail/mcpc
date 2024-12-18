module.exports = (options) => {
  return {
    "mcpServers": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
      ].concat(options.ALLOWED_DIRECTORIES ? options.ALLOWED_DIRECTORIES.split(",") : "")
    }
  }
}
