import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import config from "../../../content/meta/config";

const Seo = props => {
  const { data } = props;
  const pageTitle = props.pageTitle;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = config.shortSiteTitle + " - " + (postTitle || pageTitle)
  const description = postDescription ? postDescription : config.siteDescription;
  const image = postCover ? postCover : config.siteImage;
  const url = config.siteUrl + config.pathPrefix + postSlug;

  return (
    <StaticQuery
    query={graphql`
      query plausibleDomainQuery {
        site {
          siteMetadata {
            plausibleDomain
          }
        }
      }
    `}
    render={ queryResults => {
      const domain = queryResults.site.siteMetadata.plausibleDomain
      return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* OpenGraph tags */}
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:type" content="website" />
          {/* Plausible Analytics */}
          {process.browser && <script async defer data-domain={domain} src="https://plausible.io/js/plausible.js"/>}
        </Helmet>
      )
    }}
    />
  )
};

Seo.propTypes = {
  data: PropTypes.object
};

export default Seo;
