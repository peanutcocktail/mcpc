module.exports = (options) => {
  return {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
    ].concat(options.ALLOWED_DIRECTORIES.split(","))
  }
}
