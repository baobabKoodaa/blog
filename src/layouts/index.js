import PropTypes from "prop-types";
import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer/";
import Header from "../components/Header";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);

import themeObjectFromYaml from "../theme/theme.yaml";

import 'typeface-open-sans/index.css'

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutgQuery {
            footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
              id
              html
            }
          }
        `}
        render={data => {
          const { children } = this.props;
          const {
            footnote: { html: footnoteHTML }
          } = data;

          return (
            <ThemeContext.Provider value={this.state.theme}>
              <ScreenWidthContext.Provider value={this.state.screenWidth}>
                <React.Fragment>
                  <Header
                    path={this.props.location.pathname}
                    theme={this.state.theme}
                  />
                  <main>{children}</main>
                  <Footer html={footnoteHTML} theme={this.state.theme} />

                  {/* --- STYLES --- */}
                  <style jsx>{`
                    main {
                      min-height: 80vh;
                    }
                  `}</style>
                  <style jsx global>{`
                    html {
                      box-sizing: border-box;
                    }
                    *,
                    *:after,
                    *:before {
                      box-sizing: inherit;
                      margin: 0;
                      padding: 0;
                    }
                    body {
                      font-family: 'Open Sans', 'Arial', 'sans-serif';
                      font-weight: 400;
                    }
                    h1,
                    h2,
                    h3 {
                      font-weight: 600;
                      font-family: 'Open Sans', 'Arial', 'sans-serif';
                      line-height: 1.1;
                      letter-spacing: -0.03em;
                      margin: 0;
                    }
                    h1 {
                      letter-spacing: -0.04em;
                    }
                    p {
                      margin: 0;
                    }
                    strong {
                      font-family: 'Open Sans', 'Arial', 'sans-serif';
                      font-weight: 600;
                    }
                    a {
                      text-decoration: none;
                      color: #666;
                    }
                    main {
                      width: auto;
                      display: block;
                    }
                  `}</style>
                </React.Fragment>
              </ScreenWidthContext.Provider>
            </ThemeContext.Provider>
          );
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
/*
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;

*/
