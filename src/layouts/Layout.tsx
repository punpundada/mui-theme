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
import { blueGrey, cyan } from "@mui/material/colors";
import NavbarC1 from "./custom-1/NavBarC1";
// import SideBarC1 from "./custom-1/SideBarC1";

enum LayoutTheme {
  MAIN = "MAIN",
  CUSTOM = "CUSTOM",
}

const drawerWidth = 300;
//if you are changin drawerWidth please change from Layout,NavBar and SideBar Files also

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
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

export default function Layout() {
  const { getItem, setItem } = useLocalStorage<"light" | "dark">("mode");
  const [mode, setMode] = React.useState<"light" | "dark">(
    (getItem() as "light" | "dark") ?? "light"
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setItem(prevMode === "light" ? "dark" : "light");
          return prevMode === "light" ? "dark" : "light";
        });
      },
      changeColourMode: (mode: "light" | "dark") => {
        setItem(mode);
        setMode(mode);
      },
    }),
    [setItem]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: cyan,
                divider: cyan[200],
                text: {
                  primary: cyan[900],
                  secondary: cyan[800],
                },
              }
            : {
                primary: blueGrey,
                divider: blueGrey[700],
                background: {
                  default: blueGrey[900],
                  paper: blueGrey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: blueGrey[500],
                },
              }),
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

  //Either CUSTOM or MAIN
  const LAYOUT = localStorage.getItem("LAYOUT") ?? LayoutTheme.MAIN;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex",}}>
          <CssBaseline />
          {LAYOUT && LAYOUT === LayoutTheme.MAIN ? (
            <>
              <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
              <SideBar handleDrawerClose={handleDrawerClose} open={open} />
            </>
          ) : (
            <>
              {isSmallScreen ? (
                <>
                  <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
                  <SideBar handleDrawerClose={handleDrawerClose} open={open} />
                </>
              ) : (
                <NavbarC1  open={open} />
              )}
            </>
          )}
        <ErrorBoundary>
          <Main open={open} sx={{mt: LAYOUT === LayoutTheme.MAIN ? "64px" : "110px",}}>
            <Outlet />
          </Main>
        </ErrorBoundary>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}