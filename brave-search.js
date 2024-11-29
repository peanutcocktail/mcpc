// npx mcpcm add cocktailpeanut/mcpc/brave-search --BRAVE_API_KEY <BRAVE_API_KEY>
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
