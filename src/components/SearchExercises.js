import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { apiData, bodyPartsData } from "../utils/apiData";
import DropdownExercises from "./DropdownExercises";

const SearchExercises = ({ setExercises }) => {
  const [search, setSearch] = useState("");
  const [localApiData, setLocalApiData] = useState([]);

  const [bodyPartSearch, setBodyPartSearch] = useState("");
  const [equipmentSearch, setEquipmentSearch] = useState("");
  const [targetSearch, setTargetSearch] = useState("");

  useEffect(() => {
    setLocalApiData(apiData);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [bodyPartSearch, equipmentSearch, targetSearch]);

  const handleSearch = async () => {
    if (!search && !bodyPartSearch && !targetSearch && !equipmentSearch) {
      setExercises(localApiData);
      return;
    }
    let searchedExercises = "";

    if (bodyPartSearch && equipmentSearch && targetSearch) {
      searchedExercises = localApiData.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase().includes(bodyPartSearch) &&
          exercise.equipment.toLowerCase().includes(equipmentSearch) &&
          exercise.target.toLowerCase().includes(targetSearch)
      );
    } else if (targetSearch && equipmentSearch) {
      searchedExercises = localApiData.filter(
        (exercise) =>
          exercise.target.toLowerCase().includes(targetSearch) &&
          exercise.equipment.toLowerCase().includes(equipmentSearch)
      );
    } else if (bodyPartSearch && equipmentSearch) {
      searchedExercises = localApiData.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase().includes(bodyPartSearch) &&
          exercise.equipment.toLowerCase().includes(equipmentSearch)
      );
    } else if (bodyPartSearch && targetSearch) {
      searchedExercises = localApiData.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase().includes(bodyPartSearch) &&
          exercise.target.toLowerCase().includes(targetSearch)
      );
    } else {
      searchedExercises = localApiData.filter(
        (exercise) =>
          (exercise.name.toLowerCase().includes(search) && search) ||
          (exercise.target.toLowerCase().includes(targetSearch) &&
            targetSearch) ||
          (exercise.equipment.toLowerCase().includes(equipmentSearch) &&
            equipmentSearch) ||
          (exercise.bodyPart.toLowerCase().includes(bodyPartSearch) &&
            bodyPartSearch)
      );
    }
    setSearch("");
    setExercises(searchedExercises);
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
      id="search"
    >
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
        Search Exercises by Any Combination of Body Part, Target Muscle, or
        Equipment Required.
      </Typography>
      <DropdownExercises
        exercises={localApiData}
        setBodyPartSearch={setBodyPartSearch}
        setEquipmentSearch={setEquipmentSearch}
        setTargetSearch={setTargetSearch}
        setExercises={setExercises}
      />
      {/* Name search input and button */}
      {/* <Box position="relative" mb="72px" mt="25px">
        <Typography
          fontWeight="600"
          mb="40px"
          textAlign="center"
          sx={{
            fontSize: {
              lg: "35px",
              xs: "24px",
            },
          }}
        >
          Or Search Exercises by Name
        </Typography>
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
      </Box> */}
    </Stack>
  );
};

export default SearchExercises;
