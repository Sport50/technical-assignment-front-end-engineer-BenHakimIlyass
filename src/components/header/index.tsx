"use client";

import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { IconMenu } from "@tabler/icons-react";
import * as React from "react";
import useHeadroom from "react-useheadroom";
import CustomMenu from "../customMenu";
import Logo from "../logo/fullLogo";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const isPinned = useHeadroom({});

  const linksMenuRef = React.useRef<{ toggle(): void }>();
  const avatarMenuRef = React.useRef<{ toggle(): void }>();

  const handleToggleLinksMenu = () => linksMenuRef.current?.toggle();
  const handleToggleAvatarMenu = () => avatarMenuRef.current?.toggle();

  return (
    <AppBar
      position="fixed"
      color="default"
      style={{
        margin: 0,
        transition: "all 0.4s",
        transform: isPinned
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-100px,0)`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Logo size={40} />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleLinksMenu}
              color="inherit"
            >
              <IconMenu />
            </IconButton>

            <CustomMenu ref={linksMenuRef}>
              <Stack direction="column">
                {pages.map((page) => (
                  <Button key={page} onClick={handleToggleAvatarMenu}>
                    <Typography color="black">{page}</Typography>
                  </Button>
                ))}
              </Stack>
            </CustomMenu>
          </Box>

          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Logo size={40} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Tooltip
                title="This is just a technical assignement :)"
                key={page}
              >
                <Button sx={{ color: "black" }}>{page}</Button>
              </Tooltip>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleToggleAvatarMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                />
              </IconButton>
            </Tooltip>

            <CustomMenu ref={avatarMenuRef} right>
              <Stack direction="column" gap={1}>
                {settings.map((setting) => (
                  <Button
                    key={setting}
                    onClick={handleToggleAvatarMenu}
                    size="small"
                  >
                    <Typography color="black">{setting}</Typography>
                  </Button>
                ))}
              </Stack>
            </CustomMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
