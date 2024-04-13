import React from "react";

import { Stack, Box } from "@mui/material";

import useScreenSize from "../utils/useScreenSize";
import MyButton from "./common/MyButton";

import data from "../data/index";

function Tool({ title }) {
  return (
    <Box
      sx={{
        border: "1px solid var(--dark-blue)",
        borderRadius: "20px",
        margin: "5px 10px 0 0",
        fontSize: "15px",
        padding: "5px 7px",
      }}
    >
      {title}
    </Box>
  );
}

function MyworkCard({ title, tools, img, demoLink }) {
  const { isSmall } = useScreenSize();

  return (
    <Stack
      sx={{
        borderRadius: "20px",
        backgroundColor: "var(--porsche)",
        color: "var(--dark-blue)",
        width: "300px",
        minHeight: "500px",
        marginBottom: "20px",
      }}
    >
      <Box fontSize={"20px"} sx={{ padding: "30px", minHeight: "156px" }}>
        <Box fontWeight={"500"}>{title}</Box>
        <Stack direction={"row"} flexWrap={"wrap"}>
          {tools.map((item, index) => (
            <Tool key={index} title={item} />
          ))}
        </Stack>
      </Box>
      <img
        src={img}
        alt=""
        // width="300px"
        height="300px"
        style={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      />
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          padding: "20px ",
        }}
      >
        <MyButton title={"demo"} />
      </Stack>
    </Stack>
  );
}

function Myworks() {
  const { isSmall } = useScreenSize();

  return (
    <Stack alignItems={"center"}>
      <Box sx={{ color: "var(--porsche)", margin: "50px 0" }} fontSize={"40px"}>
        MY WORKS
      </Box>
      <Stack
        sx={{ width: "100%", padding: isSmall ? "0" : "0 100px" }}
        direction={isSmall ? "column" : "row"}
        alignItems={isSmall ? "center" : "flex-start"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
      >
        {data.map((item, index) => (
          <MyworkCard
            key={index}
            title={item.title}
            tools={item.tools_used}
            img={item.img}
            demoLink={item.demo_link}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default Myworks;
