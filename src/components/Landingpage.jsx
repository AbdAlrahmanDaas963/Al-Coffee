import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import useScreenSize from "../utils/useScreenSize";

function TabBtn() {
  return (
    <Stack direction={"row"} sx={{ margin: "0 6px" }}>
      <div>LinkedIn</div>
      <ArrowOutwardIcon fontSize="small" />
    </Stack>
  );
}
function Landingpage() {
  const { isSmall, isMedium, isLarge } = useScreenSize();

  return (
    <Stack
      sx={{
        padding: isSmall ? "0" : "10px",
        height: "100vh",
        minHeight: "500px",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "var(--light-blue)",
          borderRadius: isSmall ? "0" : "10px",
          height: "100%",
          padding: "30px",
        }}
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* header */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack>AL-Coffee</Stack>
          <Stack direction={"row"}>
            <TabBtn />
            <TabBtn />
            <TabBtn />
          </Stack>
          <Stack>lets talk</Stack>
        </Stack>
        {/* content */}
        <Stack>
          <div style={{ fontSize: "60px" }}>
            I create <span style={{ color: "#E37239" }}>beautiful</span> <br />
            experiences
          </div>
          <div>
            I work with people all over the world to create
            <br /> tailor-made Webflow experiences
          </div>
        </Stack>
        {/* foot */}
        <Stack width={"100%"}>Available for freelance work</Stack>
      </Stack>
    </Stack>
  );
}

export default Landingpage;
