import React from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../utils/apiData";
import { Stack, Typography } from "@mui/material";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/dumbbell.png";
import BodyPartImage from "../assets/icons/body.png";

const ExerciseDetail = () => {
  const { id } = useParams();

  const currentWorkout = apiData.filter((exercise) => exercise.id === id);
  const { bodyPart, gifUrl, target, equipment, name } = currentWorkout[0];

  const workoutStyling = {
    fontWeight: 500,
    fontSize: "25px",
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };

  const iconStyling = {
    background: "#dbb08ad0",
    padding: "20px",
    borderRadius: "100px",
    height: "90px",
    width: "90px",
  };

  return (
    <Stack
      direction="column"
      marginTop="20px"
      paddingTop="75px"
      justifyContent={"center"}
      sx={{
        flexDirection: {
          md: "row",
        },
        alignItems: {
          xs: "center",
          lg: "flex-start",
        },
        gap: {
          xs: "0px",
          md: "25px",
          lg: "45px",
        },
      }}
    >
      <img className="detail-image" src={gifUrl} alt={`${name}`} />
      <Stack
        direction="column"
        gap="120px"
        sx={{
          alignSelf: {
            lg: "flex-start",
          },
          transform: {
            xs: "scale(.8)",
            lg: "scale(1)",
          },
          margin: {
            xs: "-25px 0px 0px 0px",
            lg: "0px 45px 0px 5px",
          },
          flowGrow: {
            lg: "1",
          },
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: {
              xs: "40px",
              lg: "64px",
            },
          }}
        >
          {name}
        </Typography>
        <Stack gap="60px">
          <Typography sx={workoutStyling}>
            <div style={iconStyling}>
              <img src={BodyPartImage} alt="Body Part" height="50px" />
            </div>
            {bodyPart}
          </Typography>
          <Typography sx={workoutStyling}>
            <div style={iconStyling}>
              <img src={TargetImage} alt="Body Part" height="50px" />
            </div>
            {target}
          </Typography>
          <Typography sx={workoutStyling}>
            <div style={iconStyling}>
              <img src={EquipmentImage} alt="Body Part" height="50px" />
            </div>
            {equipment}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExerciseDetail;
