# Blog

Work in progress. Will be: A ready to use, easy to customize [GatsbyJS](https://www.gatsbyjs.org/) starter (starter is like a theme).

See this starter blog in action » [Demo website](TODO) <br />

## Features:

- TODO
- Easy editable content in **Markdown** files (posts, pages and parts)
- **CSS** with `styled-jsx` and `PostCSS`
- **SEO** (sitemap generation, robot.txt, meta and OpenGraph Tags)
- **Social** sharing (Twitter, Facebook, Google, LinkedIn)
- **Comments** (Facebook)
- **Images** lazy loading and `webp` support (gatsby-image)
- Post **tags** (tag based post list)
- Full text **searching** (Algolia)
- **Contact** form (Netlify form handling)
- Form elements and validation with `ant-design`
- **RSS** feed
- 100% **PWA** (manifest.webmanifest, offline support, favicons)
- Google **Analytics**
- App **favicons** generator (node script)
- Easy customizable base **styles** via `theme` object generated from `yaml` file (fonts, colors, sizes)
- React **v.16.3** (gatsby-plugin-react-next)
- **Components** lazy loading (social sharing)
- **ESLint** (google config)
- **Prettier** code styling
- Webpack `BundleAnalyzerPlugin`
- **Gravatar** image (optional) instead local Avatar/Logo image

##### External services

The starter uses external services for some functions: comments, searching, analytics. To use them you have to secure some access data. All services are free to use or have generous free tiers big enough for a personal blog.

Create an `.env` file like below in the root folder. Change `...` placeholders with real data.
<br />By default, your `.env` file will be ignored by git. Remove `.env` from `.gitignore` in order to be able to push the file to your repository.

```text
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
FB_APP_ID=...
```

## Feel free to fork

- Pull requests are welcome
- You have permission to use the source code (within license terms), but not the content (e.g. blog posts).
- Prerequisites: learn React and GatsbyJS.
- [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
- [Setup Algolia account for your GatsbyJS blog](https://dev.greglobinski.com/setup-algolia-account/)

## Attribution

Hi, I'm Baobab. I didn't start this from scratch.
- I started building on top of [Greg Lobinski's](https://github.com/greglobinski) excellent [hero-blog-starter](https://github.com/greglobinski/gatsby-starter-hero-blog/).
- [Mohsen Khanpour](https://github.com/mohsenkhanpour) ported Greg's version to Gatsby v2.
- [Many other kind hearted people](https://github.com/greglobinski/gatsby-starter-hero-blog/graphs/contributors) made contributions to Greg's version.
- Photos are mostly from [Unsplash](https://www.unsplash.com/), hover over to see photographer attribution.
- Icons are mostly from [FontAwesome](https://origin.fontawesome.com/).

Main changes from Greg's version:
- TODO
- TODO
- TODO
- TODO
