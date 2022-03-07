import { Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar/AppBar";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "4 March 2022",
    cardTitle: "Ikbal Tech",
    //url: "http://www.history.com",
    cardSubtitle: "Ikbal Tech was founded",
    cardDetailedText:
      "Ikbal Tech created and founded with all those 13 members.",
    media: {
      name: "Ikbal Tech",
      source: {
        url: "https://avatars.githubusercontent.com/u/101148714?s=400&u=65680e9b320245e34748dfcf9cfddf5d374003fb&v=4",
      },
      type: "IMAGE",
    },
  },
  {
    title: "8 March 2022",
    cardTitle: "Ikbal Tech Github Page",
    cardSubtitle: "Ikbal Tech Github Organization Page Created",
    cardDetailedText:
      "First Repo Created to keep all source code in one place.",
    url: "https://github.com/Ikbal-Tech",
  },
];

const timeline = () => {
  return (
    <Stack padding="30px">
      <Typography textAlign="center">Timeline</Typography>
      <Stack>
        <Chrono cardHeight={100} items={items} mode="VERTICAL_ALTERNATING" />
      </Stack>
    </Stack>
  );
};

export default timeline;
