import React from "react";
import Container from "../UI/Container";
import styles from "./About.module.css";
function About() {
  return (
    <Container id="about-container">
      <div className={styles["about-div"]}>
        <h2>ABOUT US</h2>
        <p>
          Someone for everyone was made as an initiative to help people find
          someone for them.... Someone might be a loving partner, friend,
          roommate, collegue, buddy anything....
        </p>
        <p>
          In this busy world although we may have everthing, but the loneliness
          we face is something that can't be overcome from materialistic things,
          we all need someone in our life to talk, to love, to share our
          feelings, to care..
        </p>
        <p>
          I have developed "Someone for everyone" in an effort to faciliate
          others to find their Someone. Hope you will love this site and find
          your someone!!!
        </p>
      </div>
    </Container>
  );
}

export default About;
