import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../utils/apiData";
import { Stack, Typography, Fab } from "@mui/material";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/dumbbell.png";
import BodyPartImage from "../assets/icons/body.png";

import { fetchData, youtubeOptions } from "../utils/fetchData";
import ExerciseVideo from "../components/ExerciseVideo";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import { Link as ScrollLink } from "react-scroll";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  const currentWorkout = apiData.filter((exercise) => exercise.id === id);
  const { bodyPart, gifUrl, target, equipment, name } = currentWorkout[0];

  useEffect(() => {
    const fetchVideoData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/search";
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}?query=${name}`,
        youtubeOptions
      );
      setRelatedVideos([
        exerciseVideosData.contents[0].video,
        exerciseVideosData.contents[1].video,
        exerciseVideosData.contents[2].video,
        exerciseVideosData.contents[3].video,
      ]);
    };

    fetchVideoData();
  }, [name]);

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

  const imageStyling = {
    boxShadow: "6px 6px 6px #1a1c1d",
    borderRadius: "7px",
  };

  const relatedVideosElements = relatedVideos.map((video, index) => (
    <ExerciseVideo
      key={index}
      thumbnail={video.thumbnails[0].url}
      publishedTimeText={video.publishedTimeText}
      title={video.title}
      videoId={video.videoId}
      style={imageStyling}
    ></ExerciseVideo>
  ));

  return (
    <div>
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
          marginBottom: {
            xs: "25px",
            lg: "50px",
          },
        }}
      >
        <img
          style={imageStyling}
          className="detail-image"
          src={gifUrl}
          alt={`${name}`}
        />
        <Stack
          direction="column"
          gap="40px"
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
            <ScrollLink
              activeClass="active"
              to="videos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              sx={{ width: "fit-content" }}
            >
              <Fab
                variant="extended"
                color="primary"
                sx={{
                  width: "fit-content",
                }}
              >
                <ArrowCircleDownIcon sx={{ mr: 1 }} />
                Find Videos
              </Fab>
            </ScrollLink>
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
      <Typography
        textAlign="center"
        fontWeight="600"
        fontSize="36px"
        textTransform="capitalize"
        marginBottom="25px"
        marginTop="40px"
      >
        Watch videos for {name}
      </Typography>
      {relatedVideos.length === 0 ? (
        <Typography textAlign="center" fontWeight="600" fontSize="36px">
          Videos Loading...
        </Typography>
      ) : (
        <Stack
          justifyItems="center"
          id="videos"
          display="grid"
          rowGap="30px"
          columnGap="8px"
          sx={{
            gridTemplateColumns: {
              xs: "1fr",
              lg: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            },
          }}
        >
          {relatedVideosElements}
        </Stack>
      )}
    </div>
  );
};

export default ExerciseDetail;
