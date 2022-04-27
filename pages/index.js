import { Button, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar/AppBar";

const index = () => {
  return (
    <Stack
      padding="30px"
      spacing={5}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1" textAlign="center">
        Ikbal Tech Home
      </Typography>
      <Button
        textAlign="center"
        href="/about-us"
        sx={{
          width: "50%",
        }}
      >
        <Typography variant="h3" textAlign="center">
          You can check our team from About Us Page
        </Typography>
      </Button>
      <Button
        textAlign="center"
        href="timeline"
        sx={{
          width: "50%",
        }}
      >
        <Typography variant="h3" textAlign="center">
          You can check our progress from Timeline Page
        </Typography>
      </Button>
    </Stack>
  );
};

export default index;
