import React, { Fragment } from "react";
import Navigation from "../layout/Navigation.js";
import Reviews from "./Reviews.js";
import About from "./About.js";
function Home() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <About></About>
      <Reviews></Reviews>
    </Fragment>
  );
}

export default Home;
