import PropTypes from "prop-types";
import React from "react";
import { FaCog } from "react-icons/fa/";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Pagination from "../components/Blog/Pagination";
import { InfiniteScroll } from "../components/Blog/InfiniteScroll";
import { connectGeoSearch } from "react-instantsearch-dom";

/** Template for "home" page with infinite scroll and fallback to pagination. */
class IndexPage extends React.Component {

  // State is used for Infinite Scroll and initialized properly in componentDidMount.
  state = {
    items: [], // Items which should be rendered based on how low the user has scrolled
    isLoading: true, // Avoid triggering multiple simultaenous loadings
    cursor: -42 // Represents next page which infinite scroll should fetch. 
  }

  componentDidMount() {
    // Load initial items fast
    this.setState(state => ({
      items: this.props.data.posts.edges,
      isLoading: false,
      cursor: this.props.pageContext.currentPage+1
    }))

    // If you want to do paginated fetch for first items, uncomment the following line:
    // this.loadMore()

    // TODO fetch more in case everything fits to users' screen without scrolling?
  }

  loadMore = () => {
    this.setState({ isLoading: true, error: undefined })
    fetch(`/paginationJson/index${this.state.cursor}.json`) // TODO test that this path works everywhere
      .then(res => res.json())
      .then(
        res => {
          this.setState(state => ({
            items: [...state.items, ...res], // Add resulting edges to state.items
            cursor: state.cursor+1, // Update which page should be fetched next
            isLoading: false // Loading is complete so a new load can be triggered.
          }))
        },
        error => {
          // TODO make pagination visible in case of error?
          this.setState({ isLoading: false, error })
        }
    )
  }

  render() {

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme =>
            <React.Fragment>

              {/* Uncomment this to get Hero section.
              {this.props.pageContext.currentPage == 1 && (
                <Hero theme={theme} />
              )} */}

              <div>
                <InfiniteScroll
                throttle={100}
                threshold={300}
                isLoading={this.state.isLoading}
                hasMore={this.state.cursor <= this.props.pageContext.numPages}
                onLoadMore={this.loadMore}
                >
                  <Blog posts={this.state.items} theme={theme} />

                </InfiniteScroll>
                {this.state.isLoading && (
                  <div className="spinner">
                    <FaCog/>
                  </div>
                  
                )}
              </div>
              <Pagination pageContext={this.props.pageContext} theme={theme}/>
              <Seo pageTitle="Blog home"/>
              <style jsx>{`
                @keyframes spinner {
                  to {transform: rotate(360deg);}
                }
                .spinner {
                  margin-top: 40px;
                  font-size: 60px;
                  text-align: center;
                  :global(svg) {
                    fill: ${theme.color.brand.primaryLight};
                    animation: spinner 3s linear infinite;
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

/******************** DANGER! MUST BE CONSISTENT WITH QUERY IN fragments.js ! */

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!, $filePathRegex: String!) {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: $filePathRegex }
      }
      sort: { fields: [fields___prefix, fields___slug], order: DESC }
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
                  fluid(maxWidth: 800, maxHeight: 360, cropFocus: CENTER, quality: 90, traceSVG: { color: "#f9ebd2" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;