import PropTypes from "prop-types";
import React from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Pagination from "../components/Blog/Pagination";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <React.Fragment>

        {/* Uncomment this to get Hero section. */}
        {/*isFirst ? (
          <React.Fragment>

            
            { <ThemeContext.Consumer>
              {theme => (
                <Hero
                  scrollToContent={this.scrollToContent}
                  backgrounds={backgrounds}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer> 
            <hr ref={this.separator} />

          </React.Fragment>
        ) : null}*/}

        <ThemeContext.Consumer>
          {theme =>
            <React.Fragment>
              <Blog posts={posts} theme={theme} />
              <Pagination pageContext={this.props.pageContext} theme={theme} />
              <Seo />

              <style jsx>{`
                hr {
                  margin: 0;
                  border: 0;
                }
              `}</style>
            </React.Fragment>
          }
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!, $filePathRegex: String!) {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: $filePathRegex }
      }
      sort: { fields: [fields___prefix], order: DESC }
      limit: $limit
      skip: $skip
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
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360, traceSVG: { color: "#f9ebd2" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;