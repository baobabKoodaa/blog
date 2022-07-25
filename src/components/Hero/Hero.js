import React, { useState, useEffect, useRef } from 'react'
import PropTypes from "prop-types";
import { StaticQuery , graphql } from "gatsby";
import { FaArrowDown } from "react-icons/fa/";
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min'

const Hero = props => {
  const theme = props.theme

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#3D289D',
        shininess: 40.00,
        waveHeight: 20,
        waveSpeed: 0.25,
        zoom: 0.65,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  // Scroll to content arrow
  const separator = React.createRef();
  const scrollToContent = e => {
    separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <section className="hero" ref={myRef}>
        <h1>
          Explore my corner of the internet
        </h1>
        <p>
          I blog about geeky stuff &#38; software I've written
        </p>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
      </section>
      <hr id="heroEndMarker" ref={separator} />
      <svg id="drip" viewBox="0 0 1440 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%"/>
            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%"/>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 0px)', opacity:1 }}
          fill="url(#sw-gradient-0)"
          d="M0,80L10,78.3C20,77,40,73,60,65C80,57,100,43,120,43.3C140,43,160,57,180,63.3C200,70,220,70,240,60C260,50,280,30,300,25C320,20,340,30,360,38.3C380,47,400,53,420,53.3C440,53,460,47,480,36.7C500,27,520,13,540,15C560,17,580,33,600,48.3C620,63,640,77,660,81.7C680,87,700,83,720,83.3C740,83,760,87,780,78.3C800,70,820,50,840,50C860,50,880,70,900,70C920,70,940,50,960,38.3C980,27,1000,23,1020,28.3C1040,33,1060,47,1080,56.7C1100,67,1120,73,1140,73.3C1160,73,1180,67,1200,60C1220,53,1240,47,1260,45C1280,43,1300,47,1320,48.3C1340,50,1360,50,1380,53.3C1400,57,1420,63,1430,66.7L1440,70L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"
        />
      </svg>

      <style jsx>{`
        #heroEndMarker {
          margin: 0;
          border: 0;
        }
        #drip {
          transform: translateY(-40px);
          height: 41px;
          width: 100%;
        }
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: calc(100vh + 40px);
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.s};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
        }

        p {
          text-align: center;
          font-size: ${theme.font.size.s};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
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
            transition: 0.3s;
          }
        }

        button:hover :global(svg) {
          transform: scale(1.3);
        }

        @from-width tablet {

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}
      </style>
    </React.Fragment>
  )
};

Hero.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Hero;
