import React, {Component} from 'react';   // component imported but not used warning
import PropTypes from 'prop-types';       // moved to 'prop-types' after v15.5 
import './App.css';                       // stylesheet

class ContactCard extends React.Component{

  render(){
    
    const emailLink = "mailto:" + this.props.email;
    return(
    <div className = "card-display">

        <div id= "card-header"> {this.props.name}</div>
        <div className = "label-layout" id= "footer-start"> {this.props.mobileNumber}</div>
        <div className = "label-layout"> {this.props.workNumber}</div>
        <div className = "label-layout"> <a href = {emailLink}>{this.props.email} </a></div>

    </div>
    );
  }
}

// React component that creates three cards and calls ContactCard for rendering
class CreateCards extends React.Component{

  render(){
    return(
      <div className= "card-layout">
        <ContactCard name= "Edgar Allan Pug" mobileNumber ="(347)123-456" workNumber = "(123)456-789" email = "this.oopsie@gmail.com"/>
        <ContactCard name= "Gloria Borger" mobileNumber ="(399)399-399" email = "clap.clap@gmail.com"/>
        <ContactCard name= "Poppy Harlow" mobileNumber ="(347)123-456" workNumber = "(800)010-789" email = "original.content@gmail.com"/>
      </div>
    );
  }
}


// checks the data types of props and if required or not
// does not affect compilation but gives warnings in console
ContactCard.propTypes = {

  name: PropTypes.string.isRequired,
  mobileNumber: PropTypes.string.isRequired,
  workNumber: PropTypes.string,
  email: PropTypes.string.isRequired 
};

// CreateCards is the parent of ContactCard
export default CreateCards;