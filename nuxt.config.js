import theme from "@nuxt/content-theme-docs";

export default theme({
  target: "static",
  docs: {
    primaryColor: "#0080FF",
  },
  content: {
    markdown: {
      remarkPlugins: ["remark-emoji", "@fec/remark-a11y-emoji"],
    },
  },
  components: true,
});
