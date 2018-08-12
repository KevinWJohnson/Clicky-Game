import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: "green",
    justifyContent: "flex-end"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <a href="/">Welcome</a>

<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Clicky Game</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{clickMessage}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Score: {score}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Top Score: {topScore}</a>
      </li>
    </ul>
  </div>




  </nav>
);

export default Navbar;
