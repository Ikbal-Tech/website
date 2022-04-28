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
  {
    title: "9 March 2022",
    cardTitle: "Discussion About First Project Ideas",
    cardSubtitle: "Finding two idea to offer",
    cardDetailedText:
      "First idea is about smoking, second idea is about health information. Smoking idea is based on hemoglobin. When a user smokes a lot, he/she's hemoglobin rates increases. We can measure it. Other idea is aims to calculate person's health condition and giving advice.",
  },
  {
    title: "12 March 2022",
    cardTitle: "Rejection of Ideas",
    cardSubtitle: "Rejected ideas from instructor",
    cardDetailedText:
      "Instructor does not like our ideas. He said, we should improve our ideas. He give some feedback about our idea and give some new ideas t to move on. After this failing, with receiving feedback, we decided to have a new meeting in following days.",
  },
  {
    title: "14 March 2022",
    cardTitle: "Discuss Future Plans",
    cardSubtitle: "After rejection, Meet up for future plans",
    cardDetailedText:
      "After rejection from instructor, we arrange new meeting and discuss about future plans. We found some ideas, but we decided to ask instructor before selecting those ideas.",
  },
  {
    title: "15 March 2022",
    cardTitle: "Consulting Instructor about Ideas",
    cardSubtitle: "Consulting about new ideas with our instructor",
    cardDetailedText:
      "Our instructor, does not like our new ideas too. So he proposed new idea to move on for us. We also should improve this idea to move on.",
  },
  {
    title: "16 March 2022",
    cardTitle: "Moving with new Idea",
    cardSubtitle: "Prepare More Detailed Report with New Idea",
    cardDetailedText:
      "We prepared more detailed report with our new idea. This idea is basically, coloring the given picture with brain signals. We think, we can get color codes from brain with focusing. After getting those signals from brain, it paints selected area to color that we think. We will have a mobile app that holds our pictures. This app will be communicate via bluetooth and connect mobile device with brain device. There is a gif that explains our demo above",
    media: {
      name: "Paintistic Demo",
      source: {
        url: "https://media4.giphy.com/media/Hh4DrfJDs1ej2TBh2j/giphy.gif?cid=790b761159e6d94853a081370f0e4e38d9567764a8d90d5b&rid=giphy.gif",
      },
      type: "IMAGE",
    },
  },
  {
    title: "25 March 2022",
    cardTitle: "Meeting for Task Distribution",
    cardSubtitle: "Team meeting for deciding who will do what?",
    cardDetailedText:
      "After sending our idea proposal and getting accepted from instructor. We divided our team to parts. One team for hardware, one team for mobile app and one team for data handling. But all team will work together, if a team fails everyone fails. So, a person should help other team if necessary.",
  },
  {
    title: "31 March 2022",
    cardTitle: "Meeting for Task Distribution",
    cardSubtitle: "Team meeting for deciding who will do what?",
    cardDetailedText:
      "After sending our idea proposal and getting accepted from instructor. We divided our team to parts. One team for hardware, one team for mobile app and one team for data handling. But all team will work together, if a team fails everyone fails. So, a person should help other team if necessary.",
  },
  {
    title: "7 April 2022",
    cardTitle: "Meeting for Products for buying",
    cardSubtitle: "Team meeting for deciding which products are essential?",
    cardDetailedText:
      "We meet up and argue about, which components, hardware parts should essential to buy. We decided the main parts and investigate some places where we can get those parts. We also decided to buy some components that we think are essential. There are some places to buy. We will look for those places if they are fitting for our expectations.",
  },
  {
    title: "7 April 2022",
    cardTitle: "Meeting for Products for buying",
    cardSubtitle: "Team meeting for deciding which products are essential?",
    cardDetailedText:
      "We meet up and argue about, which components, hardware parts should essential to buy. We decided the main parts and investigate some places where we can get those parts. We also decided to buy some components that we think are essential. There are some places to buy. We will look for those places if they are fitting for our expectations.",
  },
  {
    title: "14 April 2022",
    cardTitle: "Buy Hardware Parts",
    cardSubtitle: "Buying Decided Hardware Parts",
    cardDetailedText:
      "We buy decided hardware parts. They will arrive in 3-4 days hopefully and we will start to work on our project hardware part.",
  },
  {
    title: "22 April 2022",
    cardTitle: "Arriving for products",
    cardSubtitle: "Products Arrived and Ready to Start",
    cardDetailedText:
      "Our hardware parts were arrived. We decided to start our project hardware part in next week.",
  },
  {
    title: "25 April 2022",
    cardTitle: "First Tests for Hardware",
    cardSubtitle: "First Communication Tests for Hardware",
    cardDetailedText:
      "We started to communicate with hardware. We tested our hardware parts and found that they are working fine. We also looked our mobile app designs and found that it is fine. Although we had some troubles when using bluetooth module. It has not stabile connection with our mobile device. We will try to fix it in next day.",
  },
  {
    title: "26 April 2022",
    cardTitle: "Fix For Bluetooth Module",
    cardSubtitle: "Fixing Bluetooth Module with Trying Another Component",
    cardDetailedText:
      "After trying and debugging for hours, we decided to try bluetooth module with a different component. We found that it is not working. Other component worked fine. Now, we can communicate with phone and we can use photodiodes without any problem.",
  },
  {
    title: "27 April 2022",
    cardTitle: "Preparing Presentation and Report",
    cardSubtitle: "Started to prepare third report and presentation slide",
    cardDetailedText:
      "After playing with hardware, We continue with presentation and report parts. Those parts were bit easier than hardware absolutely. Since they are not abstract as hardware for us.",
  },
  {
    title: "28 April 2022",
    cardTitle: "Last Controls Before Presentation",
    cardSubtitle: "Controlling Last Things Before Presentation",
    cardDetailedText:
      "We controlled almost everything before our presentation. We have some uncompleted parts but since it is the pre presentation and not the final presentation. We think we are ready for this part. This is how our last look like for now.",
    media: {
      name: "End Product Look",
      source: {
        url: "https://raw.githubusercontent.com/Ikbal-Tech/website/master/public/images/end_product.jpeg",
      },
      type: "IMAGE",
    },
  },
];

const timeline = () => {
  return (
    <Stack padding="30px">
      <Typography textAlign="center">Timeline</Typography>
      <Stack>
        <Chrono cardHeight={150} items={items} mode="VERTICAL_ALTERNATING" />
      </Stack>
    </Stack>
  );
};

export default timeline;
