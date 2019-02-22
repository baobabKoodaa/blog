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

- If you see something to fix, please send me a pull request (or at least a message)
- Want to create your own blog with this repo? You are free to do so (within license terms).
- Want to reuse my content? Please ask for permission first (license in this repo does not apply to content).

### How to create your own blog with this repo

- Prerequisites: learn about ReactJS and GatsbyJS.
- Install like any other Gatsby starter: `gatsby new my_fork_name https://github.com/baobabkoodaa/blog.git`.
- Run in development mode with `gatsby develop`.
- Run in production mode with `./buildserve` (you need to make the script executable first). This script flushes cache before building. It's workaround to a Gatsby issue where Gatsby sometimes leaks development data into production build.
- Blog posts are in `mock_posts` and `posts` folders. By default only mock posts are used. You can switch to real posts by creating a `.env` file with `POSTS_FOLDER=posts`.
- It's good practice to not add the `.env` file to repo. When you publish your blog, find out how you can add environment variables to your host.
- Go through everything in `content/meta/config.js` and `content/pages` and `content/parts`
- Setup your caching and redirects according to your host rules. I recommend Netlify, in which case cache configuration in `static/_headers` is fine, you just need to edit 1 line in `static/_redirects`.
- Move your own icons into `src/images/app-icons`, run `npm run generate-app-icons`, then replace `static/favicon.ico`.
- [OPTIONAL] If you want Google Analytics: add `GOOGLE_ANALYTICS_ID=123456` to environment variables.
- [OPTIONAL] If you want a contact page: [Setup Contact Form submission via Google Script](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server)
- [OPTIONAL] If you want a Search page with Algolia: mostly follow instructions from [here](https://dev.greglobinski.com/setup-algolia-account/). Search for commented out code with 'algolia'.


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
- Improved usability for users who have JS disabled (images used to not load without JS and form submission used to not work without JS)
- Contact Form submission used to require entire web site to be hosted on Netlify. Now the Contact Form submission uses Google Scripts and web site hosting / form handling can be changed independently.
- Allow multiple tags (used to be just 1 category per post)
- Allow custom React components inside Markdown files
- Added follow page
- Added pagination
- Many design changes. Removed and simplified a lot of features to create a less cluttered look (matter of preference, eye of the beholder and so forth...)
