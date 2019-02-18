import React from 'react';
import Picture from 'gatsby-image';
import { ThemeContext } from "../../layouts";

const ReImage = ({ rehyped }) => {
  const props = JSON.parse(rehyped);

  return (
      <ThemeContext.Consumer>
        {theme => (
          <Picture
          fluid={props}
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

export default ReImage;