import React, { memo } from "react";
import { Grid, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChangeModeButton from "@/components/layout-comps/ChangeModeButton";
import UserAvatarMenu from "@/components/layout-comps/UserAvatarMenu";

//if you are changin drawerWidth please change from Layout,NavBar and SideBar Files also

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth:number
}

const AppBar = memo(styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open,drawerwidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
})));

const NavBar = memo(({
  open,
  handleDrawerOpen,
  drawerWidth,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
  drawerWidth:number
}) => {
  return (
    <AppBar position="fixed" open={open} variant="outlined" color="transparent"  drawerwidth={drawerWidth}>
      <Toolbar>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>

          <Grid>
            <ChangeModeButton />
            <UserAvatarMenu />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
