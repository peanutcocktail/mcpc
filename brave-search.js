module.exports = (options) => {
  return {
    "env": {
      "BRAVE_API_KEY": options.BRAVE_API_KEY
    },
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-brave-search"
    ]
  }
}
