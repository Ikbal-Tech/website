import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const TeamMember = ({ path, name }) => {
  return (
    <Stack
      height="300px"
      width="250px"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        borderRadius: "20px",
        background: "#f5f5f5",
      }}
    >
      <Avatar
        src={path}
        sx={{
          width: "150px",
          height: "150px",
        }}
      />
      <Typography fontWeight="bold">{name}</Typography>
    </Stack>
  );
};

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
          Our Team
        </Typography>

        <Stack
          flexDirection="row"
          flexWrap="wrap"
          margin="0 auto"
          gap={2}
          sx={{
            width: "60%",
          }}
        >
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
          <TeamMember path="/images/team/Abdullah_Yigit.jpeg" name="domates" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default aboutUs;
