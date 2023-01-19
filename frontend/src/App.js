import "./App.css";
import { useState } from "react";
import Home from "./components/home/Home.js";
import UserMenu from "./components/user/UserMenu.js";
import Footer from "./components/layout/Footer.js";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <UserMenu></UserMenu> : <Home></Home>}
      <Footer></Footer>
    </div>
  );
}

export default App;
