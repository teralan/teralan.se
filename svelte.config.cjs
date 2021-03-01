const sveltePreprocess = require("svelte-preprocess")
const { typescript } = sveltePreprocess
const { preprocess: windicssPreprocess } = require("svelte-windicss-preprocess")

module.exports = {
  preprocess: [
    typescript(),
    sveltePreprocess({ defaults: { script: "typescript" } }),
    windicssPreprocess({
      config: "tailwind.config.cjs",
      compile: false,
      globalPreflight: true,
      globalUtility: true,
    }),
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: "@sveltejs/adapter-node",

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
}
