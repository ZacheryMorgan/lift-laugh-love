import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner2.jpg";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      p="20px"
      display="flex"
      flexDirection="column"
      gap="15px"
      sx={{
        mt: {
          lg: "130px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
    >
      {/* <Typography color="#fff" fontWeight="600" fontSize="26px">
        Team Big
      </Typography> */}
      <Typography
        fontWeight="700"
        mb="23px"
        mt="30px"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
      >
        Lift, Laugh, Love
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Search over 1,000 exercises by <br /> target muscle or equipment
        required.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Each exercise comes with an example image <br /> and multiple videos.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5478d2",
          padding: "10px",
          width: "fit-content",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#5478d2"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
