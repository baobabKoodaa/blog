import React from "react";
import PropTypes from "prop-types";
import { StaticQuery , graphql } from "gatsby";
import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const theme = props.theme

  return (
    <StaticQuery
        query={graphql`
          query HeroBgQuery {
            bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
              resize(width: 1200, quality: 90, cropFocus: CENTER) {
                src
              }
            }
            bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
              resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
                src
              }
            }
            bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
              resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
                src
              }
            }
          }
        `}
        render={data => {

          // Scroll to content arrow
          const separator = React.createRef();
          const scrollToContent = e => {
            separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
          };

          const bgDesktop = data.bgDesktop.resize.src;
          const bgTablet = data.bgTablet.resize.src;
          const bgMobile = data.bgMobile.resize.src;

          return (
            <React.Fragment>
            <section className="hero">
              <h1>
                This is a demo site of&nbsp;the <strong>heroBlog</strong> GatsbyJS starter
              </h1>
              <button onClick={scrollToContent} aria-label="scroll">
                <FaArrowDown />
              </button>
            </section>
            <hr ref={separator} />
      
            {/* --- STYLES --- */}
            <style jsx>{`
              hr {
                margin: 0;
                border: 0;
              }
              .hero {
                align-items: center;
                background: ${theme.hero.background};
                background-image: url(${bgMobile});
                background-size: cover;
                color: ${theme.text.color.primary.inverse};
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                min-height: 100vh;
                height: 100px;
                padding: ${theme.space.inset.l};
                padding-top: ${theme.header.height.homepage};
              }
      
              h1 {
                text-align: center;
                font-size: ${theme.hero.h1.size};
                margin: ${theme.space.stack.l};
                color: ${theme.hero.h1.color};
                line-height: ${theme.hero.h1.lineHeight};
                text-remove-gap: both 0 "Open Sans";
      
                :global(strong) {
                  position: relative;
      
                  &::after,
                  &::before {
                    content: "›";
                    color: ${theme.text.color.attention};
                    margin: 0 ${theme.space.xs} 0 0;
                    text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
                  }
                  &::after {
                    content: "‹";
                    margin: 0 0 0 ${theme.space.xs};
                  }
                }
              }
      
              button {
                background: ${theme.background.color.brand};
                border: 0;
                border-radius: 50%;
                font-size: ${theme.font.size.m};
                padding: ${theme.space.s} ${theme.space.m};
                cursor: pointer;
                width: ${theme.space.xl};
                height: ${theme.space.xl};
      
                &:focus {
                  outline-style: none;
                  background: ${theme.color.brand.primary.active};
                }
      
                :global(svg) {
                  position: relative;
                  top: 5px;
                  fill: ${theme.color.neutral.white};
                  stroke-width: 40;
                  stroke: ${theme.color.neutral.white};
                  animation-duration: ${theme.time.duration.long};
                  animation-name: buttonIconMove;
                  animation-iteration-count: infinite;
                }
              }
      
              @keyframes buttonIconMove {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
                100% {
                  transform: translateY(0);
                }
              }
      
              @from-width tablet {
                .hero {
                  background-image: url(${bgTablet});
                }
      
                h1 {
                  max-width: 90%;
                  font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
                }
      
                button {
                  font-size: ${theme.font.size.l};
                }
              }
      
              @from-width desktop {
                .hero {
                  background-image: url(${bgDesktop});
                }
      
                h1 {
                  max-width: 80%;
                  font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
                }
      
                button {
                  font-size: ${theme.font.size.xl};
                }
              }
            `}</style>
          </React.Fragment>
          );
        }}
      />
  );
}

Hero.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Hero;
