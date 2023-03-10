import "./App.css";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Home from "./components/home/Home.js";
import UserMenu from "./components/user/UserMenu.js";
import Footer from "./components/layout/Footer.js";
import axios from "axios";
axios.defaults.withCredentials = true;
// import jscookie from "js";
function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  // const getCookie = async () => {
  //   try {
  //     const cookie = await axios.get("http://localhost:4000/user/getCookie", {
  //       withCredentials: true,
  //     });
  //     return cookie;
  //   } catch (e) {
  //     return e.response.data.message;
  //   }
  // };
  // useEffect(() => {
  //   const cookies = getCookie();
  //   // console.log(cookies.token);
  // });
  const checkerHandler = async () => {
    try {
      const cookiee = await axios.get(
        "http://localhost:4000/user/interestedIn",
        {
          withCredentials: true,
        }
      );
      console.log(cookiee.data);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
  const isLoggedIn = useSelector((state) => state.loginState.login);
  return (
    <div className="App">
      <button onClick={checkerHandler}> checker</button>
      {isLoggedIn ? <UserMenu></UserMenu> : <Home></Home>}
      <Footer></Footer>
    </div>
  );
}

export default App;
