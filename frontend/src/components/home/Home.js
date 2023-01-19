import React, { Fragment } from "react";
import Navigation from "../layout/Navigation.js";
import Reviews from "./Reviews.js";
import About from "./About.js";
import "animate.css/animate.min.css";
import Terms from "./Terms.js";
function Home() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Reviews></Reviews>
      <About></About>
      <Terms></Terms>
    </Fragment>
  );
}

export default Home;
