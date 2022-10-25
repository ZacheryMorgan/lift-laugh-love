import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      px="20px"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
      }}
    >
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            borderBottom: "3px solid #5478d2",
          }}
        >
          Home
        </Link>
        {/* <a href="#search" style={{ textDecoration: "none", color: "#fff" }}>
          Search
        </a> */}
        {/* <ScrollLink
          activeClass="active"
          to="exercises"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}
        >
          Exercises
        </ScrollLink> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
