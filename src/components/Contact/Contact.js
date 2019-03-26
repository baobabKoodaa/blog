/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import React from "react";

import config from "../../../content/meta/config";
import theme from "../../theme/theme.yaml";

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "", // honeypot
      emailReal: "",
      message: "",
      honeypot: ""
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
    if (this.state.email != "") return // honeypot

    const b = document.getElementById("submitButton")
    b.disabled = true
    b.value = "Sending..."
    b.style.transition = "200ms ease-in-out"
    b.style.backgroundColor = theme.color.brand.primaryLight
    b.style.borderColor = theme.color.brand.primaryLight
    b.style.color = "#666"

    fetch(config.contactPostAddress, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        alert("Error while submitting form! " + e)
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="form">
        <form
          name="contact"
          method="post"
          action={config.contactPostAddress}
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
          <input
            type="submit"
            value="Submit"
            id="submitButton"
            className="formItem" 
          />
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
    );
  }
};

export default Contact;
