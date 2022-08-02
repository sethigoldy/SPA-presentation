import React from 'react';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/chat">Chat</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Header;
