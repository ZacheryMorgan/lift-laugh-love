import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!search) {
      return;
    }

    // const exerciseData = await fetchData()
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        mb="50px"
        textAlign="center"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            bgcolor: "#fff",
            input: { fontWeight: "700", border: "none" },
            width: {
              lg: "850px",
              xs: "350px",
            },
          }}
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            position: "absolute",
            right: "0",
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            height: "56px",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
