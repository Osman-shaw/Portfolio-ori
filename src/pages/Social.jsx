import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const social =() => {

    return (
        <div className="social__icon">
         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faTwitter} className="main__fontIcon"/>
        </a>
        <a href="https://github.com/Osman-shaw" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faGithub} className="main__fontIcon"/>
        </a>
       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="main__fontIcon" />
      </a>
        </div>

    )
}

export default social;