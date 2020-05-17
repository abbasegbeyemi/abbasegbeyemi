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
                    <a href="https://www.linkedin.com/in/abbasegbeyemi" target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                    <a href="https://github.com/abbasegbeyemi" target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="https://twitter.com/sheybass" target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href="mailto:abbasegbeyemi@gmail.com?subject=Enquiry&body=Hello."
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default App;
