import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <div
        style={{
          backgroundColor: "#00000033",
        }}
      >
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      </div>
      <Stack direction="row" sx={{ paddingTop: "2px" }}>
        <Button
          sx={{
            ml: "32px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            textTransform: "capitalize",
            borderRadius: "20px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "32px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            textTransform: "capitalize",
            borderRadius: "20px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontSize="22px"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
