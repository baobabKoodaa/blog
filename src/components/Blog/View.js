import React from "react";
import { FaCog } from "react-icons/fa/";
import Hero from "../Hero";
import Blog from "./Blog.js";
import Pagination from "./Pagination";
import { InfiniteScroll } from "./InfiniteScroll";

/** Template for "home" page with infinite scroll and fallback to pagination. */
class View extends React.Component {

  constructor(props) {
    super(props)
    if (props.globalState.isInitializing() || !props.globalState.useInfiniteScroll) {
        props.globalState.updateState({
            items: props.pageContext.initialPosts,
            cursor: props.pageContext.currentPage+1
        })
    }
  }

  render() {

    const g = this.props.globalState
    const pageContext = this.props.pageContext
    const theme = this.props.theme
    const items = (!g.isInitializing() ? g.items : pageContext.initialPosts)

    return (
        <React.Fragment>

            {/* Optional Hero section on first page. */}
            {pageContext.currentPage == 1 && !theme.hero.hide && (
                <Hero theme={theme} />
            )} 

            {/* Blog posts with infinite scroll. */}
            <InfiniteScroll
                throttle={300}
                threshold={600}
                isLoading={g.isLoading}
                hasMore={g.hasMore(pageContext)}
                onLoadMore={g.loadMore}
            >
                <Blog posts={items} theme={theme} />
            </InfiniteScroll>

            {/* Loading spinner. */}
            {g.isLoading && (
                <div className="spinner">
                <FaCog/>
                </div>
            )}

            {/* Fallback to Pagination for non JS users. */} 
            <noscript>
                <style> 
                {`.spinner { display: none !important; }`}
                </style>
                <Pagination pageContext={pageContext} theme={theme}/>
            </noscript>

            {/* Fallback to Pagination on error. */}
            {!g.useInfiniteScroll && (
                <Pagination pageContext={pageContext} theme={theme}/>
            )}

            <style jsx>{`
                @keyframes spinner {
                to {transform: rotate(360deg);}
                }
                .spinner {
                margin-top: 40px;
                font-size: 60px;
                text-align: center;
                display: ${g.useInfiniteScroll ? "block" : "none" };

                :global(svg) {
                    fill: ${theme.color.brand.primaryLight};
                    animation: spinner 3s linear infinite;
                }
                
                }
                        
            `}</style>

        </React.Fragment>
    );
  }
}

export default View