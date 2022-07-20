---
title: How to update Gatsby dependencies through major version upgrades
tags: ["web", "how-to", "meta"]
cover: great-gatsby-edited.jpg
author: atte juvonen
---

<re-img
    src="great-gatsby-edited.jpg"
    title="The Great Gatsby - Dependency Updates Edition"
    >
</re-img>

I recently went through the pain of updating <a href="https://github.com/baobabKoodaa" target="_blank">my Gatsby starters</a> (including this blog) from Gatsby v2 to v4, which didn't turn out to be as easy as the internet would have you believe. With the help of some kind souls from Gatsby Discord, I eventually got through it, and I figured I would document the process in this article.

### Setting expectations

According to the official docs, you should be able to update both <a href="https://www.gatsbyjs.com/docs/upgrading-node-js/" target="_blank">Node version</a> and <a href="https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/" target="_blank">Gatsby version</a> without having to do code changes (as long as your code isn't using any of the <a href="https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/#handling-breaking-changes" target="_blank">documented breaking changes</a>). Other advice on the internet is similar. Unfortunately, when you have a moderately complex project, major version upgrades are likely to break everything in a myriad of ways. Here's a non-exhaustive list of issues that I experienced:

- Got stuck in <a href="https://en.wikipedia.org/wiki/Dependency_hell" target="_blank">dependency hell</a> where `npm install` fails due to dependency version conflicts, but any attempt at resolving them by upgrading or downgrading packages merely shifts the conflict to a different set of dependencies.
- Running `gatsby develop` was <a href="https://github.com/gatsbyjs/gatsby/issues/21885" target="_blank">stuck in an infinite loop due to a bug in Gatsby PostCSS plugin that only occurs with specific Node versions</a>. The community plugin still isn't fixed and the workarounds involve either removing the plugin, downgrading Node version, or refactoring CSS in a way that doesn't trigger the bug.
- My CSS broke — not in a clear and obvious manner, but rather in a subtle way affecting only lines where the CSS is nested, the line includes the `&` character, and some value within the line is resolved from a variable. To clarify, my CSS broke only for lines where all 3 of those conditions hold.
- Another subtle breakage was related to my image placeholders, which were misaligned due to an internal change in gatsby-image. This is one of those things that happen when you venture off the beaten path. Internals of Gatsby were never guaranteed to be stable, so you could say that I brought this upon myself by relying on an internal API. This bug was particularly subtle because the placeholders are only visible while the image is loading, so you typically don't even see them when you're developing locally. A real user with a slow internet connection will see them, though, and the misalignment looks quite jarring.

I encountered issues that only affect the production build but don't affect the development build, issues that only affect the development build but don't affect the production build, and issues that only affect hot reload within the development build. Catching everything required extensive manual testing, and I can't imagine a suite of automated tests that would catch things like image placeholder misalignment.

### How to update

The following instructions are written for npm, but you should be able to follow along even if you are using yarn.

General tips:

- In order to avoid dependency hell, you should update everything at the same time instead of updating things one by one.
- Inscrutable errors are often resolved by deleting `.cache`, `node_modules` and `package-lock.json` before running `npm install`.
- Don't stop at the point where the build completes successfully and your automated tests pass; you'll probably need to do manual testing to catch all the subtle issues.

Step by step instructions:

1. Switch to desired Node version (e.g. `nvm use v16`)
2. Ensure desired version of gatsby-cli is installed in this particular Node environment (e.g. `npm install -g gatsby-cli@latest-v4`)
3. Run `ncu -u` to bump <i>package.json</i> dependencies to newest versions (requires <a href="https://www.npmjs.com/package/npm-check-updates" target="_blank">npm-check-updates</a>).
4. Manually edit <i>package.json</i> to downgrade packages that need to be downgraded for compatibility. For example, at the time of writing this, I needed to downgrade React from v18 to v17 in order to avoid hydration errors (Gatsby doesn't fully support v18 at the time of writing).
5. Delete `.cache`
6. Delete `node_modules`
7. Delete `package-lock.json`
8. Hammer on `npm install` until it runs without errors. You can expect to see many errors related to version conflicts in your dependencies. A common source of issues is unmaintained plugins created by the community. In some cases the conflicts can be resolved by downgrading some of the dependencies you just upgraded. In other cases you might want to remove or replace incompatible plugins. As a last resort, you might want to try `npm install --legacy-peer-deps` to force an installation despite version conflicts. Unmaintained plugins often work with newer dependencies in practice.
9. Hammer on `gatsby develop` until it runs without errors. Resolving errors at this step often requires changes to dependencies, in which case <a href="https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf" target="_blank">goto</a> step 5.
10. When you get the dev environment running, it's time to run your automated tests and fix everything that broke according to your tests.
11. After your tests pass successfully, it's time to manually test your site in dev environment and fix everything that's broken (malformed CSS etc. that won't be caught by your automated tests).
12. Additionally, you should manually test that hot reload is not broken: First make some code changes. Then check that you see the changes applied in browser without any action inside the browser. Then try refreshing the site in browser. Then try navigating across different pages.
13. Once your dev environment is fully working, it's time to manually test the production build (`gatsby build && gatsby serve`). For example, some routing issues only exist in the production build.
14. After everything seems to work locally, it's time to update your CI configuration to use the same node version and gatsby-cli as you use locally. This is also a good time to update the build image and other artifacts, if needed.
15. Update your README set-up instructions. (I do this even for my personal projects because I want to know how I can run the project 2 years from now after I have forgotten literally everything about setting it up. It's good to write things like Node version and gatsby-cli version in the README because those won't be contained in your <i>package.json</i>.)
16. If you still have remaining energy, you can continue working through the numerous npm warnings and Gatsby warnings that have appeared as a result of the upgrades.
