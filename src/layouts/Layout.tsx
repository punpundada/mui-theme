import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./main/Navbar";
import { Outlet } from "react-router-dom";
import { createTheme, useMediaQuery, ThemeProvider, PaletteMode } from "@mui/material";
import SideBar from "./main/SideBar";
import ErrorBoundary from "@/components/ErrorBoundry";
import { ColorModeContext } from "@/context/colourModeContex";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { blueGrey, cyan,deepOrange,amber } from "@mui/material/colors";
import NavbarC1 from "./custom-1/NavBarC1";

enum LayoutTheme {
  MAIN = "MAIN",
  CUSTOM = "CUSTOM",
}

const drawerWidth = 240;

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
  const { getItem, setItem } = useLocalStorage<PaletteMode>("mode");
  const [mode, setMode] = React.useState<PaletteMode>((getItem() as PaletteMode) ?? "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setItem(prevMode === "light" ? "dark" : "light");
          return prevMode === "light" ? "dark" : "light";
        });
      },
      changeColourMode: (mode: PaletteMode) => {
        setItem(mode);
        setMode(mode);
      },
    }),
    [setItem]
  );

  const getTheme = (mode: PaletteMode) => {
    switch (mode) {
      case "light":
        return {
          primary: cyan,
          divider: cyan[200],
          text: {
            primary: cyan[900],
            secondary: cyan[800],
          },
        };
      case "dark":
        return {
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
        };
      // case "custom":
      //   return {
      //     primary: cyan,
      //     divider: cyan[200],
      //     text: {
      //       primary: cyan[900],
      //       secondary: cyan[800],
      //     },
      //   };

      default:
        return {
          primary: cyan,
          divider: cyan[200],
          text: {
            primary: cyan[900],
            secondary: cyan[800],
          },
        };
    }
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...getTheme(mode),
          primary:{
            main:deepOrange[900]
          },
          secondary:{
            main:amber[800]
          }
        },
      }),
    [mode]
  );

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(!isSmallScreen);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Either CUSTOM or MAIN
  const LAYOUT =
    localStorage.getItem("LAYOUT") ??
    (() => {
      localStorage.setItem("LAYOYT", LayoutTheme.MAIN);
      return LayoutTheme.MAIN;
    })();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {LAYOUT && LAYOUT === LayoutTheme.MAIN ? (
            <>
              <NavBar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                drawerWidth={drawerWidth}
              />
              <SideBar
                handleDrawerClose={handleDrawerClose}
                open={open}
                drawerWidth={drawerWidth}
              />
            </>
          ) : (
            <>
              {isSmallScreen ? (
                <>
                  <NavBar
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    drawerWidth={drawerWidth}
                  />
                  <SideBar
                    handleDrawerClose={handleDrawerClose}
                    open={open}
                    drawerWidth={drawerWidth}
                  />
                </>
              ) : (
                <NavbarC1 open={open} />
              )}
            </>
          )}
          <ErrorBoundary>
            <Main open={open} sx={{ mt: LAYOUT === LayoutTheme.MAIN ? "64px" : "110px" }}>
              <Outlet />
            </Main>
          </ErrorBoundary>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
