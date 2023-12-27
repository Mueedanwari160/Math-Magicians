import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <h1>Math Magicians</h1>
      </a>
      <div id="links">
        <a href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/quote">Quote Of The Day</a>
      </div>
    </nav>
  );
};

export default Navbar;
