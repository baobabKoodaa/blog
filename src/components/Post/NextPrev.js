import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FaArrowRight } from "react-icons/fa/";
import { FaArrowLeft } from "react-icons/fa/";

const NextPrev = props => {
  const {
    theme,
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {}
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {}
    } = {}
  } = props;

  const flexb = (nextSlug && prevSlug ? "50%" : "100%") /* If only one link available, it can take 100% of space. */

  if (!nextSlug && !prevSlug) return (<span></span>); /* If neither prev nor next is available, don't put weird empty space there. */

  return (
    <React.Fragment>
      <div className="links">

        {nextSlug && (
          <Link to={nextSlug}>
            <span className="next-link-text">
              <h4>
                {nextTitle} <time>{nextPrefix} </time>
              </h4>
            </span>
            <span className="next-arrow live-arrow">
              <FaArrowRight />
            </span>
          </Link>
        )}
        {prevSlug && (
          <Link to={prevSlug}>
            <span className="live-arrow">
              <FaArrowLeft />
            </span>
            <span className="prev-link-text">
              <h4>
                {prevTitle} <time>{prevPrefix}</time>
              </h4>
            </span>
          </Link>
        )}
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .next-link-text {
          color: &color-brand-primary;
          width: 100%;
          text-align: right;
        }
        .prev-link-text {
          color: &color-brand-primary;
        }
        .next-arrow {
          margin-left: 10px;
        }
        .links {
          display: flex;
          flex-direction: column;
          padding: ${theme.space.l} ${theme.space.m} ${theme.space.l};
          border-top: 1px solid ${theme.line.color};
          border-bottom: 1px solid ${theme.line.color};
          margin: ${theme.space.stack.l};
          margin-bottom: 0;

          :global(a) {
            display: flex;
          }

          :global(a:nth-child(2)) {
            margin: ${theme.space.default} 0 0;
          }

          :global(svg) {
            fill: ${theme.color.special.attention};
            width: ${theme.space.m};
            height: ${theme.space.m};
            flex-shrink: 0;
            flex-grow: 0;
            margin: ${theme.space.inline.m};
          }
        }

        h4 {
          font-weight: 600;
          margin: 0;
          font-size: 1.1em;
        }
        time {
          color: ${theme.color.neutral.gray.g};
          display: block;
          font-weight: 400;
          font-size: 0.8em;
          margin-top: 0.5em;
        }

        @from-width desktop {
          .prev-link-text {
            margin-right: 20px;
          }
          .next-link-text {
            margin-left: 20px;
          }
          .links {
            flex-direction: row-reverse;
            justify-content: center;

            :global(a) {
              flex-basis: ${flexb};
            }

            :global(a:nth-child(2)) {
              margin: 0;
            }
            :global(svg) {
              transition: all 0.5s;
              margin: ${theme.space.inline.s};
            }
          }

          @media (hover: hover) {
            .links :global(a:hover svg) {
              transform: scale(1.5);
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default NextPrev;
