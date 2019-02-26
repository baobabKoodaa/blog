//const webpack = require("webpack");
const _ = require("lodash");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const Promise = require("bluebird");
const fs = require('fs');

const { createFilePath } = require(`gatsby-source-filesystem`);

const { blogPostTeaserFields, blogPostSort } = require(`./src/fragments.js`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

function createPaginationJSON(pageNum, context, nonDraftPosts) {

  // Mangle data
  const startInclusive = context.skip;
  const endExclusive = startInclusive + context.limit;
  const pagePosts = nonDraftPosts.slice(startInclusive, endExclusive)
  const dataToSave = JSON.stringify(pagePosts);

  // Save data to JSON file
  const dir = "public/paginationJson/"
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  const filePath = dir+"index"+pageNum+".json";
  console.log("Wrote JSON to " + filePath + " (for infinite scroll)");
  fs.writeFile(filePath, dataToSave, function(err) {
    if(err) {
      return console.log(err);
    }
  }); 
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    const tagTemplate = path.resolve("./src/templates/TagTemplate.js");

    // Do not create draft post files in production.
    let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
    console.log(`Using environment config: '${activeEnv}'`)
    let filters = `filter: { fields: { slug: { ne: null } } }`;
    if (activeEnv == "production") filters = `filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }`

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              ` + filters + `
              ` + blogPostSort + `
              limit: 1000
            ) {
              ` + blogPostTeaserFields + `
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create tags list
        const tagSet = new Set();
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { tags }
            }
          } = edge;

          if (tags && tags != null) {
            tags.forEach(tag => {
              if (tag && tag !== null) {
                tagSet.add(tag);
              }
            })
          }
        });

        // Create tag pages
        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          });
        });

        // Create posts
        const posts = items.filter(item => item.node.fields.source === "posts");
        posts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          const prev = index === 0 ? undefined : posts[index - 1].node;
          const next = index === posts.length - 1 ? undefined : posts[index + 1].node;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              next,
              prev,
              source
            }
          });
        });

        // and pages.
        const pages = items.filter(item => item.node.fields.source === "pages");
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source
            }
          });
        });

        // Create "paginated homepage" == pages which list blog posts
        // And at the same time, create corresponding JSON (for infinite scroll)
        const postsPerPage = 3;
        const nonDraftPosts = posts.filter(item => item.node.fields.prefix)
        const numPages = Math.ceil(nonDraftPosts.length / postsPerPage);

        _.times(numPages, i => {
          const pageNum = (i>0 ? i+1 : "");
          const context = {
            limit: postsPerPage,
            skip: i * postsPerPage,
            filePathRegex: "//" + (process.env.POSTS_FOLDER || 'mock_posts') + "/[0-9]+.*--/",
            numPages,
            currentPage: i + 1
          };
          createPaginationJSON(pageNum, context, nonDraftPosts);
          createPage({
            path: `/`+pageNum,
            component: path.resolve("./src/templates/index.js"),
            context: context
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  switch (stage) {
    case `build-javascript`:
      actions.setWebpackConfig({
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "./report/treemap.html",
            openAnalyzer: true,
            logLevel: "error",
            defaultSizes: "gzip"
          })
        ]
      });
  }
};
