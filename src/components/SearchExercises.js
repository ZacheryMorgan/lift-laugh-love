import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

import { apiData } from "../utils/apiData";
import DropdownExercises from "./DropdownExercises";

const SearchExercises = ({ setExercises }) => {
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
    if (!bodyPartSearch && !targetSearch && !equipmentSearch) {
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
          (exercise.target.toLowerCase().includes(targetSearch) &&
            targetSearch) ||
          (exercise.equipment.toLowerCase().includes(equipmentSearch) &&
            equipmentSearch) ||
          (exercise.bodyPart.toLowerCase().includes(bodyPartSearch) &&
            bodyPartSearch)
      );
    }
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
    </Stack>
  );
};

export default SearchExercises;
