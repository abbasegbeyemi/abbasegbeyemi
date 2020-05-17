import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Personal Website for Dr Abbas Egbeyemi.
                </p>
                <div className="contact-button">
                    <span><FontAwesomeIcon icon={faExternalLinkAlt}/> Contact me </span>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
            </header>
        </div>
    );
}

export default App;
