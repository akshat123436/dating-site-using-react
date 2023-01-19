import React from "react";
import Container from "../UI/Container";
import styles from "./Terms.module.css";
function Terms() {
  return (
    <Container id="terms-container">
      <h2>TERMS AND CONDITIONS</h2>
      <div className={styles.termsDiv}>
        <ul>
          <li>You are at least 18 years of age.</li>
          <li>
            You are not a person who is barred from using the Service under the
            laws of India or any other applicable jurisdiction{" "}
          </li>
          <li>
            You will comply with this Agreement and all applicable local, state,
            national and international laws, rules and regulations
          </li>
          <li>
            You have never been convicted of a felony or indictable offense (or
            crime of similar severity), a sex crime, or any crime involving
            violence, and that you are not required to register as a sex
            offender with any state, federal or local sex offender registry.
          </li>
          <li>
            YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS.
            YOU UNDERSTAND THAT "SOMEONE FOR EVERYONE" DOES NOT CONDUCT CRIMINAL
            BACKGROUND CHECKS ON ITS MEMBERS OR OTHERWISE INQUIRE INTO THE
            BACKGROUND OF ITS MEMBERS. "SOMEONE FOR EVERYONE" MAKES NO
            REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OR COMPATIBILITY OF
            MEMBERS.
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Terms;
