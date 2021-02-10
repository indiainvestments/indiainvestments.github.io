# India Investments

[![Reddit](https://img.shields.io/reddit/subreddit-subscribers/indiainvestments?style=social)](https://www.reddit.com/r/IndiaInvestments)
[![Discord](https://img.shields.io/discord/546638391127572500)](https://discord.gg/hqBNg4u)

India Investments is a place to discuss investments, insurance, finance, economy, and markets in India. This repo is a collection of advice and information we have organized as a community.

If you want to contribute anything to the repo, please see [contributing](./CONTRIBUTING.md)

If you want to discuss anything inside this repo with other people, please check out the [subreddit](https://www.reddit.com/r/IndiaInvestments) and [discord](https://discord.gg/hqBNg4u).

## Content

All the content is stored inside `content` directory. We have different directories for different languages. `en` only contains entries in english. If you want to translate or contribute in a different language, please use the correct language directory or make a separate one if one doesn't exist.

### FAQs

`faqs` directory contains commonly asked questions on the subreddit and discord. Please add your entry here if it's an answer to those questions.

### Wiki

`wiki` directory contains long form text on fundamentals stuff related to markets, investing, finance and economy.

## Website

### Setup

Install dependencies:

```bash
yarn install
```

### Development

```bash
yarn dev
```

### Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
yarn generate
```

To preview the static generated app, run `yarn start`

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).
