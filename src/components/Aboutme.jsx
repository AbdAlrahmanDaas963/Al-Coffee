import React from "react";

import { Stack, Box } from "@mui/material";
import useScreenSize from "../utils/useScreenSize";

function AboutCard({ title, desc }) {
  const { isSmall } = useScreenSize();

  return (
    <Stack
      sx={{
        width: isSmall ? "90%" : "100%",
        minHeight: "250px",
        backgroundColor: "var(--porsche)",
        color: "var(--dark-blue)",
        borderRadius: "20px",
        margin: "10px",
        padding: "30px",
      }}
      justifyContent={"space-between"}
    >
      <Box fontSize={"30px"}>{title}</Box>
      <Box>{desc}</Box>
    </Stack>
  );
}

function Aboutme() {
  const { isSmall } = useScreenSize();

  return (
    <Stack alignItems={"center"}>
      <Box sx={{ color: "var(--porsche)", margin: "50px 0" }} fontSize={"40px"}>
        ABOUT ME
      </Box>
      <Stack
        sx={{ width: "100%" }}
        direction={isSmall ? "column" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <AboutCard
          title={"Education"}
          desc={
            "For the past two years, I've been on a dedicated self-learning path, specializing in front-end development using cutting-edge technologies. My expertise includes harnessing the power of React to build dynamic and responsive user interfaces that seamlessly translate design concepts into intuitive web applications. Additionally, I've delved into the world of React Native, venturing into mobile app development to broaden my skill set."
          }
        />
        <AboutCard
          title={"Skills"}
          desc={
            "I'm on the verge of graduating with a degree in Information Technology Engineering, providing me with a robust academic foundation for understanding the intricacies of web technologies. This educational background has not only equipped me with theoretical knowledge but has also complemented my hands-on experience, enabling me to approach development challenges with a well-rounded perspective."
          }
        />
      </Stack>
    </Stack>
  );
}

export default Aboutme;
