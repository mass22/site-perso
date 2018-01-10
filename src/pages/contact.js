import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";


import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object,
  }

  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
      handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }
    
      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
    
        e.preventDefault();
      };

    render () {
      
          
        return(

            <div>
                <h1>Contact</h1>
                <form
                name="contact"
                method="post"
                action="/merci/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                >
                <p hidden>
                    <label>
                    Don’t fill this out: <input name="bot-field" />
                    </label>
                </p>
                <p>
                    <label>
                    Votre nom:<br />
                    <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                    Votre email:<br />
                    <input type="email" name="email" onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                    Message:<br />
                    <textarea name="message" onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <button type="submit">Envoyer</button>
                </p>
                </form>
            </div>
        )
    }
}


ContactPage.propTypes = propTypes

export default ContactPage