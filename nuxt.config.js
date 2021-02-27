import theme from '@nuxt/content-theme-docs'

export default theme({
  target: "static",
  docs: {
    primaryColor: '#0080FF'
  },
  content: {
    markdown: {
      remarkPlugins: [
        "remark-emoji",
        "@fec/remark-a11y-emoji"
      ]
    }
  },
  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      document.text = `
       <alert type="warning">Warning</alert>
      ${document.text}`;
      console.log(document); // TODO: do remove this
    }
  },
  components: true
})
