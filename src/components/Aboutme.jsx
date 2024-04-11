import React from "react";

import { Stack } from "@mui/material";

function AboutCard() {
  return <div>card</div>;
}

function Aboutme() {
  return (
    <Stack>
      <div></div>
      <Stack>
        <AboutCard />
        <AboutCard />
      </Stack>
    </Stack>
  );
}

export default Aboutme;
