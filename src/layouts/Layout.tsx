import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./main/Navbar";
import { Outlet } from "react-router-dom";
import { useMediaQuery, ThemeProvider } from "@mui/material";
import SideBar from "./main/SideBar";
import ErrorBoundary from "@/components/ErrorBoundry";
import { ColourModeProvider } from "@/context/colourModeContex";
import NavbarC1 from "./custom-1/NavBarC1";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import MobileSideBar from "./main/MobileSideBar";

enum LayoutTheme {
  MAIN = "MAIN",
  CUSTOM = "CUSTOM",
}

const drawerWidth = 240;

const Main = React.memo(styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
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
})));

export default function Layout() {
  const { colorMode, theme } = useCustomTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(true);
  const [openMobile, setopenMobile] = React.useState(false);

  const toggleMobileDrawer = React.useCallback((value: boolean) => {
    setopenMobile(value);
  },[]);

  const handleDrawerOpen = React.useCallback(() => {
    setOpen(true);
  },[]);

  const handleDrawerClose = React.useCallback(() => {
    setOpen(false);
  },[]);

  // Either CUSTOM or MAIN
  const LAYOUT =React.useMemo(()=>localStorage.getItem("LAYOUT") ??
  (() => {
    localStorage.setItem("LAYOYT", LayoutTheme.MAIN);
    return LayoutTheme.MAIN;
  })(),[])


  return (
    <ColourModeProvider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {isSmallScreen ? (
            <>
              <NavBar
                open={false}
                handleDrawerOpen={()=>setopenMobile(true)}
                drawerWidth={drawerWidth}
              />
              <MobileSideBar open={openMobile} toggleDrawer={toggleMobileDrawer} />
            </>
          ) : (
            <>
              {LAYOUT === LayoutTheme.MAIN ? (
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
                  <NavbarC1 open={open} />
                </>
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
    </ColourModeProvider>
  );
}
