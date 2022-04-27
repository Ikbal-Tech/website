import { Stack, Typography } from "@mui/material";
import React from "react";

const aboutUs = () => {
  return (
    <Stack
      padding="30px"
      justifyContent="center"
      alignItems="center"
      spacing={8}
    >
      <Stack>
        <Typography variant="h3" textAlign="center">
          Who we are?
        </Typography>
        <Typography textAlign="center">
          We are 13 student/developer who is ready to develop and create value
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="h3" textAlign="center">
          What are our goals?
        </Typography>
        <Typography textAlign="center">
          We want to build a perfect brain device to handle color with thinking.
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="h3" textAlign="center">
          FOTOLAR
        </Typography>
      </Stack>
    </Stack>
  );
};

export default aboutUs;
