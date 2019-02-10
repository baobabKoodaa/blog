import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { currDate } from "../../utils/helpers";
import { FaUser, FaTag, FaCalendar } from "react-icons/fa/";

const Meta = props => {
  const { author: authorName, tags, theme } = props;
  const prefix = props.prefix || currDate() /* Intent: get date placeholder for viewing drafts. */

  return (
    <p className="meta">
      <span>
        <FaCalendar size={18} /> {prefix}
      </span>

      {/* <span>
        <FaUser size={18} /> {authorName}
      </span> */}

      {tags && tags.map(tag => 
        <span key={tag}>
          
          <Link to={`/tag/${tag.split(" ").join("-")}`}>
            <span style={{color: "black"}}>
              <FaTag size={18} />
              {tag}
            </span>
          </Link>
        </span>
      )}

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }
        @from-width tablet {
          .meta {
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
      `}</style>
    </p>
  );
};

Meta.propTypes = {
  author: PropTypes.string.isRequired,
  tags: PropTypes.array,
  theme: PropTypes.object.isRequired
};

export default Meta;
