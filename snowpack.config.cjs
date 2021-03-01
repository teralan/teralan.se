/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-typescript"],
  mount: {
    "src/stores": "/_stores",
    "src/components": "/_components",
  },
  alias: {
    $app: "./.svelte/assets/runtime/app",
    $components: "./src/components",
    $stores: "./src/stores",
  },
}
