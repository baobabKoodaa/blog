import PropTypes from "prop-types";
import React from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1 || !currentPage;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
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
              <div className="pagination">
                {!isFirst && (
                  <Link to={prevPage} rel="prev">
                    <h4 className="next-link-text">
                      Newer posts
                    </h4>
                    <span className="next-arrow">
                      <FaArrowRight/>
                    </span>
                  </Link>
                )}
                {!isLast && (
                  <Link to={nextPage} rel="next">
                    <span className="prev-arrow">
                      <FaArrowLeft/>
                    </span>
                    <h4 className="prev-link-text">
                      Older posts
                    </h4> 
                  </Link>
                )}
              </div>


              {/* Uncomment to get page-numbered pagination links on the hompage. */}
              {/* <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "700px",
                  margin: "0 auto 60px auto",
                  alignItems: "center",
                  listStyle: "none",
                  padding: 0,
                  lineHeight: "30px"
                }}
              >
                {Array.from({ length: numPages }, (_, i) => (
                  <li
                    key={`pagination-number${i + 1}`}
                    style={{
                      margin: 0
                    }}
                  >
                    <Link
                      to={`/${i === 0 ? "" : i + 1}`}
                      style={{
                        padding: "3px 8px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        color: i + 1 === currentPage ? "#ffffff" : "",
                        background: i + 1 === currentPage ? "#007acc" : ""
                      }}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}
              </ul> */}

              <Seo />

              <style jsx>{`
                hr {
                  margin: 0;
                  border: 0;
                }

                .next-arrow {
                  :global(svg) {
                    margin-left: 10px !important;
                  }
                }
                
                .pagination {
                  display: flex;
                  flex-direction: row-reverse;
                  justify-content: center;
                  padding: ${theme.space.l} ${theme.space.l} ${theme.space.l};
                  margin: ${theme.space.stack.l};


                  .next-link-text {
                    color: &color-brand-primary;
                    width: 100%;
                    text-align: right;
                    margin-left: 20px;
                  }
                  .prev-link-text {
                    color: &color-brand-primary;
                    padding-right: 20px;
                    margin-right: 20px;
                  }

                  :global(a) {
                    display: flex;
                  }

                  :global(a:nth-child(2)) {
                    margin: 0;
                  }



                  h4 {
                    font-weight: 600;
                    margin: 0;
                    font-size: 1.1em;
                  }
                  :global(svg) {
                    fill: ${theme.color.special.attention};
                    width: ${theme.space.m};
                    height: ${theme.space.m};
                    flex-shrink: 0;
                    flex-grow: 0;
                    transition: all 0.5s;
                    margin: ${theme.space.inline.s};
                  }
                }

                @from-width desktop {
                  @media (hover: hover) {
                    .pagination :global(a:hover svg) {
                      transform: scale(1.5);
                    }
                  }
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
  query IndexQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
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
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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