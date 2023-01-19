import React, { Fragment } from "react";
import Navigation from "../layout/Navigation.js";
import Reviews from "./Reviews.js";
function Home() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Reviews></Reviews>
    </Fragment>
  );
}

export default Home;
