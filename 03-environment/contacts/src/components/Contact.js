import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
  }

  handleMouseOver = (event) => {
    let currentImg = event.target;
    if (this.state.isOpened) {
      currentImg.setAttribute('title', 'Click to hide extra info');
    } else {
      currentImg.setAttribute('title', 'Click to show extra info')
    }
  };

  handleClick = (event) => {
    event.target.parentElement.classList.toggle('image-container--small');

    this.setState({
      isOpened: !(this.state.isOpened)
    });
  };

  render() {
    let extraInfoBlock = '';

    if (this.state.isOpened) {
      extraInfoBlock =
          <div className="contact__info--extra">
            <div className="contact__transform"> {this.props.transform} </div>
            <div className="contact__power"> {this.props.power} </div>
          </div>
    }

    return (
        <li className="contact">
          <div className="image-container image-container--small" onClick={this.handleClick}>
            <img className="contact__image"
                 src={this.props.image}
                 width="50px"
                 height="100px"
                 alt={this.props.name}
                 onMouseOver={this.handleMouseOver}
            />
          </div>
          <div className="contact__info">
            <div className="contact__name"> {this.props.name} </div>
            <div className="contact__number"> {this.props.phoneNumber} </div>
            {extraInfoBlock}
          </div>
        </li>
    )
  }
}

export default Contact;