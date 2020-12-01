/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import React from "react";
import { StaticQuery, graphql } from "gatsby";

import theme from "../../theme/theme.yaml";

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "", // honeypot
      emailReal: "",
      message: "",
      human: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email != "") {
      // This is an invisible honeypot field. Only bots will fill it.
      return
    }
    if (this.state.human != "human") {
      // Humans might make an error with this field, advise them.
      alert("Bot check failed. Please write 'human' (without quotes) in the field just above the submit button, then try again.")
      return
    }

    const b = document.getElementById("submitButton")
    b.disabled = true
    b.value = "Sending..."
    b.style.transition = "200ms ease-in-out"
    b.style.backgroundColor = theme.color.brand.primaryLight
    b.style.borderColor = theme.color.brand.primaryLight
    b.style.color = "#666"

    fetch(this.contactPostAddress, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "contact",
        "javascript-detected": true,
        ...this.state 
      })
    })
      .then(function(rawResponse) {
        return rawResponse.json();
      })
      .then(function(response) {
        console.log(response)
        if (response.result == 'success') {
          console.log("Form submission success");
          navigate("/success");
        } else {
          console.error(response);
          alert("Server responded with error! Sorry about this.")
        }
      })
      .catch(error => {
        console.error(error);
        alert("Unable to deliver. Is your internet connection down?")
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <StaticQuery
      query={graphql`
        query ContactQuery {
          site {
            siteMetadata {
              contactPostAddress
            }
          }
        }
      `}
      render={ queryResults => {

        // It's very ugly to update this.contactPostAddress inside render(), but Gatsby currently
        // offers only two ways of using StaticQuery: this way (inside render), and as a React Hook
        // (which would be incompatible with a class component).
        const contactPostAddress = queryResults.site.siteMetadata.contactPostAddress
        this.contactPostAddress = contactPostAddress

        return (
          <>
            <div className="form">
              <form
                name="contact"
                method="post"
                action={contactPostAddress}
                onSubmit={this.handleSubmit}
                data-netlify="true"
              >
                <label className="formItem" >
                  Name (optional):<br/>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <br/><br/>
                <label className="formItem" >
                  E-mail (optional):<br/>
                  <input
                    type="email"
                    name="emailReal"
                    value={this.state.emailReal}
                    onChange={this.handleChange}
                  />
                </label>
                <br/><br/>
                <input
                  type="email"
                  name="email" // actually honeypot
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{display: "none"}}
                />
                <label className="formItem" >
                  Message:<br/>
                  <textarea
                    name="message"
                    required={true}
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </label>
                <br/><br/>
                <label className="formItem" >
                  If you are not a robot, then write "human" in this field:<br/>
                  <input
                    type="human"
                    name="human"
                    value={this.state.human}
                    onChange={this.handleChange}
                  />
                </label>
                <br/><br/>
                <input
                  type="submit"
                  value="Submit"
                  id="submitButton"
                  className="formItem" 
                />
                {contactPostAddress === "" && (
                  <h1>Undefined contactPostAddress!</h1>
                )}
              </form>

              {/* --- STYLES --- */}
              <style jsx>{`
                .formItem input,textarea {
                  width: 100%;
                  border-radius: 5px;
                  border-width: 2px;
                  font-family: Open Sans;
                  font-weight: 400;
                  font-size: 1em;
                }
                .formItem input {
                  height: 30px;
                  max-width: 300px;
                }
                .formItem textarea {
                  height: 100px;
                  max-width: 600px;
                }
                #submitButton {
                  color: white;
                  height: auto;
                  font-family: Open Sans;
                  font-size: 1.2em;
                  font-weight: 400;
                  padding: 0.5em 3em;
                  border-radius: 5px;
                  background: ${theme.color.brand.primary};
                  border: 1px solid ${theme.color.brand.primary};
                }
                #submitButton:hover {
                  background: ${theme.color.brand.primaryDark};
                  cursor: pointer;
                }
              `}</style>
            </div>
          </>
        )
      }}
      />
    )
  }
};

export default Contact;
