import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

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
        <a href="#search" style={{ textDecoration: "none", color: "#fff" }}>
          Search
        </a>
        <a href="#exercises" style={{ textDecoration: "none", color: "#fff" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
