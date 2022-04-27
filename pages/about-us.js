import { Stack, Typography } from "@mui/material";
import React from "react";

const aboutUs = () => {
  return (
    <Stack padding="30px" justifyContent="center" alignItems="center">
      <Stack>
        <Typography variant="h3">Who we are?</Typography>
        <Typography>
          We are 13 student/developer who is ready to develop and create value
        </Typography>
      </Stack>
    </Stack>
  );
};

export default aboutUs;
