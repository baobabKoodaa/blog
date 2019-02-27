import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";

const ContactPage = props => {

  return (
    <React.Fragment>
        <Article theme={theme}>
          <header>
            <Headline title="Contact" theme={theme} />
          </header>
          <Contact theme={theme} />
        </Article>
      <Seo pageTitle="Contact"/>
    </React.Fragment>
  );
};

ContactPage.propTypes = {
};

export default ContactPage;
