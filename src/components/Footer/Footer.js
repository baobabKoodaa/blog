import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <footer className="footer">
        <a href="https://www.github.com/baobabKoodaa/blog/">
          This blog is open source.
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
