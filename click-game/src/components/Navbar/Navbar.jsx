import React from "react";

function Navbar({ message, score, topScore }) {
    return (
      <nav className="navbar">
        <div
          id="animate-this"
          className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center navbar-left"
        >
          {message}
        </div>
        <div className="logo navbar-center text-center">
          <a
            className="nav-calc-font navbar-center p-0 m-0 title-line-hgt"
            href="/"
          >
            GAME OF THRONES: <br />
            MEMORY GAME
          </a>
        </div>
        <div className="scoreboard navbar-right">
          SCORE: {score} | TOP SCORE: {topScore}
        </div>
      </nav>

      
    );
}

export default Navbar;