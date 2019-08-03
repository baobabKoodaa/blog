import { Link, graphql, StaticQuery } from 'gatsby';
import Picture from 'gatsby-image';
import React from 'react';
import theme from "../../theme/theme.yaml";

const ReImg = (props) => {
    const fluid = (props.fluid ? props.fluid : JSON.parse(props.rehyped)) // To support 2 different use cases
    delete fluid.base64 // Workaround a Gatsby bug where both "blur-up" and "tracedSVG" placeholders are shown on top of each other
    const href = (props.href ? props.href : fluid.originalImg)
    const relativeStyle = {
        position: 'relative',
        top: 0,
        left: (props.meme ? '15%' : '0'),
        margin: '2.5em 0',
        width: (props.meme ? '70%' : '100%'),
        display: 'block',
        borderRadius: theme.size.radius.default,
        overflow: 'hidden'
    }
    const absoluteStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        borderRadius: theme.size.radius.default,
        overflow: 'hidden'
    }

    if (!props.hovereffect) {
        return <a href={href} target="_blank">
                    <Picture
                        fluid={fluid}
                        title={props.title}
                        style={relativeStyle}
                    />
                </a>
    }

    return (
        <a href={href} target="_blank">
            <div className="imgContainer">
                <img
                    src={fluid.tracedSVG}
                    title={props.title}
                    style={relativeStyle} />
                <Picture
                    fluid={fluid}
                    title={props.title}
                    style={absoluteStyle}
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
                :global(.imgContainer > .gatsby-image-wrapper > picture):hover {
                    opacity: 0;
                }
            }
            `}</style>
        </a>
    );
};

export default ReImg;