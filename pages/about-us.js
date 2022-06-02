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
          We are 12 student/developer who is ready to develop and create value
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
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
          margin="0 auto"
          gap={2}
          sx={{
            width: { xs: "95%", md: "80%" },
          }}
        >
          <TeamMember
            path="/images/team/suleyman_golbol.jpeg"
            name="Süleyman Gölbol"
          />
          <TeamMember
            path="/images/team/Abdullah_Yigit.jpeg"
            name="Abdullah Yiğit"
          />
          <TeamMember path="/images/team/Ersin_Alcin.jpeg" name="Ersin Alçin" />
          <TeamMember
            path="/images/team/Esra_Nur_arican.jpeg"
            name="Esra Nur Arıcan"
          />
          <TeamMember
            path="/images/team/muhammed_ikbal_yazici.jpeg"
            name="Muhammed İkbal Yazıcı"
          />
          <TeamMember
            path="/images/team/Sena_erdogan.jpeg"
            name="Sena Erdoğan"
          />

          <TeamMember
            path="/images/team/yakup_talha_yolcu.jpeg"
            name="Yakup Talha Yolcu"
          />
          <TeamMember
            path="/images/team/Baran_solmaz.png"
            name="Baran Solmaz"
          />
          <TeamMember path="/images/team/firat_idi.png" name="Fırat İdi" />
          <TeamMember
            path="/images/team/muhammed_oguz.png"
            name="Muhammed Oğuz"
          />
          <TeamMember
            path="/images/team/Yunus_Emre_Geyik.jpeg"
            name="Yunus Emre Geyik"
          />
          <TeamMember
            path="/images/team/Ahmet_Furkan_Kurban.jpeg"
            name="Ahmet Furkan Kurban"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default aboutUs;
