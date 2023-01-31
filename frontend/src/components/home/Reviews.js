import React from "react";
import styles from "./reviews.module.css";
import image from "../../assets/images/user4.jpg";
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";
import Container from "../UI/Container.js";
// import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
function Reviews() {
  return (
    <Container id="reviews-container">
      <h2>WHAT PEOPLE SAY ABOUT US</h2>

      <div className={styles["reviews-people"]}>
        <div>
          <img src={image} alt="user" />
          <h3>ALEXANDER THUNDER</h3>
          <p>
            I am just in love with the concept of providing social media handles
            on match...... I mean its such a nice thing to have the person's
            other handles to connect with them and talk with them on whichever
            platform we want.
          </p>
        </div>
        <div>
          <img src={image1} alt="user" />
          <h3>SAM CURRAN</h3>
          <p>
            I have never seen such a wonderful website in australia, the
            features it provides and everyone is treated at the same level is
            just amazing, also I love the feature to search people according to
            hobby....I found my cricketer girlfriend throught it!!
          </p>
        </div>
        <div>
          <img src={image2} alt="user" />
          <h3>J FLA</h3>
          <p>
            Married around 2 years ago, I have a kid 7 months old, I am enjoying
            a very happy life with my loving husband... This all could not have
            been possible without this website.
          </p>
        </div>
        <div>
          <img src={image3} alt="user" />
          <h3>NORA CURRAN</h3>
          <p>
            I always wanted to date an International cricketer... I found my
            partner same all because I dated him after finding a match with him
            on this site... We are also working to bring this site to
            Australia..
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Reviews;
