import React from "react";

import { Stack, Box } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function TabBtn() {
  return (
    <Stack direction={"row"} sx={{ margin: "0 6px" }}>
      <div>LinkedIn</div>
      <ArrowOutwardIcon fontSize="small" />
    </Stack>
  );
}

function Footer() {
  return (
    <Stack
      sx={{
        backgroundColor: "var(--light-blue)",
        height: "100vh",
        minHeight: "500px",
        padding: "30px",
        marginTop: "50px",
      }}
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {/* header */}
      <Box>Al-coofee</Box>
      {/* content */}
      <Stack gap={"20px"}>
        <Box fontSize={"30px"}>
          Interested in <br />
          working together?
        </Box>
        <Stack direction={"row"}>
          <TabBtn />
          <TabBtn />
          <TabBtn />
        </Stack>
      </Stack>
      {/* foot */}
      <Stack>
        <Box>Available for freelance work</Box>
        <Box>©2024 – All Rights Reserved</Box>
      </Stack>
    </Stack>
  );
}

export default Footer;
