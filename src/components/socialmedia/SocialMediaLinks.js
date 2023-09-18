import React from "react";
import './SocialMediaLinks.css'

function SocialMediaLinks() {
  return (
    <div className="social-media-links">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
        LinkedIn
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        Instagram
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        Twitter
      </a>
    </div>
  );
}

export default SocialMediaLinks;
