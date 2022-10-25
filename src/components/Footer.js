import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        paddingTop: "25px",
      }}
    >
      <span>Designed by Zachery Morgan </span>
      <a href="https://github.com/ZacheryMorgan" style={{ color: "white" }}>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default Footer;
