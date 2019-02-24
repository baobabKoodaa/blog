import { Link, graphql, StaticQuery } from 'gatsby';
import Picture from 'gatsby-image';
import React from 'react';
import { ThemeContext } from "../../layouts";

const ReImg = (props) => {
    const fluid = JSON.parse(props.rehyped);
    delete fluid.base64 // Workaround a Gatsby bug where both "blur-up" and "tracedSVG" placeholders are shown on top of each other

    console.log(fluid.tracedSVG);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <a href={fluid.originalImg} target="_blank">
                    <div className="imgContainer">
                        <img src={fluid.tracedSVG} title={props.title} style={{
                            position: 'relative',
                            top: 0,
                            left: 0,
                            margin: '2.5em 0',
                            width: "100%",
                            display: 'block',
                            borderRadius: theme.size.radius.default,
                            overflow: 'hidden'
                        }} />
                        <Picture
                        fluid={fluid}
                        title={props.title}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: "100%",
                            borderRadius: theme.size.radius.default,
                            overflow: 'hidden'
                        }}
                        />
                
                    </div>
                    <style jsx>{`
                    .imgContainer {
                        position: relative;
                        top: 0;
                        left: 0;
                    }
                    @from-width desktop {
                        :global(picture) {
                        transition: 300ms ease-in-out;
                        }
                        :global(picture):hover {
                        opacity: 0;
                        }
                    }
                    `}</style>
                </a>
          
            )}
        </ThemeContext.Consumer>
    );
};

export default ReImg;