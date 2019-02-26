import PropTypes from "prop-types";
import React from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Pagination from "../components/Blog/Pagination";
import { InfiniteScroll } from "../components/Blog/InfiniteScroll";

class IndexPage extends React.Component {

  state = {
    items: [],
    isLoading: true,
    cursor: 2
  }

  componentDidMount() {
    // If you want to do paginated fetch for first items, uncomment:
    // this.loadMore()

    // Instead load initial items fast
    this.setState(state => ({
      items: [...state.items, ...this.props.data.posts.edges],
      isLoading: false,
      cursor: this.props.pageContext.currentPage+1
    }))
  }

  loadMore = () => {
    this.setState({ isLoading: true, error: undefined })
    fetch(`/paginationJson/index${this.state.cursor}.json`) // TODO MAKE PATH WORK EVERYWHERE ????????????????????????
      .then(res => res.json())
      .then(
        res => {
          this.setState(state => ({
            items: [...state.items, ...res],
            cursor: state.cursor+1,
            isLoading: false
          }))
        },
        error => {
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

              {/* Uncomment this to get Hero section. */}
              {this.props.pageContext.currentPage == 1 && (
                <React.Fragment>
                  <Hero theme={theme} />
                </React.Fragment>
              )}

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
                {/*TODO: LOADING indicator:
                  this.state.isLoading && (
                  <MyLoadingState />
                )*/} 
              </div>
              <Pagination pageContext={this.props.pageContext} theme={theme}/>
              <Seo pageTitle="Blog home"/>
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