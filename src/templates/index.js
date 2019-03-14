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

/** Template for "home" page with infinite scroll and fallback to pagination. */
class IndexPage extends React.Component {

  state = {
    /*  items contains posts which should be rendered
     *  items is initialized to 1 page of results, in order to:
     *    1. render a page to users who have JS disabled
     *    2. render initial paint fast for all users
     *  the initial page depends on pageContext.currentPage (corresponds to a path like "/", "/2", "/3",...)
     */
    items: this.props.pageContext.initialPosts,
    /*
     *  isLoading is used to avoid triggering multiple simultaenous loadings
     */
    isLoading: true,
    /*
     *  cursor represents next page which infinite scroll should fetch
     */
    cursor: this.props.pageContext.currentPage+1,
    /*
     * useInfiniteScroll is used to fallback to pagination _on error_
     * note that the fallback to non JS users is not related to this
     */
    useInfiniteScroll: true
  }

  componentDidMount() {
    this.setState(state => ({
      isLoading: false, // Allow triggering infinite scroll load
    }))
  }

  loadMore = () => {
    this.setState({ isLoading: true, error: undefined })
    fetch(`/paginationJson/index${this.state.cursor}.json`)
      .then(res => res.json())
      .then(
        res => {
          this.setState(state => ({
            items: [...state.items, ...res], // Add resulting post items to state.items
            cursor: state.cursor+1, // Update which page should be fetched next
            isLoading: false // Loading is complete so a new load can be triggered.
          }))
        },
        error => {
          this.setState({
            isLoading: false,
            error,
            useInfiniteScroll: false
          })
        }
    )
  }

  render() {

    const hasMore = (
      this.state.cursor <= this.props.pageContext.numPages
      && this.state.useInfiniteScroll
    );

    return (
      <ThemeContext.Consumer>
        {theme =>
          <React.Fragment>

            {/* Optional Hero section on first page. */}
            {this.props.pageContext.currentPage == 1 && !theme.hero.hide && (
              <Hero theme={theme} />
            )} 

            {/* Blog posts with infinite scroll. */}
            <InfiniteScroll
              throttle={300}
              threshold={600}
              isLoading={this.state.isLoading}
              hasMore={hasMore}
              onLoadMore={this.loadMore}
            >
                <Blog posts={this.state.items} theme={theme} />
            </InfiniteScroll>

            {/* Loading spinner. */}
            {this.state.isLoading && (
              <div className="spinner">
                <FaCog/>
              </div>
            )}

            {/* Fallback to Pagination for non JS users. */} 
            <noscript>
              <style> 
                {`.spinner { display: none !important; }`}
              </style>
              <Pagination pageContext={this.props.pageContext} theme={theme}/>
            </noscript>

            {/* Fallback to Pagination on error. */}
            {!this.state.useInfiniteScroll && (
              <Pagination pageContext={this.props.pageContext} theme={theme}/>
            )}

            <Seo pageTitle="Blog home"/>

            <style jsx>{`
              @keyframes spinner {
                to {transform: rotate(360deg);}
              }
              .spinner {
                margin-top: 40px;
                font-size: 60px;
                text-align: center;
                display: ${this.state.useInfiniteScroll ? "block" : "none" };

                :global(svg) {
                  fill: ${theme.color.brand.primaryLight};
                  animation: spinner 3s linear infinite;
                }
                
              }
                      
            `}</style>
          </React.Fragment>
        }
      </ThemeContext.Consumer>
    );
  }
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default IndexPage;