import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = [
  {
    title: "Timeline",
    href: "/timeline",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Github",
    href: "https://github.com/Ikbal-Tech",
    target: "_blank",
  },
  {
    title: "Mobile App Apk",
    href: "https://drive.google.com/drive/u/4/folders/1BgqZuVtIfgmqcyHNr4w1C9FsR57pO2os",
    target: "_blank",
  },
  {
    title: "Youtube Video",
    href: "https://youtu.be/GrEalYtZYaA",
    target: "_blank",
  },
  {
    title: "Final Presentation",
    href: "https://prezi.com/view/gBJ4S9jVLUFPInC9CXwm/",
    target: "_blank",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Ikbal Tech
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.href} passHref>
                    <Button
                      target={page.target && page.target}
                      textAlign="center"
                    >
                      {page.title}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="a"
              textAlign="center"
              sx={{ alignSelf: "center", display: { xs: "flex", md: "none" } }}
            >
              Ikbal Tech
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.title} href={page.href} passHref>
                <Button
                  target={page.target && page.target}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
