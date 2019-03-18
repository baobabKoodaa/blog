import PropTypes from "prop-types";
import React from "react";

import Teaser from "./Teaser";

const Blog = props => {
  const posts = props.posts;
  const theme = props.theme;

  return (
    <React.Fragment>
      <main className="main">
        <ul>
          {posts.map((post,index) => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Teaser key={slug} post={node} theme={theme} index={index} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
        @below desktop {
          ul {
            padding-top: 10px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
