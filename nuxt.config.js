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
  head: {
    title: 'Redirecting you to Gitbook Domain https://indiainvestments.gitbook.io/content/',
    meta: [
      {
        httpEquiv: "refresh",
        content: "0; URL=https://indiainvestments.gitbook.io/content/",
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://indiainvestments.gitbook.io/content/",
        hreflang: "en"
      }
    ]
  },
  components: true
})
