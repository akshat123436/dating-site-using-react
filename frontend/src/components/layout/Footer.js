import React from "react";
import styles from "./Footer.module.css";
import instaIcon from "../../assets/images/instagram-1-svgrepo-com.svg";
import linkedinIcon from "../../assets/images/linkedin-svgrepo-com.svg";
import githubIcon from "../../assets/images/github-svgrepo-com.svg";
function Footer() {
  return (
    <footer className={styles.footerDiv}>
      <div className={styles.websiteName}>
        <h2>SOMEONE FOR EVERYONE</h2>
        <h4>Made with &#10084; by Akshat</h4>
      </div>
      <div>
        <h3>Follow me on : </h3>
        <h5>
          <a href="https://www.linkedin.com/in/akshat123436/">
            Linkdin <img src={linkedinIcon} alt="" />
          </a>
        </h5>
        <h5>
          <a href="https://www.instagram.com/akshat123436/">
            Instagram <img src={instaIcon} alt="" />
          </a>
        </h5>
        <h5>
          <a href="github.com/akshat123436/">
            Github <img src={githubIcon} alt="" />
          </a>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
