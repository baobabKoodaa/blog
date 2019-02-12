# Blog

This is the source for my blog » [see website in action](TODO)

## Features

- **Responsive** and streamlined design
- GatsbyJS compiles your blog into HTML+CSS+JS so you can **host your blog for free** at any static web host (e.g. GitHub pages)
- Write your blog posts into **Markdown** files (easy to format and your content will not be married to any platform)
- **Expandable**: embed custom React components into your Markdown if you want
- Organize your posts by **tags**
- **Blazing fast** UX: everything loads instantly when JS is enabled, but works even when JS is disabled
- **RSS Feed**

## Feel free to fork

- Pull requests are welcome
- You have permission to use the source code (within license terms), but not the content (e.g. blog posts).
- Prerequisites: learn about ReactJS and GatsbyJS.
- [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
- [Setup Algolia account for your GatsbyJS blog](https://dev.greglobinski.com/setup-algolia-account/)
- Gatsby sometimes leaks development data into production build. As a workaround for this issue, there is a buildserve shell script which flushes cache before building.

## Attribution

Hi, I'm Baobab. I didn't start this from scratch.
- I started building on top of [Greg Lobinski's](https://github.com/greglobinski) excellent [hero-blog-starter](https://github.com/greglobinski/gatsby-starter-hero-blog/).
- Many people improved Greg's version, including [Mohsen Khanpour](https://github.com/mohsenkhanpour) who ported it to Gatsby v2 and [Joan Mira](https://github.com/gazpachu) who added pagination.
- Photos are mostly from [Unsplash](https://www.unsplash.com/), hover over to see photographer attribution.
- Icons are mostly from [FontAwesome](https://origin.fontawesome.com/).

Main changes from Greg's version:
- Fixed draft posts (used to leak draft posts into production)
- Fixed RSS feed (used to not have dates so RSS readers were unable to tell which content is new + used to have non-post-articles in feed) 
- Fixed 404 page (text used to be hidden under header)
- Images used to not load without JS. Now the site is usable without JS.
- Allow multiple tags (used to be just 1 category per post)
- Allow custom React components inside Markdown files
- Added follow page
- Added pagination
- Many design changes. Removed and simplified a lot of features to create a less cluttered look (matter of preference, eye of the beholder and so forth...)
