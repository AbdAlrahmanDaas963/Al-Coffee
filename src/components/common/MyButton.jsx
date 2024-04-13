import React from "react";

import { Button } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function MyButton({ title }) {
  return (
    <Button
      sx={{
        width: "100px",
        border: "1px solid var(--dark-blue)",
        borderRadius: "20px",
        color: "var(--dark-blue)",
        padding: "7px 5px",
      }}
      endIcon={<ArrowOutwardIcon />}
    >
      {title}
    </Button>
  );
}

export default MyButton;
