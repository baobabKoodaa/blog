import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { FaTag , FaRss , FaPaperPlane } from "react-icons/fa";
import config from "../../content/meta/config";

const FollowPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Follow" theme={theme} />
            </header>
            <p>Hear about new posts by either RSS or Email.</p>

            <a href="../rss.xml" target="_blank">
              <section className="subContainer">
                  <span className="subIcon"><FaRss/></span>
                  <span className="subText">RSS</span>
              </section>
            </a>

            <a href={config.emailSubLink} target="_blank">
              <section className="subContainer">
                <span className="subIcon"><FaPaperPlane/></span>
                <span className="subText">Email</span>
              </section>
            </a>

            <style jsx>{`
              p {
                font-size: ${theme.font.size.s};
                line-height: ${theme.font.lineHeight.xxl};
                margin: 0 0 1.5em;
                margin-bottom: 40px;
              }

              .subContainer {
                display: inline-block;
                border-radius: 6px;
                padding: 10px;
                padding-bottom: 0px;
                margin-right: 30px;
                min-width: 130px;
                border: 1px solid ${theme.color.neutral.white};
                :hover {
                  border: 1px solid #ccc;
                }
              }
            
              .subText {
                  text-align: right;
                  font-size: 20px;
                  color: black;
                  :hover {
                    color: ${theme.color.brand.primary};
                  }
              }
              
              .subIcon {
                  vertical-align: middle;
                  font-size: 40px;
                  padding-right: 10px;
                  :global(svg) {
                    fill: ${theme.color.brand.primary};
                  }
              }
            `}</style>
          </Article>
        )}
      </ThemeContext.Consumer>
      <Seo facebook={facebook} />
    </React.Fragment>
    
  );
};

FollowPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FollowPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query FollowQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
