import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import config from "../../../content/meta/config";

const Seo = (props) => {
  const { data } = props;
  const pageTitle = props.pageTitle;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = config.shortSiteTitle + " - " + (postTitle || pageTitle);
  const description = postDescription ? postDescription : config.siteDescription;
  const imagePath = postCover ? postCover.childImageSharp.resize.src : config.siteImage;
  const url =
    config.siteUrl + (config.pathPrefix ? config.pathPrefix : "") + (postSlug ? postSlug : "");
  const domain = useStaticQuery(plausibleDomainQuery).site.siteMetadata.plausibleDomain;
  const imagePathWithDomain = "https://" + domain + "/" + imagePath.replace(/^\//, "");

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#",
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePathWithDomain} />
      <meta property="og:type" content="website" />
      {/* Plausible Analytics */}
      <script async defer data-domain={domain} src="https://plausible.io/js/plausible.js" />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object,
};

const plausibleDomainQuery = graphql`
  query plausibleDomainQuery {
    site {
      siteMetadata {
        plausibleDomain
      }
    }
  }
`;

export default Seo;
