import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./main/Navbar";
import { Outlet } from "react-router-dom";
import { createTheme, useMediaQuery, ThemeProvider } from "@mui/material";
import SideBar from "./main/SideBar";
import ErrorBoundary from "@/components/ErrorBoundry";
import { ColorModeContext } from "@/context/colourModeContex";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const drawerWidth = 300;
//if you are changin drawerWidth please change from Layout,NavBar and SideBar Files also

const Main = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout() {
  const {getItem,setItem} = useLocalStorage<"light" | "dark">('mode');
  const [mode, setMode] = React.useState<"light" | "dark">(getItem() as "light" | "dark"  ?? "light");
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setItem(prevMode === "light" ? "dark" : "light")
          return (prevMode === "light" ? "dark" : "light")
        });
      },
      changeColourMode:(mode:"light" | "dark")=>{
        setItem(mode)
        setMode(mode)
      }
    }),
    [setItem]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(!isSmallScreen);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />

          <SideBar handleDrawerClose={handleDrawerClose} open={open} />
          <ErrorBoundary>
            <Main open={open}>
              <DrawerHeader />
              <Outlet />
            </Main>
          </ErrorBoundary>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
