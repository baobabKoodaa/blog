import PropTypes from "prop-types";
import React from "react";
import Seo from "../components/Seo"
import View from "../components/Blog/View.js";
import { GlobalStateContext } from "../components/GlobalState/GlobalState.js"
import { ThemeContext } from "../layouts";

/** Template for "home" page with infinite scroll and fallback to pagination. */
class IndexPage extends React.Component {

  render() {

    return (
      <GlobalStateContext.Consumer>
        {g => (
            <React.Fragment>
              <ThemeContext.Consumer>
                {theme =>
                  <React.Fragment>
                    <Seo pageTitle="Blog home"/>
                    <View globalState={g} pageContext={this.props.pageContext} theme={theme} />
                  </React.Fragment>
                }
              </ThemeContext.Consumer>
            </React.Fragment>
        )}
      </GlobalStateContext.Consumer>
    );
  }
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default IndexPage;