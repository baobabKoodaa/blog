import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

const Footer = props => {
  const { theme } = props;
  const buildTime = useStaticQuery(query).site.buildTime

  return (
    <React.Fragment>
      <footer className="footer">
        <a href="https://www.github.com/baobabKoodaa/blog/">
          This blog is open source. Last updated {buildTime}.
        </a>
        
      </footer> 

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          padding-top: 40px;
          text-align: center;
          color: ${theme.color.neutral.gray.g};
          font-size: ${theme.font.size.xxs};
        }

        @from-width desktop {
          .footer {
            padding: 40px 1em 1.5em;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Footer;

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD.MM.YYYY kk:mm")
    }
  }
`