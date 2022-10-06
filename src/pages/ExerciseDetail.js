import React from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../utils/apiData";
import { Stack, Typography } from "@mui/material";

const ExerciseDetail = () => {
  const { id } = useParams();

  const currentWorkout = apiData.filter((exercise) => exercise.id === id);
  const { bodyPart, gifUrl, target, equipment, name } = currentWorkout[0];
  console.log(bodyPart, gifUrl, target, equipment, name);

  const workoutStyling = {
    fontWeight: 400,
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
  };

  return (
    <Stack direction="column" alignItems="center" paddingTop="75px">
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: 28,
        }}
      >
        {name}
      </Typography>
      <img
        src={gifUrl}
        alt={`${name}`}
        width="fit-content"
        style={{
          margin: 25,
        }}
      />
      <Stack direction="row" gap="50px">
        <Typography sx={workoutStyling}>
          Body Part <br />
          {bodyPart}
        </Typography>
        <Typography sx={workoutStyling}>
          Target <br />
          {target}
        </Typography>
        <Typography sx={workoutStyling}>
          Equipment <br />
          {equipment}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ExerciseDetail;
