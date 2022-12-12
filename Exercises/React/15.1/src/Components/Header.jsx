import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div
      style={{
        backgroundColor: "pink",
        color: "white",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/products" style={{ textDecoration: "none" }}>
        <h3>Products</h3>
      </Link>
      <Link to="/">
        <h3> Home</h3>
      </Link>
    </div>
  );
}

export default Header;
