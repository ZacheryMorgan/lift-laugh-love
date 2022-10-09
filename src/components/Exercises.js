import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";

import { apiData } from "../utils/apiData";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercises = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercises,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchBodyPartExercises = () => {
      if (bodyPart === "all") {
        setExercises(apiData);
      } else {
        const bodyPartExercises = apiData.filter(
          (exercise) => exercise.bodyPart === bodyPart
        );
        setExercises(bodyPartExercises);
      }
    };
    fetchBodyPartExercises();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      mt="50px"
      p="20px"
      sx={{
        mt: {
          lg: "110px",
        },
      }}
    >
      <Typography variant="h3" mb="46px">
        Search Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems="center">
        {exercises.length > 9 ? (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        ) : (
          exercises.length === 0 && (
            <Typography variant="h4">
              There are no exercises in this database for your selected
              searches.
            </Typography>
          )
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
