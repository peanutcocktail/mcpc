// npx mcpcm add cocktailpeanut/mcpc/sqlite --DB_PATH <DB_PATH>
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
