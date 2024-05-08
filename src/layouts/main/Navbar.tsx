import React from "react";
import {
  Avatar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "@/context/colourModeContex";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const drawerWidth = 300;
//if you are changin drawerWidth please change from Layout,NavBar and SideBar Files also

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const menuList = [
  {
    id: 1,
    name: "Profile",
    element: <PersonOutlineIcon />,
    path: "/profile",
  },
  {
    id: 2,
    name: "Change Password",
    element: <PublishedWithChangesIcon />,
    path: "/change-password",
  },
  {
    id: 3,
    name: "Logout",
    element: <PowerSettingsNewIcon />,
    path: "/",
  },
];

const NavBar = ({
  open,
  handleDrawerOpen,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modeAncher, setModeAnchor] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const modeOpenMenu = Boolean(modeAncher);
  const handleClose = (to: string) => {
    navigate(to);
    setAnchorEl(null);
  };

  const handleModeClose = () => {
    setModeAnchor(null);
  };

  const handleModeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModeAnchor(e.currentTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <AppBar position="fixed" open={open} variant="outlined" color="transparent">
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
            <IconButton
              sx={{ ml: 1, width: 45, height: 45 }}
              // onClick={colorMode.toggleColorMode}
              color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleModeClick}
            >
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={modeAncher}
              open={modeOpenMenu}
              onClose={handleModeClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => colorMode.changeColourMode("light")}
                sx={{ width: "8rem" }}
              >
                <Typography component={"h6"}>List</Typography>
              </MenuItem>
              <MenuItem onClick={() => colorMode.changeColourMode("dark")}>
                <Typography component={"h6"}>Dark</Typography>
              </MenuItem>
            </Menu>

            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                alt="USER NAME"
                src="src/assets/user_placeholder.png"
                sx={{ width: 56, height: 56 }}
              />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menuList.map((item) => (
                <MenuItem key={item.id} onClick={() => handleClose(item.path)}>
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
