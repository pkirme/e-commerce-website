import React from "react";
import { NavLink } from "react-bootstrap";

const HeadingHome = () => {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "#A57E85",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        fontSize: "50px",
      }}
    >
      <NavLink
        href="/"
        style={{
          border: "solid 2px #5FD9EE",
          borderRadius: "15px",
          color: "#E1E7F0",
        }}
      >
        Get our Latest Album
      </NavLink>
    </div>
  );
};

export default HeadingHome;
