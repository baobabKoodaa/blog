import React from 'react';
import Picture from 'gatsby-image';
import { ThemeContext } from "../../layouts";
import { StaticQuery, graphql } from 'gatsby';

const ReImage = props => {

  // First locate the image we want to display
  const wantedName = props.src.split(".")[0];
  const filteredPosts = props.data.posts.edges.filter(edge => {
    const piecesOfPath = edge.node.frontmatter.cover.children[0].fluid.src.toString().split("/")
    const imageName = piecesOfPath[piecesOfPath.length-1].split(".")[0]
    return imageName.includes(wantedName);
  })  
  if (filteredPosts.length != 1) {
    throw ("ReImage error! Expected to locate 1 image for " + wantedName + ", instead located " + filteredPosts.length);
  }
  const fluid = filteredPosts[0].node.frontmatter.cover.children[0].fluid

  // Then display the image
  return (
      <ThemeContext.Consumer>
        {theme => (
          <Picture
          fluid={fluid}
          style={{
            maxWidth: props.presentationWidth,
            margin: '0 auto',
            border: 0,
            display: 'block',
            margin: '2.5em 0',
            borderRadius: theme.size.radius.default,
            overflow: 'hidden',
            border: '1px solid ' + theme.line.color
          }}
        />
        )}
        
      </ThemeContext.Consumer>
  );
};

//export default ReImage;

export default props => (
  <StaticQuery
    //eslint-disable-next-line no-undef
    query={graphql`
      query {
        posts: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
                prefix
              }
              frontmatter {
                title
                tags
                cover {
                  children {
                    ... on ImageSharp {
                      fluid(maxWidth: 800, traceSVG: { color: "#f9ebd2" }) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ReImage data={data} src={props.src} />}
  />
)