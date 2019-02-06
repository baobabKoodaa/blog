import React from "react"
import { ThemeContext } from "../../layouts";
import { FaGithub, FaStackOverflow, FaLinkedin, FaYoutube } from 'react-icons/fa'

const WebPresenceIcons = () => {
    return (
        
        <React.Fragment>
            <ThemeContext.Consumer>
                {theme => (
                    <div className="wrapper">
                        <div className="icons">
                            <FaGithub/>
                            <FaStackOverflow/>
                            <FaLinkedin/>
                            <FaYoutube/>
                            {/* TODO Codeforces */}
                        </div>
                        <style jsx>{`
                        .wrapper {
                            text-align: center;
                        }
                        .icons {
                            display: inline-block;
                            font-size: 60px;
                            :global(svg) {
                                margin: 10px;
                                fill: ${theme.color.brand.primary};
                            }
                        }
                        `}</style>
                    </div>
                )}
            </ThemeContext.Consumer>
        </React.Fragment>
    );
};

export default WebPresenceIcons;