// npx mcpcm add cocktailpeanut/mcpc/google-maps --GOOGLE_MAPS_API_KEY <Google maps API key>
module.exports = (options) => {
  return {
    "env": {
      "GOOGLE_MAPS_API_KEY": options.GOOGLE_MAPS_API_KEY
    },
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-google-maps"
    ],
  }
}