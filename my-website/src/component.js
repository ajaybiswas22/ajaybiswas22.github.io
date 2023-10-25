import './App.css';
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";


const BackgroundImagePage = () => {
    return <div className="bg" />;
};

const SocialFlow = () => {
  return (
    <div>
      <li>
        <a
          href="https://www.youtube.com/@journeyofajay"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ajay._.biswas"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ajaybiswas22/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://github.com/ajaybiswas22" className="github social">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </li>
    </div>
  );
}

export { BackgroundImagePage, SocialFlow};
