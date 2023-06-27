import React from "react";
import logo from "../Images/furry-credentials-low-resolution-logo-color-on-transparent-background.png";
import NavBar from "./Components/nav";
import Main from "./Components/main";

function Home() {
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div>
        <Main />
      </div>
    </>
  );
}

export default Home;
