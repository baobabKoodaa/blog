import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import theme from "../theme/theme.yaml";
import Article from "../components/Article/";
import Headline from "../components/Article/Headline";
import List from "../components/List";
import Seo from "../components/Seo";

const TagsPage = props => {
  const {
    data: {
      posts: { edges: posts }
    }
  } = props;

  // Create tags list
  const tagsPosts = {};
  posts.forEach(edge => {
    
    const {
      node: {
        frontmatter: { tags }
      }
    } = edge;

    if (tags && tags != null) {
      tags.forEach(tag => {
        if (tag && tag != null) {
          if (!tagsPosts[tag]) {
            tagsPosts[tag] = [];
          }
          tagsPosts[tag].push(edge);
        }
      })
    }
  });

  const tagList = [];

  for (var tag in tagsPosts) {
    tagList.push([tag, tagsPosts[tag]]);
  }

  return (
    <React.Fragment>
      <Article theme={theme}>
        <header>
          <Headline title="Posts by tags" theme={theme} />
        </header>
        {tagList.map(item => (
          <section key={item[0]}>
            <h2>
              <FaTag /> {item[0]}
            </h2>
            <List edges={item[1]} theme={theme} />
          </section>
        ))}
        {/* --- STYLES --- */}
        <style jsx>{`
          h2 {
            margin: 0 0 0.5em;
            color: ${theme.color.neutral.gray.j};
            
          }
          @from-width desktop {
            :global(a:hover) {
              color: ${theme.color.brand.primary};
            }
          }
          h2 :global(svg) {
            height: 0.8em;
            fill: ${theme.color.brand.primary};
          }
        `}</style>
      </Article>

      <Seo pageTitle="Tags"/>
    </React.Fragment>
  );
};

TagsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TagsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//[0-9]+.*--/" }
      }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            tags
            author
          }
        }
      }
    }
  }
`;
