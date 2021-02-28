/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-typescript"],
  mount: {
    "src/components": "/_components",
    "src/styles": "/_styles",
  },
  alias: {
    "@components": "./src/components",
    "@styles": "./src/styles",
  },
}
