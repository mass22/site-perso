import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

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
          .then(() => alert("Message envoyé!"))
          .catch(error => alert(error));
      };

    render () {
         
        return(

            <div>
                <h1>Contact</h1>
                <p>
                    Vous avez un projet ? Une idée? Une offre d'emploi ? Ou simplement me demander comment ça va ? N'hésitez pas à m'envoyer un courriel !
                </p>
                <Form
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

                    <Form.Group widths='equal'>
                        <Form.Field id='form-input-control-first-name' control={Input} label='Votre nom' placeholder='John Doe' onChange={this.handleChange} required />
                        <Form.Field id='form-input-control-email' control={Input} label='Votre email:' placeholder='jdoe@company.com' onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Message:' placeholder="Bonjour, j'ai un job pour toi !" onChange={this.handleChange} required />
                    <Form.Field id='form-button-control-public' control={Button} content='Envoyer' inverted color='brown' />

                </Form>
            </div>
        )
    }
}


ContactPage.propTypes = propTypes

export default ContactPage
