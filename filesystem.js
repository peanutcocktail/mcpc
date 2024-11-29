// npx mcpcm add cocktailpeanut/mcpc/filesystem --ALLOWED_DIRECTORIES <COMMA SEPARATED ALLOWED DIRECTORIES>
module.exports = (options) => {
  return {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
    ].concat(options.ALLOWED_DIRECTORIES.split(",")
  }
}
