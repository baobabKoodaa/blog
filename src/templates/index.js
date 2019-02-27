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
     *  showPaginationLinks is used as fallback in case of errors or non JS users
     */
    showPaginationLinks: true
  }

  componentDidMount() {
    this.setState(state => ({
      isLoading: false, // Allow triggering infinite scroll load
      showPaginationLinks: false // Hide pagination links for users who are running JS // TODO somehow do this faster?
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
            items: [...state.items, ...res], // Add resulting post items to state.items
            cursor: state.cursor+1, // Update which page should be fetched next
            isLoading: false // Loading is complete so a new load can be triggered.
          }))
        },
        error => {
          this.setState({
            isLoading: false,
            error,
            showPaginationLinks: true // Fallback to pagination on error, too.
          })
        }
    )
  }

  render() {

    return (
      <ThemeContext.Consumer>
        {theme =>
          <React.Fragment>

            {/* Optional Hero section. */}
            {this.props.pageContext.currentPage == 1 && !theme.hero.hide && (
              <Hero theme={theme} />
            )} 

            {/* Blog posts with infinite scroll */}
            <InfiniteScroll
              throttle={100}
              threshold={300}
              isLoading={this.state.isLoading}
              hasMore={this.state.cursor <= this.props.pageContext.numPages}
              onLoadMore={this.loadMore}
            >
                <Blog posts={this.state.items} theme={theme} />
            </InfiniteScroll>

            {/* Show loading spinner if user scrolls too fast. */}
            {this.state.isLoading && !this.state.showPaginationLinks && (
              <div className="spinner">
                <FaCog/>
              </div>
            )}

            {/* Fallback to Pagination Links */}
            {this.state.showPaginationLinks && 
              <Pagination pageContext={this.props.pageContext} theme={theme}/>
            }

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
    );
  }
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default IndexPage;